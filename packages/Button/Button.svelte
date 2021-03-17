<script lang="ts">
	import Icon from '../Icon/index.svelte'
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let block: boolean
	export let circle: boolean
	export let disabled: boolean
	export let icon: string
	export let loading: boolean
	export let nativeType = 'button'
	export let plain: boolean
	export let round: boolean
	export let size: string
	export let type: string

	$: classAttr = trimConcat(
		'es-button',
		className,
		preffixConcat(size),
		preffixConcat(type, 'type-'),
	)
</script>

<button
	class="{classAttr}"
	class:block
	class:circle
	class:loading
	class:plain
	class:round
	disabled="{disabled}"
	type="{nativeType}"
	on:click
>
	{#if loading}
		<span class="loading-icon"></span>
	{/if}
	{#if icon}
		<Icon name="{icon}" />
	{/if}
	<slot />
</button>

<style lang="scss" src="./_button.scss" global></style>
