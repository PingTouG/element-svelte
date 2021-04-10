<script lang="ts">
	import { Input, Icon } from '../../../packages/main'

	let value = ''
</script>

<div>
	<h3>基本使用</h3>
	<br />
	<div>
		<Input class="input" placeholder="请输入内容" bind:value />
	</div>
	<br />
	<h3>最大/最小长度</h3>
	<br />
	<div>
		<Input class="input" placeholder="请输入内容" maxlength="11" bind:value />
		<Input class="input" placeholder="请输入内容" minlength="2" bind:value />
	</div>
	<br />
	<h3>清除操作</h3>
	<br />
	<div>
		<Input class="input" placeholder="请输入内容" bind:value clearable />
	</div>
	<br />
	<h3>密码框</h3>
	<br />
	<div>
		<Input
			type="password"
			class="input"
			placeholder="请输入内容"
			bind:value
			showPassword
		/>
		<Input
			type="password"
			class="input"
			placeholder="请输入内容"
			bind:value
			showPassword
			clearable
		/>
		<Input
			type="password"
			class="input"
			placeholder="请输入内容"
			bind:value
			suffixIcon="zoom-in"
			showPassword
			clearable
		/>
		<Input
			type="password"
			class="input"
			placeholder="请输入内容"
			bind:value
			showPassword
			clearable
		/>
	</div>
	<br />
	<h3>禁用</h3>
	<br />
	<div>
		<Input class="input" placeholder="请输入内容" bind:value disabled />
	</div>
	<br />
	<h3>大小</h3>
	<br />
	<div>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			size="mini"
			clearable
		/>
		<Input class="input" placeholder="请输入内容" bind:value />
		<Input class="input" placeholder="请输入内容" bind:value size="medium" />
		<Input class="input" placeholder="请输入内容" bind:value size="large" />
	</div>
	<br />
	<h3>前/后图标</h3>
	<br />
	<div>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			prefixIcon="phone"
		/>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			suffixIcon="zoom-in"
		/>
	</div>
	<br />
	<h3>文本域</h3>
	<div>
		<Input
			class="input"
			type="textarea"
			bind:value
			autosize="{{ minRows: 2, maxRows: 6 }}"
		/>
	</div>
	<br />
	<h3>长度限制</h3>
	<br />
	<div>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			maxlength="99"
			showWordLimit
		/>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			maxlength="99"
			showWordLimit
			clearable
		/>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			maxlength="99"
			showWordLimit
			clearable
			suffixIcon="search"
		/>
		<Input
			class="input"
			placeholder="请输入内容"
			bind:value
			type="textarea"
			maxlength="1000"
			showWordLimit
		/>
	</div>
	<br />
	<h3>前/后置</h3>
	<br />
	<div>
		<Input class="input" placeholder="请输入内容" bind:value>
			<span slot="prepend">Http://</span>
		</Input>
		<Input class="input" placeholder="请输入内容" bind:value>
			<span slot="append">.com</span>
		</Input>
		<Input class="input" placeholder="请输入内容" bind:value>
			<Icon slot="append" name="search" />
		</Input>
	</div>
	<br />
</div>

<style global>
	.input {
		width: 200px;
	}
</style>
