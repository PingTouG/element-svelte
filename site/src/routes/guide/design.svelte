<script lang="ts">
	import { guideModel } from '../../models'
</script>

<svelte:head>
	<title>ElementSvelte - 设计原则</title>
</svelte:head>
<div class="guide">
	<h2 class="guide__title">设计原则</h2>
	<div class="guide-short__list">
		{#each guideModel as item (item.key)}
			<div class="guide-short__item">
				<img class="guide-short__icon" src="{item.icon}" alt="{item.key}" />
				<div class="guide-short__name">{item.name}</div>
				<div class="guide-short__desc">{item.key}</div>
			</div>
		{/each}
	</div>
	<div class="guide-full__list">
		{#each guideModel as item (item.key)}
			<div class="guide-full__item">
				<h3 class="guide-full__title">{item.name} {item.key}</h3>
				<ul class="guide-desc__list">
					{#each item.description as child (child.name)}
						<li class="guide-desc__item">
							<span class="guide-desc__name">{child.name}：</span>
							<span class="guide-desc__content">{child.content}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../../../../packages/styles/vars';

	.guide {
		padding: 1.5rem 0.875rem;
		width: 50rem;
		margin: 0 auto;

		&__title {
			font-weight: 500;
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		&-short {
			&__list {
				display: flex;
				justify-content: space-between;
				margin-bottom: 4.375rem;
			}

			&__item {
				width: 100%;
				height: 12.75rem;
				text-align: center;
				background-color: rgba($c-primary, 0.03);
				margin-right: 1.5rem;
				border-radius: 0.25rem;
			}

			&__name {
				font-size: 1.125rem;
			}

			&__icon {
				height: 5rem;
				width: 5rem;
				margin: 2.5rem auto 1.5rem;
			}

			&__desc {
				color: $tc-secondary;
				font-size: 0.875rem;
			}
		}

		&-full {
			&__title {
				font-size: 1.25rem;
				font-weight: 500;
				margin: 2rem 0;
			}
		}

		&-desc {
			&__list {
				padding-left: 1.25rem;
				font-size: 0.875rem;
			}

			&__item {
				margin-bottom: 0.5rem;
			}

			&__name {
				color: $tc-regular;
			}

			&__content {
				color: $tc-secondary;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		.guide {
			width: 100%;

			&-short {
				&__list {
					flex-wrap: wrap;
				}

				&__item {
					margin-right: 0;
					margin-bottom: 0.875rem;
				}
			}
		}
	}
</style>
