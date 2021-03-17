<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { createEventDispatcher } from 'svelte'

	let className = ''
	export { className as class }
	export let value: string | number
	export let label: string | number
	export let disabled = false
	export let name: string
	export let size: string

	$: checked = value === label
	$: classAttr = trimConcat(
		'es-radio-button',
		className,
		preffixConcat(size, ''),
	)

	const dispatch = createEventDispatcher()
	const onClick = () => {
		if (!disabled) {
			value = label
			dispatch('click', label)
		}
	}
</script>

<div class="{classAttr}" class:checked class:disabled on:click="{onClick}">
	<input class="es-radio-button__input" type="radio" name="{name}" hidden />
	<span class="es-radio-button__label">
		<slot />
		{#if !$$slots.default}
			{label}
		{/if}
	</span>
</div>

<style src="./_radioButton.scss" global></style>
