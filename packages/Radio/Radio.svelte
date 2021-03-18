<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'

	let className = ''
	export { className as class }
	export let value: string | number | boolean
	export let label: string | number | boolean
	export let disabled = false
	export let border = false
	export let size: string
	export let name: string
	let checked = false
	let radio

	$: {
		checked = value === label
		if (radio) {
			radio.checked = checked
		}
	}
	$: classAttr = trimConcat(
		'es-radio',
		className,
		preffixConcat(border && size, '', size),
	)

	const dispatch = createEventDispatcher()
	const onChange = () => {
		if (!disabled) {
			value = label
			dispatch('change', label)
		}
	}
</script>

<label
	class="{classAttr}"
	class:disabled
	class:border
	class:checked
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="radio"
>
	<input
		bind:this="{radio}"
		class="es-radio__input"
		type="radio"
		name="{name}"
		disabled="{disabled}"
		hidden
		aria-hidden="hidden"
		on:change="{onChange}"
	/>
	<div class="es-radio__container">
		<span class="es-radio__label" class:checked>
			<slot />
			{#if !$$slots.default}
				{label}
			{/if}
		</span>
	</div>
</label>

<style src="./_radio.scss" global></style>
