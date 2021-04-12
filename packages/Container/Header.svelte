<script lang="ts">
	import { trimConcat } from '../utils/tools'

	let className: string = ''
	export { className as class }
	export let height: string = '60px'

	$: style = `height: ${height}`
	$: classAttr = trimConcat('es-header', className)
</script>

<header class="{classAttr}" style="{style}">
	<slot />
</header>

<style lang="scss" global>
	.es-header {
		padding: 0 20px;
	}
</style>
