<script lang="ts">
	let className = ''
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher, getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	export { className as class }
	export let group: Array<string | number> | string | number
	export let value: string | number
	export let label: string | number
	export let trueValue: string | number
	export let falseValue: string | number
	export let disabled = false
	export let border = false
	export let size: string
	export let name: string
	export let checked = false

	$: classAttr = trimConcat(
		'es-checkbox',
		className,
		preffixConcat(border && size, '', size),
	)

	let groupGroup: Writable<
		Array<string | number> | string | number
	> = getContext('ES:checkbox-group:group')
	const dispathcGroupChange: Function = getContext('ES:checkbox-group:change')
	$: {
		let groupValue = $groupGroup ? $groupGroup : group
		checked = Array.isArray(groupValue)
			? groupValue.includes(value)
			: groupValue && groupValue === trueValue
	}
	let checkbox
	$: checkbox && (checkbox.checked = checked)
	const dispatch = createEventDispatcher()
	const onChange = () => {
		let groupValue = $groupGroup ? $groupGroup : group

		if (!disabled && groupValue) {
			checked = !checked
			groupValue = checked
				? Array.isArray(groupValue)
					? [...groupValue, value]
					: trueValue
				: Array.isArray(groupValue)
				? groupValue.filter((item) => item !== value)
				: falseValue

			$groupGroup ? ($groupGroup = groupValue) : (group = groupValue)

			const changeValue = groupValue ? groupValue : checked
			dispathcGroupChange && dispathcGroupChange(changeValue)
			dispatch('change', changeValue)
		}
	}

	let isLimitDisabled = false
	let groupMin: Writable<number> = getContext('ES:checkbox-group:min')
	let groupMax: Writable<number> = getContext('ES:checkbox-group:max')

	$: {
		const groupValue = $groupGroup ? $groupGroup : group
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
	class:disabled
	class:border
	class:checked
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="checkbox"
>
	{#if trueValue || falseValue}
		<input
			bind:this="{checkbox}"
			class="es-checkbox__input"
			type="checkbox"
			name="{name}"
			group="{group}"
			value="{value}"
			checked="{checked}"
			true-value="{trueValue}"
			false-value="{falseValue}"
			disabled="{disabled}"
			aria-hidden="hidden"
			hidden
			on:change="{onChange}"
		/>
	{:else}
		<input
			bind:this="{checkbox}"
			class="es-checkbox__input"
			type="checkbox"
			name="{name}"
			group="{group}"
			value="{value}"
			disabled="{disabled}"
			aria-hidden="hidden"
			hidden
			on:change="{onChange}"
		/>
	{/if}
	<div class="es-checkbox__container">
		<span class="es-checkbox__label" class:checked>
			<slot />
			{#if !$$slots.default}
				{label}
			{/if}
		</span>
	</div>
</label>

<style src="./_checkbox.scss" global></style>
