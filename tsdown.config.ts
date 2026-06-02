import { banner } from 'echo-banner';
import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig([
  {
    entry: './lib/index.ts',
    format: ['cjs', 'esm'],
    dts: true,
    minify: true,
    banner: {
      js: banner({
        pkg,
      }),
    },
  },
]);
