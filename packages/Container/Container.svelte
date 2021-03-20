<script lang="ts">
	import { onMount } from 'svelte'
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let direction: string

	let container
	onMount(() => {
		const children: Array<HTMLElement> = Array.from(container.children)

		direction = children.some(
			(item) =>
				Array.from(item.classList).includes('es-header') ||
				Array.from(item.classList).includes('es-footer'),
		)
			? 'vertical'
			: ''
	})

	$: isVertical = direction === 'vertical'
	$: classAttr = trimConcat(
		'es-container',
		className,
		preffixConcat(isVertical, '', 'vertical'),
	)
</script>

<section bind:this="{container}" class="{classAttr}">
	<slot />
</section>

<style lang="scss" global>
	.es-container {
		display: flex;
		flex-direction: row;
		flex: 1;
		flex-basis: auto;
		box-sizing: border-box;
		min-width: 0;

		&.vertical {
			flex-direction: column;
		}
	}
</style>
