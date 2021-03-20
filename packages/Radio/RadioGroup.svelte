<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte'
	import { writable } from 'svelte/store'
	import { trimConcat, preffixConcat } from '../utils/tools'
	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }
	export let value: string | number
	export let size: string
	export let disabled = false

	$: classAttr = trimConcat('es-radio-group', className, preffixConcat(size))

	const groupValue = writable(value)
	const groupDisabled = writable(disabled)
	const groupSize = writable(size)
	$: groupValue.set(value)
	$: groupSize.set(size)
	$: value = $groupValue
	setContext('ES:radio-group:value', groupValue)
	setContext('ES:radio-group:disabled', groupDisabled)
	setContext('ES:radio-group:size', groupSize)
	groupValue.subscribe((val) => dispatch('change', val))
</script>

<div class="{classAttr}" class:disabled role="radiogroup">
	<slot group="{value}" />
</div>
