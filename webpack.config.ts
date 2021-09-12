/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';

const config: Configuration = {
  target: 'node',
  mode: 'development',
  entry: './src/index.ts',
};

export default config;
