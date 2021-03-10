module.exports = {
	'*.{cjs,js,ts,json,svelte}': [
		'prettier --plugin=./node_modules/prettier-plugin-svelte --write',
	],
	'*.svelte': ['svelte-check'],
}
