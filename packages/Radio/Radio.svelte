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

	$: checked = value === label
	$: classAttr = trimConcat(
		'es-radio',
		className,
		preffixConcat(border && size, '', size),
	)

	const dispatch = createEventDispatcher()
	const onClick = () => {
		if (!disabled) {
			value = label
			dispatch('click', label)
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
	on:click="{onClick}"
>
	<input
		class="es-radio__input"
		type="radio"
		name="{name}"
		hidden
		aria-hidden="hidden"
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
