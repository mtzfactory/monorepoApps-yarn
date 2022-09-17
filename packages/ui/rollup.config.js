import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import { main, module, dependencies, peerDependencies } from './package.json';

export default [
  {
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    input: 'src/index.ts',
    output: [
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [commonjs(), nodeResolve(), typescript()],
  },
];
