import * as path from 'path';
import { fs, Import, dotenv } from '@modern-js/utils';
import type { PluginAPI } from '@modern-js/core';
import type { Platform } from '../types';

const tsConfigutils: typeof import('../utils/tsconfig') = Import.lazy(
  '../utils/tsconfig',
  require,
);

const valid: typeof import('../utils/valide') = Import.lazy(
  '../utils/valide',
  require,
);
const buildFeature: typeof import('../features/build') = Import.lazy(
  '../features/build',
  require,
);

export interface IBuildOption {
  watch: boolean;
  tsconfig: string;
  platform: boolean | Exclude<Platform, 'all'>;
  styleOnly: boolean;
  tsc: boolean;
  clear: boolean;
}

export const build = async (
  api: PluginAPI,
  {
    watch = false,
    tsconfig: tsconfigName,
    tsc,
    clear = true,
    platform,
    styleOnly,
  }: IBuildOption,
) => {
  const { appDirectory } = api.useAppContext();
  const modernConfig = api.useResolvedConfigContext();
  const tsconfigPath = path.join(appDirectory, tsconfigName);
  dotenv.config();
  const outputPath = modernConfig.output.path ?? 'dist';
  const isTsProject = tsConfigutils.existTsConfigFile(tsconfigPath);
  const enableTscCompiler =
    isTsProject && tsc && !modernConfig.output.disableTsChecker;

  valid.valideBeforeTask({ modernConfig, tsconfigPath });

  // TODO: 一些配置只需要从modernConfig中获取
  await buildFeature.build(
    api,
    {
      appDirectory,
      enableWatchMode: watch,
      isTsProject,
      platform,
      sourceDir: 'src',
      tsconfigName,
      enableTscCompiler,
      clear,
      styleOnly,
      outputPath,
    },
    modernConfig,
  );

  process.on('SIGBREAK', () => {
    console.info('exit');
    const tempTsconfigFilePath = path.join(
      appDirectory,
      './tsconfig.temp.json',
    );
    if (fs.existsSync(tempTsconfigFilePath)) {
      fs.removeSync(tempTsconfigFilePath);
    }
  });
};
