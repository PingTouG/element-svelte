<script lang="ts">
	export let color: string
	export let name: string
	export let size = '16px'
</script>

<i
	class="iconfont {name ? `icon-${name}` : ''}"
	style="{`font-size: ${size};${color ? `color: ${color};` : ''}`}"></i>
