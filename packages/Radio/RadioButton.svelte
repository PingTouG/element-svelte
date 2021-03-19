<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'

	let className = ''
	export { className as class }
	export let group: string | number
	export let value: string | number
	export let label: string | number
	export let disabled = false
	export let name: string
	export let size: string
	let radio

	$: checked = group === value
	$: radio && (radio.checked = checked)
	$: classAttr = trimConcat('es-radio-button', className, preffixConcat(size))

	const dispatch = createEventDispatcher()
	const onChange = () => !disabled && dispatch('change', value)
</script>

<label
	class="{classAttr}"
	class:checked
	class:disabled
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="radio"
>
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
	<span class="es-radio-button__label">
		<slot />
		{#if !$$slots.default}
			{label}
		{/if}
	</span>
</label>

<style src="./_radioButton.scss" global></style>
