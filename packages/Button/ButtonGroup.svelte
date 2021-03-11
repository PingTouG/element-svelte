<script lang="ts">
	import { trimConcat } from '../utils/tools'
	let className = ''
	export { className as class }

	const classAttr = trimConcat('es-button-group', className)
</script>

<div class="{classAttr}">
	<slot />
</div>

<style lang="scss" src="./_buttonGroup.scss" global></style>
