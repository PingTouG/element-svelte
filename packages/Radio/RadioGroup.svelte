<script lang="ts">
	import { trimConcat, preffixConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let value: string | number | boolean
	export let size: string
	export let disabled = false
	export let textColor = '#fff'
	export let fill = '#1890ff'

	$: classAttr = trimConcat('es-radio-group', className, preffixConcat(size))
</script>

<div class="{classAttr}" class:disabled role="radiogroup">
	<slot />
</div>
