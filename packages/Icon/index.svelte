<script lang="ts">
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let color: string
	export let name: string
	export let size = '14px'

	$: style = `font-size: ${size};${preffixConcat(color, 'color: ')}`
	$: classAttr = trimConcat(className, preffixConcat(name, 'es-icon-'))
</script>

<i class="{classAttr}" style="{style}"></i>

<style lang="scss" src="./_icon.scss" global></style>
