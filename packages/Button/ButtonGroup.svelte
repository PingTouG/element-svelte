<script lang="ts">
	import { trimConcat } from '../utils/tools'

	let className: string = ''
	export { className as class }

	$: classAttr = trimConcat('es-button-group', className)
</script>

<div class="{classAttr}">
	<slot />
</div>

<style lang="scss" src="./_buttonGroup.scss" global></style>
