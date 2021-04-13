<script lang="ts">
	import { InputNumber } from '../../../packages/main'
	let value = 0
</script>

<div>
	<h3>基本使用</h3>
	<br />
	<div>
		<InputNumber class="input" placeholder="请输入内容" bind:value />
	</div>
	<br />
	<h3>禁用</h3>
	<br />
	<div>
		<InputNumber class="input" placeholder="请输入内容" bind:value disabled />
	</div>
	<br />
	<h3>不使用控制按钮</h3>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			controls="{false}"
		/>
	</div>
	<br />
	<h3>右侧按钮</h3>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			controlsPosition="right"
		/>
	</div>
	<br />
	<h3>最大/小值</h3>
	<br />
	<div>
		<InputNumber class="input" placeholder="请输入内容" bind:value min="{4}" />
		<InputNumber class="input" placeholder="请输入内容" bind:value max="{6}" />
	</div>
	<br />
	<h3>步数</h3>
	<br />
	<div>
		<InputNumber class="input" placeholder="请输入内容" bind:value step="{2}" />
	</div>
	<br />
	<h3>严格步数</h3>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			step="{2}"
			stepStrictly
		/>
	</div>
	<br />
	<h3>精度</h3>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			precision="{2}"
			step="{0.1}"
		/>
	</div>
	<br />
	<h3>大小</h3>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="mini"
			controlsPosition="right"
		/>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			controlsPosition="right"
		/>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="medium"
			controlsPosition="right"
		/>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="large"
			controlsPosition="right"
		/>
	</div>
	<br />
	<div>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="mini"
		/>
		<InputNumber class="input" placeholder="请输入内容" bind:value />
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="medium"
		/>
		<InputNumber
			class="input"
			placeholder="请输入内容"
			bind:value
			size="large"
		/>
	</div>
	<br />
</div>

<style global>
	.input {
		width: 200px;
	}
</style>
