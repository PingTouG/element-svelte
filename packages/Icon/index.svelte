<script lang="ts">
	export let color: string
	export let name: string
	export let size = '16px'
	let className = ''
	export { className as class }
</script>

<i
	class="iconfont {className} {name ? `icon-${name}` : ''}"
	style="{`font-size: ${size};${color ? `color: ${color};` : ''}`}"></i>
