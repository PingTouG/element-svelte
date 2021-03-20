<script lang="ts">
	import { trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let width = '300px'

	$: style = `width: ${width}`
	$: classAttr = trimConcat('es-aside', className)
</script>

<aside class="{classAttr}" style="{style}">
	<slot />
</aside>

<style lang="scss" global>
	.es-aside {
		box-sizing: border-box;
		flex-shrink: 0;
		overflow: auto;
	}
</style>
