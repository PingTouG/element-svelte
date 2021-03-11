<script lang="ts">
	import { Button, ButtonGroup, Row, Col } from '../../../packages/main'
</script>

<div>
	<h3>Flex布局</h3>
	<br />
	<Row type="flex" justify="space-between">
		<Col>aasd</Col>
		<Col>aasd</Col>
		<Col>aasd</Col>
		<Col>aasd</Col>
	</Row>
</div>
<br />
<div>
	<h3>布局</h3>
	<Row>
		<Col span="{24}"><div class="grid-content bg-purple-dark"></div></Col>
	</Row>
	<br />
	<Row>
		<Col span="12"><div class="grid-content bg-purple"></div></Col>
		<Col span="12"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row>
		<Col span="8"><div class="grid-content bg-purple"></div></Col>
		<Col span="8"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="8"><div class="grid-content bg-purple"></div></Col>
	</Row>
	<br />
	<Row>
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row>
		<Col span="4"><div class="grid-content bg-purple"></div></Col>
		<Col span="4"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="4"><div class="grid-content bg-purple"></div></Col>
		<Col span="4"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="4"><div class="grid-content bg-purple"></div></Col>
		<Col span="4"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="8"><div class="grid-content bg-purple"></div></Col>
		<Col span="16"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="8"><div class="grid-content bg-purple"></div></Col>
		<Col span="8"><div class="grid-content bg-purple-light"></div></Col>
		<Col span="4"><div class="grid-content bg-purple"></div></Col>
		<Col span="4"><div class="grid-content bg-purple-light"></div></Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6" offset="6">
			<div class="grid-content bg-purple-light"></div>
		</Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="6" offset="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6" offset="6">
			<div class="grid-content bg-purple-light"></div>
		</Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="12" offset="6"><div class="grid-content bg-purple"></div></Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="6" push="6">
			<div class="grid-content bg-purple-light"></div>
		</Col>
	</Row>
	<br />
	<Row gutter="20">
		<Col span="6"><div class="grid-content bg-purple"></div></Col>
		<Col span="12" pull="4">
			<div class="grid-content bg-purple-light"></div>
		</Col>
	</Row>
	<br />
</div>
<br />
<div>
	<h3>块级按钮</h3>
	<br />
	<Button block>默认按钮</Button>
</div>
<br />
<div>
	<h3>圆形按钮</h3>
	<br />
	<Button icon="search" size="mini" circle />
	<Button icon="search" circle />
	<Button icon="search" size="medium" circle />
	<Button icon="search" size="large" circle />
</div>
<br />
<div>
	<h3>禁用按钮</h3>
	<br />
	<Button disabled>禁用按钮</Button>
	<Button disabled type="primary">主要按钮</Button>
	<Button disabled type="success">成功按钮</Button>
	<Button disabled type="error">错误按钮</Button>
	<Button disabled type="warning">警告按钮</Button>
	<Button disabled type="info">信息按钮</Button>
</div>
<div>
	<h3>loading按钮</h3>
	<br />
	<Button loading>加载按钮</Button>
</div>
<br />
<div>
	<h3>朴素按钮</h3>
	<br />
	<Button plain>朴素按钮</Button>
	<Button plain type="primary">主要按钮</Button>
	<Button plain type="success">成功按钮</Button>
	<Button plain type="error">错误按钮</Button>
	<Button plain type="warning">警告按钮</Button>
	<Button plain type="info">信息按钮</Button>
</div>
<br />
<div>
	<h3>按钮大小</h3>
	<br />
	<Button size="mini" type="primary">迷你按钮</Button>
	<Button type="primary">默认按钮</Button>
	<Button size="medium" type="primary">中等按钮</Button>
	<Button size="large" type="primary">大型按钮</Button>
</div>
<br />
<div>
	<h3>按钮类型</h3>
	<br />
	<Button>默认按钮</Button>
	<Button type="primary">主要按钮</Button>
	<Button type="success">成功按钮</Button>
	<Button type="error">错误按钮</Button>
	<Button type="warning">警告按钮</Button>
	<Button type="info">信息按钮</Button>
</div>
<br />
<div>
	<h3>文字按钮</h3>
	<br />
	<Button type="text">文字按钮</Button>
	<Button type="text" disabled>文字按钮</Button>
</div>
<br />
<div>
	<h3>圆角类型</h3>
	<br />
	<Button round>默认按钮</Button>
	<Button round type="primary">主要按钮</Button>
	<Button round type="success">成功按钮</Button>
	<Button round type="error">错误按钮</Button>
	<Button round type="warning">警告按钮</Button>
	<Button round type="info">信息按钮</Button>
</div>
<br />
<div>
	<h3>按钮组</h3>
	<br />
	<ButtonGroup>
		<Button type="primary">主要按钮</Button>
		<Button type="primary">主要按钮</Button>
	</ButtonGroup>
</div>
<br />

<style>
	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
</style>
