<script lang="ts">
	import Icon from '../Icon/index.svelte'

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
</script>

<button
	class="es-button {size ? size : ''} {type ? `type-${type}` : ''}"
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
