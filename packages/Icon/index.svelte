<script lang="ts">
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className: string = ''
	export { className as class }
	export let color: string
	export let name: string
	export let size: string = '14px'

	$: style = `font-size: ${size};${preffixConcat(color, 'color: ')}`
	$: classAttr = trimConcat(className, preffixConcat(name, 'es-icon-'))
</script>

<i class="{classAttr}" style="{style}" on:click></i>

<style lang="scss" src="./_icon.scss" global></style>
