<script lang="ts">
	import { getContext } from 'svelte'
	import { GUTTER } from './store'
	import { preffixConcat, trimConcat } from '../utils/tools'
	export let span = 24
	export let offset = 0
	export let push = 0
	export let pull = 0

	const gutter: number = getContext(GUTTER)

	$: style = gutter
		? `padding-left: ${gutter / 2}px;padding-right: ${gutter / 2}px`
		: undefined

	$: classAttr = trimConcat(
		'es-col',
		preffixConcat(span !== 24, 'es-col-span-', span),
		preffixConcat(offset, 'es-col-offset-'),
		preffixConcat(push, 'es-col-push-'),
		preffixConcat(pull, 'es-col-pull-'),
	)
</script>

<div class="{classAttr}" style="{style}">
	<slot />
</div>

<style src="./_col.scss" global></style>
