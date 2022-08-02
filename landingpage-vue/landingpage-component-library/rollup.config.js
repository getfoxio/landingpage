import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import processScss from 'rollup-plugin-scss'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/landingpage.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/landingpage.js',
      },
    ],
    plugins: [
      vue(),
      peerDepsExternal(),
      postcss({ extract: true, process: processScss }),
    ],
  },
]
