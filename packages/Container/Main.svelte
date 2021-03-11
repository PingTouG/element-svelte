<script lang="ts">
	import { trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }

	$: classAttr = trimConcat('es-main', className)
</script>

<main class="{classAttr}">
	<slot />
</main>

<style lang="scss" global>
	.es-main {
		display: block;
		flex: 1;
		flex-basis: auto;
		padding: 20px;
	}
</style>
