<script lang="ts">
	import { preffixConcat, trimConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'
	import Icon from '../Icon/index.svelte'

	let className = ''
	export { className as class }

	export let disabled = false
	export let href: string
	export let icon: string
	export let type: string
	export let underline = true
	export let target = '_self'

	$: classAttr = trimConcat(
		'es-link',
		className,
		preffixConcat(disabled, '', 'disabled'),
		preffixConcat(type, 'link-type-'),
		preffixConcat(underline, '', 'underline'),
	)

	const dispatch = createEventDispatcher()
	function onClick() {
		;(!disabled || !href) && dispatch('click')
	}
</script>

<a
	class="{classAttr}"
	href="{disabled ? null : href}"
	on:click="{onClick}"
	target="{target}"
>
	{#if icon}
		<Icon name="{icon}" />
	{/if}
	{#if $$slots.default}
		<span class="es-link--inner">
			<slot />
		</span>
	{/if}
	{#if $$slots.icon}
		<slot name="icon" />
	{/if}
</a>

<style src="./_index.scss" global></style>
