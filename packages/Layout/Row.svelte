<script lang="ts">
	import { setContext } from 'svelte'
	import { GUTTER } from './store'
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let gutter = 0
	export let type: string
	export let justify = 'start'
	export let align = 'top'

	const isFlex = type === 'flex'
	const classAttr = trimConcat(
		'es-row',
		className,
		preffixConcat(isFlex, '', type),
		preffixConcat(isFlex, 'justify-', justify),
		preffixConcat(isFlex, 'align-', align),
	)

	setContext(GUTTER, gutter)
</script>

<div class="{classAttr}">
	<slot />
</div>

<style src="./_row.scss" global></style>
