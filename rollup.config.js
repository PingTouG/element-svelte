import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'

const plugins = [
	svelte({
		preprocess: sveltePreprocess({
			sourceMap: false,
			postcss: {
				plugins: [require('autoprefixer')()],
			},
			babel: {
				presets: [
					[
						'@babel/preset-env',
						{
							loose: true,
							// No need for babel to resolve modules
							modules: false,
							targets: {
								// ! Very important. Target es6+
								esmodules: true,
							},
						},
					],
				],
			},
		}),
		compilerOptions: {
			// enable run-time checks when not in production
			dev: false,
		},
	}),
	css({ output: 'styles/index.css' }),
	resolve(),
	commonjs(),
	typescript({ sourceMap: false, inlineSources: false }),
	terser(),
]

export default [
	{
		input: 'packages/main.ts',
		output: {
			name: 'ElementSvelte',
			file: pkg.browser,
			format: 'umd',
		},
		plugins,
	},
	{
		input: 'packages/main.ts',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		],
		plugins,
	},
]
