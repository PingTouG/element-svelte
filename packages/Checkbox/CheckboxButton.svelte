<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'
	import type { Writable } from 'svelte/store'
	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }
	export let group: Array<string | number> | string | number
	export let value: string | number
	export let label: string | number
	export let disabled = false
	export let name: string
	export let size: string

	$: classAttr = trimConcat(
		'es-checkbox-button',
		className,
		preffixConcat(size),
	)

	$: checked = Array.isArray(group) ? group?.includes(value) : group === value
	let checkbox
	$: checkbox && (checkbox.checked = checked)
	const onChange = () => {
		if (!disabled) {
			group = !checked
				? Array.isArray(group)
					? [...group, value]
					: value
				: Array.isArray(group)
				? group.filter((item) => item !== value)
				: value

			dispatch('change', group)
		}
	}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	class="{classAttr}"
	class:checked
	class:disabled
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="checkbox"
>
	<input
		bind:this="{checkbox}"
		class="es-checkbox-button__input"
		type="checkbox"
		group="{group}"
		value="{value}"
		name="{name}"
		disabled="{disabled}"
		hidden
		aria-hidden="hidden"
		on:change="{onChange}"
	/>
	<span class="es-checkbox-button__label">
		<slot />
		{#if !$$slots.default}
			{label}
		{/if}
	</span>
</label>

<style src="./_checkboxButton.scss" global></style>
