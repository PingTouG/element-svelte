<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte'
	import { writable } from 'svelte/store'
	import type { Writable } from 'svelte/store'
	import { trimConcat, preffixConcat } from '../utils/tools'
	const dispatch = createEventDispatcher()

	let className: string = ''
	export { className as class }
	export let group: string | number
	export let size: string
	export let disabled: boolean = false

	$: classAttr = trimConcat('es-radio-group', className, preffixConcat(size))

	const groupGroup: Writable<string | number> = writable(group)
	$: groupGroup.set(group)
	$: group = $groupGroup
	setContext('ES:radio-group:group', groupGroup)
	setContext('ES:radio-group:change', (val) => dispatch('change', val))

	const groupDisabled: Writable<boolean> = writable(disabled)
	$: groupDisabled.set(disabled)
	setContext('ES:radio-group:disabled', groupDisabled)

	const groupSize: Writable<string> = writable(size)
	$: groupSize.set(size)
	setContext('ES:radio-group:size', groupSize)
</script>

<div class="{classAttr}" class:disabled role="radiogroup">
	<slot group="{group}" />
</div>
