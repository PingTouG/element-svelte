<script lang="ts">
	import { RadioButton, Button, RadioGroup } from '../../../packages/main'

	let radio = '1'
	let size = 'mini'

	function onChange(e) {
		console.log('demo:', e.detail)
	}
</script>

<div>
	{radio}
	<h3>单选</h3>
	<br />
	<div>
		<RadioGroup bind:value="{radio}" size="{size}" on:change="{onChange}">
			<RadioButton value="1">选项1</RadioButton>
			<RadioButton value="2">选项2</RadioButton>
		</RadioGroup>
	</div>
	<br />
</div>
