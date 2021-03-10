<script lang="ts">
	import blueTheme from 'images/theme-blue.png'
	import redTheme from 'images/theme-red.png'
	import { headerNavModel } from '../models'

	// 滚动切换主题
	let scrollY: number = 0
	let style: string
	$: if (scrollY < 570) {
		style = `height: ${scrollY}px`
	}
</script>

<svelte:window bind:scrollY />
<svelte:head>
	<title>ElementSvelte - 基于Svelte的ElementUI</title>
</svelte:head>

<div class="home">
	<h1 class="title">基于Svelte的ElementUI</h1>
	<p class="desc">
		ElementUI是一套为开发者、设计师和产品经理准备的基于 Vue 的桌面端组件库
	</p>
	<p class="desc">ElementSvelte是基于Svelte实现的ElementUI</p>
	<div class="theme">
		<img src="{blueTheme}" alt="蓝色主题图片" />
		<div class="theme-red" style="{style}">
			<img src="{redTheme}" alt="红色主题图片" />
		</div>
	</div>
	<div class="quick">
		{#each headerNavModel as nav (nav.key)}
			<div class="quick__item">
				<img class="quick__icon" src="{nav.icon}" alt="{nav.key}" />
				<h3 class="quick__name">{nav.name}</h3>
				<p class="quick__description">{nav.description}</p>
				<a class="quick__url" href="{nav.url}">查看详情</a>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../../packages/styles/vars';

	.home {
		text-align: center;
		margin: 1.5rem 0 2.5rem;
	}

	.title {
		margin-bottom: 1rem;
	}

	.desc {
		color: $color-info;
	}

	.theme {
		width: 70%;
		margin: 1.875rem auto;
		position: relative;

		&-red {
			transition: height 0.1s;
			background: $color-white;
			position: absolute;
			left: 0;
			top: 0;
			overflow: hidden;
		}

		img {
			width: 100%;
		}
	}

	.quick {
		display: flex;
		align-items: center;
		justify-content: space-between;

		&__item {
			min-height: 26rem;
			width: 100%;
			background: $color-white;
			border: 1px solid $border-color-lighter;
			border-radius: 0.375rem;
			box-sizing: border-box;
			text-align: center;
			position: relative;
			transition: all 0.3s ease-in-out;
			bottom: 0;
			margin-right: 1.5rem;

			&:hover {
				transform: translateY(-0.5rem);
				box-shadow: $shaow-light;
			}

			&:last-child {
				margin-right: 0;
			}
		}

		&__icon {
			width: 10rem;
			height: 7.5rem;
			margin: 4.125rem auto 3.75rem;
		}

		&__name {
			font-weight: 400;
			margin: 0;
		}

		&__description {
			color: $color-text-secondary;
			padding: 0 1.5rem;
			font-size: 0.875rem;
		}

		&__url {
			height: 3rem;
			line-height: 3rem;
			font-size: 0.875rem;
			color: $color-primary;
			text-align: center;
			border-top: 1px solid $border-color-lighter;
			width: 100%;
			position: absolute;
			bottom: 0;
			background-color: $color-white;
			border-radius: 0 0 0.375rem 0.375rem;
			display: block;
		}
	}

	@media only screen and (max-width: 600px) {
		.theme {
			width: 100%;
		}

		.quick {
			flex-wrap: wrap;
			justify-content: center;
			padding: 0 0.875rem;

			&__item {
				margin-right: 0;
				margin-bottom: 0.875rem;
			}
		}
	}
</style>
