<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher, getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	let className: string = ''
	export { className as class }
	export let group: Array<string | number> | string | number
	export let value: string | number
	export let label: string | number
	export let disabled: boolean = false
	export let name: string
	export let size: string

	$: classAttr = trimConcat(
		'es-checkbox-button',
		className,
		preffixConcat(size),
	)

	let groupGroup: Writable<
		Array<string | number> | string | number
	> = getContext('ES:checkbox-group:group')
	const dispathcGroupChange: Function = getContext('ES:checkbox-group:change')
	let checked: boolean = false
	$: {
		let groupValue: Array<string | number> | string | number = $groupGroup
			? $groupGroup
			: group
		checked = Array.isArray(groupValue)
			? groupValue.includes(value)
			: groupValue && groupValue === value
	}
	let checkbox: HTMLFormElement
	$: checkbox && (checkbox.checked = checked)
	const dispatch = createEventDispatcher()

	const onChange = () => {
		let groupValue: Array<string | number> | string | number = $groupGroup
			? $groupGroup
			: group

		if (!disabled && groupValue) {
			checked = !checked
			groupValue = checked
				? Array.isArray(groupValue)
					? [...groupValue, value]
					: value
				: Array.isArray(groupValue)
				? groupValue.filter((item) => item !== value)
				: value

			$groupGroup ? ($groupGroup = groupValue) : (group = groupValue)

			const changeValue:
				| Array<string | number>
				| string
				| number
				| boolean = groupValue ? groupValue : checked
			dispathcGroupChange && dispathcGroupChange(changeValue)
			dispatch('change', changeValue)
		}
	}

	let isLimitDisabled: boolean = false
	let groupMin: Writable<number> = getContext('ES:checkbox-group:min')
	let groupMax: Writable<number> = getContext('ES:checkbox-group:max')

	$: {
		const groupValue: Array<string | number> | string | number = $groupGroup
			? $groupGroup
			: group
		Array.isArray(groupValue) &&
			!!($groupMin || $groupMax) &&
			(isLimitDisabled =
				(groupValue.length >= $groupMax && !checked) ||
				(groupValue.length <= $groupMin && checked))
	}

	let groupDisabled: Writable<boolean> = getContext(
		'ES:checkbox-group:disabled',
	)
	$: disabled = $groupDisabled || isLimitDisabled

	const groupSize: Writable<string> = getContext('ES:checkbox-group:size')
	$: size = $groupSize
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
