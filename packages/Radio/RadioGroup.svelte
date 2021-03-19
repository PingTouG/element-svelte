<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte'
	import { writable } from 'svelte/store'
	import { trimConcat, preffixConcat } from '../utils/tools'
	import { GROUP_VALUE, GROUP_DISABLED, GROUP_SIZE } from './context'
	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }
	export let value: string | number
	export let size: string
	export let disabled = false

	$: classAttr = trimConcat('es-radio-group', className, preffixConcat(size))

	let groupValue = writable(value)
	let groupDisabled = writable(disabled)
	let groupSize = writable(size)
	$: groupValue.set(value)
	$: groupSize.set(size)
	$: value = $groupValue
	setContext(GROUP_VALUE, groupValue)
	setContext(GROUP_DISABLED, groupDisabled)
	setContext(GROUP_SIZE, groupSize)
	groupValue.subscribe((val) => dispatch('change', val))
</script>

<div class="{classAttr}" class:disabled role="radiogroup">
	<slot group="{value}" />
</div>
