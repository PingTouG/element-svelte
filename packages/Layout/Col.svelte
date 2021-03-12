<script lang="ts">
	import { getContext } from 'svelte'
	import { GUTTER } from './store'
	import { preffixConcat } from '../utils/tools'
	export let span = 24
	export let offset = 0
	export let push = 0
	export let pull = 0

	const gutter: number = getContext(GUTTER)

	$: style = gutter
		? `padding-left: ${gutter / 2}px;padding-right: ${gutter / 2}px`
		: undefined
	$: spanClass = preffixConcat(span !== 24, 'es-col-span-', span)
	$: offsetClass = preffixConcat(offset, 'es-col-offset-')
	$: pushClass = preffixConcat(push, 'es-col-push-')
	$: pullClass = preffixConcat(pull, 'es-col-pull-')
	$: classAttr = `es-col ${spanClass} ${offsetClass} ${pushClass} ${pullClass}`.trim()
</script>

<div class="{classAttr}" style="{style}">
	<slot />
</div>

<style src="./_col.scss" global></style>
