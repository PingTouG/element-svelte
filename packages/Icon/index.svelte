<script lang="ts">
	import { preffixConcat, trimConcat } from '../utils/tools'

	let className = ''
	export { className as class }
	export let color: string
	export let name: string
	export let size = '16px'

	$: style = `font-size: ${size};${preffixConcat(color, 'color: ')}`
	const classAttr = trimConcat(
		'iconfont',
		className,
		preffixConcat(name, 'icon-'),
	)
</script>

<i class="{classAttr}" style="{style}"></i>
