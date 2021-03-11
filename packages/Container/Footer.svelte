<script lang="ts">
	import { trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }

	export let height = '60px'

	$: style = `height: ${height}`
	$: classAttr = trimConcat('es-footer', className)
</script>

<footer class="{classAttr}" style="{style}">
	<slot />
</footer>

<style lang="scss" global>
	.es-aside {
		box-sizing: border-box;
		padding: 0 20px;
		flex-shrink: 0;
	}
</style>
