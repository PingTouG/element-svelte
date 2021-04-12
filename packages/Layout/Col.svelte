<script lang="ts">
	import { getContext } from 'svelte'
	import { GUTTER } from './store'
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className: string = ''
	export { className as class }
	export let span: number = 24
	export let offset: number = 0
	export let push: number = 0
	export let pull: number = 0

	const gutter: number = getContext(GUTTER)

	$: style = gutter
		? `padding-left: ${gutter / 2}px;padding-right: ${gutter / 2}px`
		: undefined

	$: classAttr = trimConcat(
		'es-col',
		className,
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
