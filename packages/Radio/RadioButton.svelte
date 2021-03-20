<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher, getContext } from 'svelte'
	import type { Writable } from 'svelte/store'
	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }
	export let group: string | number
	export let value: string | number
	export let label: string | number
	export let disabled = false
	export let name: string
	export let size: string
	let radio

	let groupGroup: Writable<string | number> = getContext('ES:radio-group:group')
	const groupDisabled: Writable<boolean> = getContext('ES:radio-group:disabled')
	const groupSize: Writable<string> = getContext('ES:radio-group:size')

	$: disabled = $groupDisabled
	$: size = $groupSize
	$: checked = ($groupGroup && $groupGroup === value) || group === value
	$: radio && (radio.checked = checked)
	$: classAttr = trimConcat('es-radio-button', className, preffixConcat(size))

	const onChange = () => !disabled && dispatch('change', value)
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	class="{classAttr}"
	class:checked
	class:disabled
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="radio"
>
	{#if $groupGroup}
		<input
			bind:this="{radio}"
			class="es-radio-button__input"
			type="radio"
			bind:group="{$groupGroup}"
			value="{value}"
			name="{name}"
			disabled="{disabled}"
			hidden
			aria-hidden="hidden"
			on:change="{onChange}"
		/>
	{:else}
		<input
			bind:this="{radio}"
			class="es-radio-button__input"
			type="radio"
			bind:group
			value="{value}"
			name="{name}"
			disabled="{disabled}"
			hidden
			aria-hidden="hidden"
			on:change="{onChange}"
		/>
	{/if}

	<span class="es-radio-button__label">
		<slot />
		{#if !$$slots.default}
			{label}
		{/if}
	</span>
</label>

<style src="./_radioButton.scss" global></style>
