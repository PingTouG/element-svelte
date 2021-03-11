<script lang="ts">
	import { componentNavModel, getBrotherPage } from '../../models'
	import type { ComponentNav } from '../../models'
	import { isUndef } from '../../utils/tools'
	import { goto } from '@sapper/app'

	export let segment: string

	let page: string = segment
	let prevPage: ComponentNav
	let nextPage: ComponentNav

	$: [prevPage, nextPage] = getBrotherPage(page)

	function onNavClick({ key, url }: ComponentNav) {
		page = key
		goto(url)
	}
</script>

<svelte:head>
	<title>组件 | ElementSvelte</title>
</svelte:head>

<section>
	<aside>
		<nav>
			{#each componentNavModel as item (item.key)}
				{#if item.url}
					<h3 class="nav__title">
						<a class="nav__link" href="{item.url}" target="{item.target}">
							{item.name}
						</a>
					</h3>
				{:else}
					<h3 class="nav__title">{item.name}</h3>
				{/if}

				{#if item.children && item.children.length > 0}
					<ul class="nav-sub">
						{#each item.children as child (child.key)}
							{#if child.children}
								<h6 class="nav-sub__title">{child.name}</h6>
							{:else}
								<li class="nav-sub__item">
									<a
										class="nav-sub__link"
										href="{child.url}"
										aria-current="{segment === child.key
											? child.key
											: undefined}"
										on:click|preventDefault="{() => onNavClick(child)}"
									>
										{child.name}
									</a>
								</li>
							{/if}
							{#if child.children}
								{#each child.children as subChild (subChild.key)}
									<li class="nav-sub__item">
										<a
											class="nav-sub__link"
											href="{subChild.url}"
											aria-current="{segment === subChild.key
												? subChild.key
												: undefined}"
											on:click|preventDefault="{() => onNavClick(subChild)}"
										>
											{subChild.name}
										</a>
									</li>
								{/each}
							{/if}
						{/each}
					</ul>
				{/if}
			{/each}
		</nav>
	</aside>
	<main>
		<div class="md">
			<slot />
		</div>
		<footer
			class="pages"
			class:no-next="{isUndef(nextPage)}"
			class:no-prev="{isUndef(prevPage)}"
		>
			{#if !isUndef(prevPage)}
				<div class="prev">
					<a
						class="prev__link"
						href="{prevPage.url}"
						on:click|preventDefault="{() => onNavClick(prevPage)}"
					>
						{prevPage.name}
					</a>
				</div>
			{/if}
			{#if !isUndef(nextPage)}
				<div class="next">
					<a
						class="next__link"
						href="{nextPage.url}"
						on:click|preventDefault="{() => onNavClick(nextPage)}"
					>
						{nextPage.name}
					</a>
				</div>
			{/if}
		</footer>
	</main>
</section>

<style lang="scss">
	@import '../../../../packages/styles/vars';

	section {
		display: flex;
		height: 100%;
		overflow: auto;
	}

	aside,
	main {
		height: calc(100vh - 5.1rem);
		overflow-y: hidden;
		padding: 3rem 2rem 0;

		&:hover {
			overflow-y: auto;
		}
	}

	aside {
		flex: 0 0 auto;
	}

	main {
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
	}

	.nav {
		&__link {
			display: block;
			color: $tc-primary;
		}

		&__title {
			margin: 0;
			color: $tc-primary;
			margin-bottom: 0.875rem;
		}

		&-sub {
			font-size: 0.875rem;

			&__title {
				color: $tc-placeholder;
				margin: 0;
				margin-bottom: 0.875rem;
			}

			&__item {
				margin-bottom: 0.75rem;
			}

			&__link {
				color: $tc-regular;
			}
		}
	}

	[aria-current] {
		position: relative;
		color: $c-primary;
		font-weight: 500;
	}

	.pages {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.no-prev {
		justify-content: flex-end;
	}
	.no-next {
		justify-content: flex-start;
	}

	.prev,
	.next {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		&__link {
			color: $tc-secondary;

			&:hover {
				color: $c-primary;
				text-decoration: underline;
			}
		}
	}

	.next {
		margin-left: 0.75rem;
		text-align: right;
	}

	@media only screen and (max-width: 600px) {
		section {
			flex-direction: column;
		}

		aside,
		main {
			height: 100%;
			padding: 1rem 0;
		}
	}
</style>
