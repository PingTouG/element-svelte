<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher, getContext } from 'svelte'
	import type { Writable } from 'svelte/store'

	let className = ''
	export { className as class }
	export let group: string | number
	export let value: string | number
	export let label: string | number
	export let disabled = false
	export let border = false
	export let size: string
	export let name: string
	let radio
	let groupGroup: Writable<string | number> = getContext('ES:radio-group:group')
	const groupDisabled: Writable<boolean> = getContext('ES:radio-group:disabled')
	const groupSize: Writable<string> = getContext('ES:radio-group:size')

	$: disabled = $groupDisabled
	$: size = $groupSize
	$: checked = ($groupGroup && $groupGroup === value) || group === value
	$: radio && (radio.checked = checked)
	$: classAttr = trimConcat(
		'es-radio',
		className,
		preffixConcat(border && size, '', size),
	)

	const dispatch = createEventDispatcher()
	const onChange = () => !disabled && dispatch('change', value)
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
	class="{classAttr}"
	class:disabled
	class:border
	class:checked
	aria-disabled="{disabled}"
	aria-checked="{checked}"
	role="radio"
>
	{#if $groupGroup}
		<input
			bind:this="{radio}"
			class="es-radio__input"
			type="radio"
			name="{name}"
			bind:group="{$groupGroup}"
			value="{value}"
			disabled="{disabled}"
			hidden
			aria-hidden="hidden"
			on:change="{onChange}"
		/>
	{:else}
		<input
			bind:this="{radio}"
			class="es-radio__input"
			type="radio"
			name="{name}"
			bind:group
			value="{value}"
			disabled="{disabled}"
			hidden
			aria-hidden="hidden"
			on:change="{onChange}"
		/>
	{/if}
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
