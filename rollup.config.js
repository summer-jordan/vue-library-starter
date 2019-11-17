import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import svgo from 'rollup-plugin-svgo'

const outDir = 'dist/lib/';
const fileName = 'library';
const exportName = 'MyLibrary';

const basePlugins = [
  replace({ 'process.env.NODE_ENV': '"production"' }),
  commonjs(),
  alias({
    resolve: ['.jsx', '.js', '.ts', '.tsx', '.vue', '.svg'],
  }),
  svgo(),
  typescript({
    tsconfig: false,
    experimentalDecorators: true,
    module: 'es2015'
  }),
  vue(),
  buble(),
];

export default [
  {
    input: './src/lib.ts',
    external: [
      'vue',
    ],
    output: [
      {
        format: 'esm',
        file: `${outDir}${fileName}.esm.js`,
        exports: 'named',
        name: exportName,
      },
      {
        format: 'cjs',
        file: `${outDir}${fileName}.js`,
        exports: 'named',
        name: exportName,
      },
    ],
    plugins: [
      ...basePlugins,
      nodeResolve({
        only: []
      }),
      generatePackageJson({
        main: './library.js',
        module: './library.esm.js',
        baseContents: {
          "name": "vue-library-starter",
          "version": "0.1.0",
          "peerDependencies": {
            "vue": "^2.6.10",
          },
        }
      }),
    ]
  },
  {
    input: './src/lib.ts',
    external: [
      'vue',
    ],
    output: {
      format: 'iife',
      file: `${outDir}${fileName}.browser.js`,
      exports: 'named',
      name: exportName,
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      ...basePlugins,
      nodeResolve({
        only: [
          'vue-property-decorator',
          'vue-class-component',
        ]
      }),
      terser({
        ecma: 5
      })
    ]
  }
]
