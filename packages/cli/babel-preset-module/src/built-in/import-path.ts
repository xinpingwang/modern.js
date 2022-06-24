import path from 'path';
import { fs, slash } from '@modern-js/utils';
import { types as t } from '@babel/core';
import type { NodePath, PluginPass } from '@babel/core';
import type { ImportStyleType } from '../types';
import { isProjectFile } from './utils';

export interface IImportPathOpts {
  appDirectory: string;
  importStyle?: ImportStyleType;
  staticDir?: string;
  styleDir?: string;
}

const replaceValueHash: Record<string, string> = {};

const isResourceInSrc = (srcDir: string, resourcePath: string) =>
  !path.relative(srcDir, path.dirname(resourcePath)).includes('..');

const getImportFileDistPath = (
  compilerFile: string,
  srcDir: string,
  importName: string,
  opts: IImportPathOpts,
) => {
  const { staticDir = 'static', styleDir = 'styles' } = opts;
  const dir = path.dirname(compilerFile);
  const compilerFileRelativeLoc = path.relative(dir, srcDir);
  const importFileRelativeLoc = path.relative(
    srcDir,
    path.dirname(path.join(dir, importName)),
  );
  const inSrc = isResourceInSrc(srcDir, path.join(dir, importName));
  const importFileDistDir = path.join(
    inSrc ? '..' : '../..',
    compilerFileRelativeLoc,
    isStyleFile(importName) ? styleDir : staticDir,
    importFileRelativeLoc,
  );
  const importFileName = path.basename(importName);
  const importFileDistPath = path.join(importFileDistDir, importFileName);
  return slash(importFileDistPath);
};

export const isStaticFile = (file: string, filename: string) => {
  const tests: [RegExp, string][] = [
    [/\.js$/, '.js'],
    [/\.jsx$/, '.jsx'],
    [/\.ts$/, '.ts'],
    [/\.tsx$/, '.tsx'],
  ];

  // check this file is static file
  // by string and determine if the file with the added suffix exists
  return !tests.some(
    ([regex, prefix]) =>
      regex.test(file) ||
      fs.existsSync(path.join(path.dirname(filename), file) + prefix) ||
      fs.existsSync(path.join(path.dirname(filename), file, 'index') + prefix),
  );
};

const isStyleFile = (file: string) => {
  const tests = [/\.css$/, /\.less$/, /\.sass$/, /\.scss$/];

  return tests.some(regex => regex.test(file));
};

const getReplacePath = (
  importName: string | undefined,
  filename: string | null | undefined,
  srcDir: string,
  opts: IImportPathOpts,
) => {
  const { importStyle } = opts;
  if (!filename || !importName) {
    return '';
  }

  if (!isProjectFile(importName)) {
    return '';
  }

  if (!isStaticFile(importName, filename)) {
    return '';
  }

  let realFilepath = getImportFileDistPath(filename, srcDir, importName, opts);
  if (isStyleFile(realFilepath) && importStyle === 'compiled-code') {
    realFilepath = realFilepath.replace(/\.(less|sass|scss)$/, '.css');
  }

  return realFilepath;
};

const importPath = () => ({
  name: 'import-path',
  visitor: {
    Program(nodePath: NodePath<t.Program>, { opts, file }: PluginPass) {
      nodePath.traverse({
        ImportDeclaration({ node }) {
          const { source } = node;
          const { appDirectory } = opts as IImportPathOpts;
          const srcDir = path.join(appDirectory, 'src');
          const {
            opts: { filename },
          } = file;

          const importName = source?.value ? source.value : undefined;
          const replaceValue = getReplacePath(
            importName,
            filename,
            srcDir,
            opts as IImportPathOpts,
          );
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          const hashKey = filename + (importName || '');
          if (replaceValue) {
            if (typeof filename === 'string' && !replaceValueHash[hashKey]) {
              node.source.value = replaceValue;
              replaceValueHash[hashKey] = replaceValue;
            } else if (
              typeof filename === 'string' &&
              replaceValueHash[hashKey]
            ) {
              node.source.value = replaceValueHash[hashKey];
            } else {
              node.source.value = replaceValue;
            }
          }
        },
        // dynamic import
        CallExpression({ node }) {
          const { appDirectory } = opts as IImportPathOpts;
          const srcDir = path.join(appDirectory, 'src');
          const { filename } = file.opts;
          const { callee, arguments: args } = node;

          if (
            callee.type === 'Import' ||
            (callee.type === 'Identifier' && callee.name === 'require')
          ) {
            const firstArg = args[0] as t.StringLiteral;
            if (firstArg.value) {
              const importName = firstArg.value;
              const replaceValue = getReplacePath(
                importName,
                filename,
                srcDir,
                opts as IImportPathOpts,
              );

              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              const hashKey = filename + (importName || '');
              if (replaceValue) {
                if (
                  typeof filename === 'string' &&
                  !replaceValueHash[hashKey]
                ) {
                  node.arguments = [t.stringLiteral(replaceValue)];
                  replaceValueHash[hashKey] = replaceValue;
                } else if (
                  typeof filename === 'string' &&
                  replaceValueHash[hashKey]
                ) {
                  node.arguments = [t.stringLiteral(replaceValueHash[hashKey])];
                } else {
                  node.arguments = [t.stringLiteral(replaceValue)];
                }
              }
            }
          }
        },
      });
    },
  },
});

export default importPath;
