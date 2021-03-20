<script lang="ts">
	let className = ''
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'

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
	let checkbox

	$: checked = Array.isArray(group)
		? group?.includes(value)
		: group === trueValue

	$: checkbox && (checkbox.checked = checked)
	$: classAttr = trimConcat(
		'es-checkbox',
		className,
		preffixConcat(border && size, '', size),
	)

	const dispatch = createEventDispatcher()
	const onChange = () => {
		if (!disabled) {
			checked = !checked
			group = checked
				? Array.isArray(group)
					? [...group, value]
					: trueValue
				: Array.isArray(group)
				? group.filter((item) => item !== value)
				: falseValue

			dispatch('change', group ? group : checked)
		}
	}
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
