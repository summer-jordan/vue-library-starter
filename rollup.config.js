import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json'

const basePlugins = [
  replace({ 'process.env.NODE_ENV': '"production"' }),
  commonjs(),
  alias({
    resolve: ['.jsx', '.js', '.ts', '.tsx', '.vue'],
  }),
  typescript({
    tsconfig: false,
    experimentalDecorators: true,
    module: 'es2015'
  }),
  vue(),
];

export default [
  {
    input: './lib/main.ts',
    external: [
      'vue',
      'vue-property-decorator',
      'vue-class-component',
    ],
    output: [
      {
        format: 'esm',
        file: 'dist/library.esm.js',
        exports: 'named',
        name: 'MyLibrary',
      },
      {
        format: 'cjs',
        file: 'dist/library.js',
        exports: 'named',
        name: 'MyLibrary',
      },
    ],
    plugins: [
      ...basePlugins,
      generatePackageJson({
        main: './library.js',
        module: './library.esm.js',
        baseContents: {
          "name": "@fdstack/vue-library-start",
          "version": "0.1.0",
          "peerDependencies": {
            "vue": "^2.6.10",
            "vue-class-component": "^7.0.2",
            "vue-property-decorator": "^8.3.0"
          },
        }
      }),
    ]
  },
  {
    input: 'lib/main.ts',
    external: [
      'vue',
    ],
    output: {
      format: 'iife',
      file: 'dist/library.browser.js',
      exports: 'named',
      name: 'MyLibrary',
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      ...basePlugins,
      resolve({
        only: [
          'vue-property-decorator',
          'vue-class-component',
        ]
      }),
      buble(),
      terser({
        ecma: 5
      })
    ]
  }
]
