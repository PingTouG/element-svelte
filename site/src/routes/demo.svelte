<script lang="ts">
	import { Radio, RadioButton } from '../../../packages/main'

	let radio = '1'

	function onClick() {
		console.log(radio)
	}
</script>

<div>
	<h3>单选按钮样式</h3>
	<br />
	<div>
		<RadioButton
			bind:value="{radio}"
			label="1"
			size="mini"
			disabled
			on:click="{onClick}"
		>
			选项1
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="2"
			size="mini"
			disabled
			on:click="{onClick}"
		>
			选项2
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="3"
			size="mini"
			disabled
			on:click="{onClick}"
		>
			选项3
		</RadioButton>
	</div>
	<br />
	<div>
		<RadioButton bind:value="{radio}" label="1" on:click="{onClick}">
			选项1
		</RadioButton>
		<RadioButton bind:value="{radio}" label="2" on:click="{onClick}">
			选项2
		</RadioButton>
		<RadioButton bind:value="{radio}" label="3" on:click="{onClick}">
			选项3
		</RadioButton>
	</div>
	<br />
	<div>
		<RadioButton
			bind:value="{radio}"
			label="1"
			size="medium"
			on:click="{onClick}"
		>
			选项1
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="2"
			size="medium"
			on:click="{onClick}"
		>
			选项2
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="3"
			size="medium"
			on:click="{onClick}"
		>
			选项3
		</RadioButton>
	</div>
	<br />
	<div>
		<RadioButton
			bind:value="{radio}"
			label="1"
			size="large"
			on:click="{onClick}"
		>
			选项1
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="2"
			size="large"
			on:click="{onClick}"
		>
			选项2
		</RadioButton>
		<RadioButton
			bind:value="{radio}"
			label="3"
			size="large"
			on:click="{onClick}"
		>
			选项3
		</RadioButton>
	</div>
</div>
<br />
<div>
	<h3>单选</h3>
	<br />
	<div>
		<Radio bind:value="{radio}" label="1" on:click="{onClick}">选项1</Radio>
		<Radio bind:value="{radio}" label="2" on:click="{onClick}">选项2</Radio>
	</div>
	<br />
	<div>
		<Radio bind:value="{radio}" label="1" disabled>选项1</Radio>
		<Radio bind:value="{radio}" label="2" disabled>选项2</Radio>
	</div>
	<br />
	<div>
		<Radio bind:value="{radio}" label="1" border on:click="{onClick}">
			选项1
		</Radio>
		<Radio bind:value="{radio}" label="2" border on:click="{onClick}">
			选项2
		</Radio>
	</div>
	<br />
	<div>
		<Radio bind:value="{radio}" label="1" border disabled on:click="{onClick}">
			选项1
		</Radio>
		<Radio bind:value="{radio}" label="2" border disabled on:click="{onClick}">
			选项2
		</Radio>
	</div>
	<br />
	<div>
		<Radio
			bind:value="{radio}"
			label="1"
			border
			size="mini"
			on:click="{onClick}"
		>
			选项1
		</Radio>
		<Radio bind:value="{radio}" label="2" border on:click="{onClick}">
			选项2
		</Radio>
		<Radio
			bind:value="{radio}"
			label="3"
			border
			size="medium"
			on:click="{onClick}"
		>
			选项3
		</Radio>
		<Radio
			bind:value="{radio}"
			label="4"
			border
			size="large"
			on:click="{onClick}"
		>
			选项4
		</Radio>
	</div>
</div>
