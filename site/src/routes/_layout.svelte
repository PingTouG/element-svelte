<script lang="ts">
	import {
		headerNavModel,
		githubBaseUrl,
		linksModel,
		communityModel,
	} from '../models'
	import { Icon } from '../../../packages/main'
	export let segment: string
</script>

<section>
	<header>
		<a class="logo" href="./">ElementSvelte</a>
		<nav class="nav">
			{#each headerNavModel as nav (nav.key)}
				<a
					class="nav__item"
					aria-current="{segment === nav.key ? nav.key : undefined}"
					href="{nav.url}">{nav.name}</a
				>
			{/each}
		</nav>
	</header>
	<main>
		<slot />
	</main>
</section>

{#if segment !== 'component'}
	<footer>
		<div class="links">
			<div class="links__item">
				<h3 class="link__title">链接</h3>
				<ul class="link__list">
					{#each linksModel as item (item.url)}
						<li class="link__item">
							<a href="{item.url}" target="_blank">{item.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="links__item">
				<h3 class="link__title">社区</h3>
				<ul class="link__list">
					{#each communityModel as item (item.url)}
						<li class="link__item">
							<a href="{item.url}" target="_blank">{item.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="icon">
			<h3 class="icon__title">ElementSvelte Author</h3>
			<div class="icon__list">
				<span class="icon__item">
					<Icon name="wechat" size="2.25rem" />
				</span>
				<a href="{githubBaseUrl}" target="_blank" class="icon__item">
					<Icon name="github" size="2.25rem" />
				</a>
			</div>
		</div>
	</footer>
{/if}

<style lang="scss">
	@import '../../../packages/styles/vars';

	section {
		width: 71.25rem;
		margin: 0 auto;
	}

	header {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 3rem;
		border-bottom: 1px solid $border-color-extra-light;
	}

	.logo {
		color: $color-primary;
		font-weight: 700;
		font-size: 2rem;
	}

	.nav {
		display: flex;
		align-items: center;
		height: 100%;

		&__item {
			display: flex;
			align-items: center;
			height: 100%;
			margin-right: 1.5rem;
			color: rgba($color-primary, 0.6);
		}
	}

	[aria-current] {
		position: relative;
		color: $color-primary;
		font-weight: 500;

		&::after {
			position: absolute;
			content: '';
			width: 100%;
			height: 0.125rem;
			background-color: $color-primary;
			display: block;
			bottom: 0;
		}
	}

	main {
		min-height: calc(100vh - 5rem - 20vh);
	}

	footer {
		width: 100vw;
		min-height: 20vh;
		padding: 1rem 4.5rem 4.5rem;
		background-color: $background-color-base;
		display: flex;
		justify-content: space-between;
	}

	.links {
		display: flex;

		&__item {
			margin-right: 3rem;
		}
	}

	.link {
		&__title {
			margin-bottom: 1rem;
		}

		&__item {
			margin-bottom: 0.75rem;

			a {
				color: $color-text-regular;
				font-size: 0.875rem;

				&:hover {
					text-decoration: underline;
					color: $color-text-primary;
				}
			}
		}
	}

	.icon {
		&__title {
			color: $color-text-secondary;
			margin-bottom: 1rem;
		}

		&__list {
			display: flex;
		}

		&__item {
			color: $color-text-placeholder;
			cursor: pointer;
			margin-right: 0.875rem;
		}
	}

	@media only screen and (max-width: 600px) {
		$padding: 0.875rem;

		section {
			width: 100%;
		}

		header,
		main {
			padding: 0 $padding;
		}

		.logo {
			font-size: 1.5rem;
		}

		.nav {
			font-size: 0.875rem;

			&__item {
				margin-right: 0.5rem;
			}
		}

		footer {
			flex-direction: column;
			padding: $padding;
		}
	}
</style>
