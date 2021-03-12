<script lang="ts">
	import { Link, Icon } from '../../../packages/main'
</script>

<br />
<div>
	<h3>链接</h3>
	<div>
		<Link href="https://element.eleme.io" target="_blank">默认链接</Link>
		<Link type="primary">主要链接</Link>
		<Link type="success">成功链接</Link>
		<Link type="warning">警告链接</Link>
		<Link type="error">危险链接</Link>
		<Link type="info">信息链接</Link>
	</div>
</div>
<br />
<div>
	<Link disabled>默认链接</Link>
	<Link type="primary" disabled>主要链接</Link>
	<Link type="success" disabled>成功链接</Link>
	<Link type="warning" disabled>警告链接</Link>
	<Link type="error" disabled>危险链接</Link>
	<Link type="info" disabled>信息链接</Link>
</div>
<br />
<div>
	<Link underline="{false}">无下划线</Link>
	<Link>有下划线</Link>
</div>
<br />
<div>
	<Link icon="editor">编辑</Link>
	<Link>分享<Icon name="resonserate" /></Link>
</div>
