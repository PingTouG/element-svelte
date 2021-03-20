<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte'
	import { writable } from 'svelte/store'
	import { trimConcat, preffixConcat } from '../utils/tools'
	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }
	export let group: string | number
	export let size: string
	export let disabled = false

	$: classAttr = trimConcat('es-radio-group', className, preffixConcat(size))

	const groupGroup = writable(group)
	const groupDisabled = writable(disabled)
	const groupSize = writable(size)
	$: groupGroup.set(group)
	$: groupSize.set(size)
	$: group = $groupGroup
	setContext('ES:radio-group:group', groupGroup)
	setContext('ES:radio-group:disabled', groupDisabled)
	setContext('ES:radio-group:size', groupSize)
	groupGroup.subscribe((val) => dispatch('change', val))
</script>

<div class="{classAttr}" class:disabled role="radiogroup">
	<slot group="{group}" />
</div>
