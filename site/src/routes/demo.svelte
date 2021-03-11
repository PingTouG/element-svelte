<script lang="ts">
	import {
		Container,
		Aside,
		Header,
		Main,
		Footer,
	} from '../../../packages/main'
</script>

<br />
<div>
	<h3>布局容器</h3>
	<Container>
		<Header class="bg-purple-dark">Header</Header>
		<Main class="bg-purple">Main</Main>
	</Container>

	<Container>
		<Header>Header</Header>
		<Main>Main</Main>
		<Footer>Footer</Footer>
	</Container>

	<Container>
		<Aside width="200px">Aside</Aside>
		<Main>Main</Main>
	</Container>

	<Container>
		<Header>Header</Header>
		<Container>
			<Aside width="200px">Aside</Aside>
			<Main>Main</Main>
		</Container>
	</Container>

	<Container>
		<Header>Header</Header>
		<Container>
			<Aside width="200px">Aside</Aside>
			<Container>
				<Main>Main</Main>
				<Footer>Footer</Footer>
			</Container>
		</Container>
	</Container>

	<Container>
		<Aside width="200px">Aside</Aside>
		<Container>
			<Header>Header</Header>
			<Main>Main</Main>
		</Container>
	</Container>

	<Container>
		<Aside width="200px">Aside</Aside>
		<Container>
			<Header>Header</Header>
			<Main>Main</Main>
			<Footer>Footer</Footer>
		</Container>
	</Container>
</div>

<style global>
	.es-header,
	.es-footer {
		background-color: #b3c0d1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.es-aside {
		background-color: #d3dce6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.es-main {
		background-color: #e9eef3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body > .es-container {
		margin-bottom: 40px;
	}

	.es-container:nth-child(5) .es-aside,
	.es-container:nth-child(6) .es-aside {
		line-height: 260px;
	}

	.es-container:nth-child(7) .es-aside {
		line-height: 320px;
	}
</style>
