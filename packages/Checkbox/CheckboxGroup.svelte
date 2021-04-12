<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte'
	import { writable } from 'svelte/store'
	import type { Writable } from 'svelte/store'
	import { trimConcat, preffixConcat } from '../utils/tools'
	const dispatch = createEventDispatcher()

	let className: string = ''
	export { className as class }
	export let group: Array<string | number> | string | number
	export let size: string
	export let disabled: boolean = false
	export let min: number
	export let max: number

	$: classAttr = trimConcat('es-checkbox-group', className, preffixConcat(size))

	const groupGroup: Writable<
		Array<string | number> | string | number
	> = writable(group)
	$: groupGroup.set(group)
	$: group = $groupGroup
	setContext('ES:checkbox-group:group', groupGroup)
	setContext('ES:checkbox-group:change', (val) => dispatch('change', val))

	const groupDisabled: Writable<boolean> = writable(disabled)
	$: groupDisabled.set(disabled)
	setContext('ES:checkbox-group:disabled', groupDisabled)

	const groupSize: Writable<string> = writable(size)
	$: groupSize.set(size)
	setContext('ES:checkbox-group:size', groupSize)

	const groupMin: Writable<number> = writable(min)
	$: groupMin.set(min)
	setContext('ES:checkbox-group:min', groupMin)

	const groupMax: Writable<number> = writable(max)
	setContext('ES:checkbox-group:max', groupMax)
	$: groupMax.set(max)
</script>

<div
	class="{classAttr}"
	class:disabled
	role="group"
	aria-label="checkbox-group"
>
	<slot group="{group}" />
</div>
