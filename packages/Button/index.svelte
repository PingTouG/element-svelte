<script lang="ts">
	import Icon from '../Icon/index.svelte'
	export let block: boolean
	export let circle: boolean
	export let disabled: boolean
	export let icon: string
	export let loading: boolean
	export let nativeType = 'button'
	export let plain: boolean
	export let round: boolean
	export let size: string
	export let type: string
</script>

<button
	class="es-button"
	es-block="{block}"
	es-circle="{circle}"
	es-loading="{loading}"
	es-plain="{plain}"
	es-round="{round}"
	es-size="{size}"
	es-type="{type}"
	disabled="{disabled}"
	type="{nativeType}"
	on:click
>
	{#if loading}
		<span loading-icon></span>
	{/if}
	{#if icon}
		<Icon name="{icon}" />
	{/if}
	<slot />
</button>

<style>
	.es-button {
		display: inline-block;
		padding: var(--es-btn-s-base);
		margin: 0;
		line-height: 1;
		color: var(--es-tc-regular);
		background-color: var(--es-c-white);
		border: 1px solid var(--es-bc-base);
		border-radius: 4px;
		font-size: 14px;
		text-align: center;
		white-space: nowrap;
		outline: none;
		cursor: pointer;
		user-select: none;
	}
	.es-button:hover {
		color: var(--es-c-primary);
		background-color: var(--es-c-blue-1);
		border-color: var(--es-c-blue-2);
	}
	.es-button:active {
		border-color: var(--es-c-blue-3);
	}

	.es-button[es-block='true'] {
		width: 100%;
	}

	.es-button[es-circle='true'] {
		border-radius: 50%;
		padding: var(--es-btn-cs-base);
	}
	.es-button[es-circle='true'][es-size='mini'] {
		padding: var(--es-btn-cs-mini);
	}
	.es-button[es-circle='true'][es-size='medium'] {
		padding: var(--es-btn-cs-medium);
	}
	.es-button[es-circle='true'][es-size='large'] {
		padding: var(--es-btn-cs-large);
	}

	.es-button:disabled,
	.es-button[es-loading='true'] {
		cursor: not-allowed;
		color: var(--es-c-gray-5);
		background-color: var(--es-c-white);
		border-color: var(--es-bc-light);
	}
	.es-button[es-type]:disabled {
		color: var(--es-c-white);
	}
	.es-button[es-type='primary']:disabled,
	.es-button[es-type='primary']:disabled:hover {
		background-color: var(--es-c-blue-3);
		border-color: transparent;
	}
	.es-button[es-type='success']:disabled,
	.es-button[es-type='success']:disabled:hover {
		background-color: var(--es-c-green-3);
		border-color: transparent;
	}
	.es-button[es-type='error']:disabled,
	.es-button[es-type='error']:disabled:hover {
		background-color: var(--es-c-red-3);
		border-color: transparent;
	}
	.es-button[es-type='warning']:disabled,
	.es-button[es-type='warning']:disabled:hover {
		background-color: var(--es-c-orange-3);
		border-color: transparent;
	}
	.es-button[es-type='info']:disabled,
	.es-button[es-type='info']:disabled:hover {
		background-color: var(--es-c-gray-3);
		border-color: transparent;
	}
	.es-button[es-type='text']:disabled,
	.es-button[es-type='text']:disabled:hover {
		color: var(--es-c-gray-3);
	}

	.es-button[es-loading='true'] span[loading-icon] {
		animation: rotating 2s linear infinite;
	}
	.es-button[es-loading='true'] span[loading-icon]::before {
		content: '';
		display: inline-block;
		width: 1em;
		height: 1em;
		margin-right: 0.5em;
		color: var(--es-c-white);
		border: 1px solid var(--es-bc-base);
		border-radius: 50%;
		vertical-align: -10%;
		clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%);
		animation: rotating 1s linear infinite;
	}

	.es-button[es-plain='true']:hover {
		color: var(--es-c-primary);
		background-color: var(--es-c-white);
		border-color: var(--es-c-primary);
	}
	.es-button[es-plain='true'][es-type]:hover {
		color: var(--es-c-white);
		border-color: transparent;
	}
	.es-button[es-plain='true'][es-type='primary'] {
		color: var(--es-c-primary);
		background-color: var(--es-c-blue-1);
		border-color: var(--es-c-blue-2);
	}
	.es-button[es-plain='true'][es-type='primary']:hover {
		background-color: var(--es-c-primary);
	}
	.es-button[es-plain='true'][es-type='primary']:active {
		background-color: var(--es-c-blue-7);
	}
	.es-button[es-plain='true'][es-type='success'] {
		color: var(--es-c-success);
		background-color: var(--es-c-green-1);
		border-color: var(--es-c-green-2);
	}
	.es-button[es-plain='true'][es-type='success']:hover {
		background-color: var(--es-c-success);
	}
	.es-button[es-plain='true'][es-type='success']:active {
		background-color: var(--es-c-green-7);
	}
	.es-button[es-plain='true'][es-type='error'] {
		color: var(--es-c-error);
		background-color: var(--es-c-red-1);
		border-color: var(--es-c-red-2);
	}
	.es-button[es-plain='true'][es-type='error']:hover {
		background-color: var(--es-c-error);
	}
	.es-button[es-plain='true'][es-type='error']:active {
		background-color: var(--es-c-red-7);
	}
	.es-button[es-plain='true'][es-type='warning'] {
		color: var(--es-c-warning);
		background-color: var(--es-c-orange-1);
		border-color: var(--es-c-orange-2);
	}
	.es-button[es-plain='true'][es-type='warning']:hover {
		background-color: var(--es-c-warning);
	}
	.es-button[es-plain='true'][es-type='warning']:active {
		background-color: var(--es-c-orange-7);
	}
	.es-button[es-plain='true'][es-type='info'] {
		color: var(--es-c-info);
		background-color: var(--es-c-gray-1);
		border-color: var(--es-c-gray-2);
	}
	.es-button[es-plain='true'][es-type='info']:hover {
		background-color: var(--es-c-info);
	}
	.es-button[es-plain='true'][es-type='info']:active {
		background-color: var(--es-c-gray-7);
	}

	.es-button[es-size='mini'] {
		padding: var(--es-btn-s-mini);
	}
	.es-button[es-size='medium'] {
		padding: var(--es-btn-s-medium);
	}
	.es-button[es-size='large'] {
		padding: var(--es-btn-s-large);
	}

	.es-button[es-type] {
		color: var(--es-c-white);
	}

	.es-button[es-type='primary'] {
		background-color: var(--es-c-primary);
		border-color: var(--es-c-primary);
	}
	.es-button[es-type='primary']:hover {
		background-color: var(--es-c-blue-5);
		border-color: transparent;
	}
	.es-button[es-type='primary']:active {
		background-color: var(--es-c-primary);
	}

	.es-button[es-type='success'] {
		background-color: var(--es-c-success);
		border-color: var(--es-c-success);
	}
	.es-button[es-type='success']:hover {
		background-color: var(--es-c-green-5);
		border-color: transparent;
	}
	.es-button[es-type='success']:active {
		background-color: var(--es-c-success);
	}

	.es-button[es-type='error'] {
		background-color: var(--es-c-error);
		border-color: var(--es-c-error);
	}
	.es-button[es-type='error']:hover {
		background-color: var(--es-c-red-5);
		border-color: transparent;
	}
	.es-button[es-type='error']:active {
		background-color: var(--es-c-error);
	}

	.es-button[es-type='warning'] {
		background-color: var(--es-c-warning);
		border-color: var(--es-c-warning);
	}
	.es-button[es-type='warning']:hover {
		background-color: var(--es-c-orange-5);
		border-color: transparent;
	}
	.es-button[es-type='warning']:active {
		background-color: var(--es-c-warning);
	}

	.es-button[es-type='info'] {
		background-color: var(--es-c-info);
		border-color: var(--es-c-info);
	}
	.es-button[es-type='info']:hover {
		background-color: var(--es-c-gray-5);
		border-color: transparent;
	}
	.es-button[es-type='info']:active {
		background-color: var(--es-c-info);
	}

	.es-button[es-type='text'],
	.es-button[es-type='text']:hover {
		color: var(--es-c-primary);
		background-color: transparent;
		border-color: transparent;
	}

	@keyframes rotating {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(1turn);
		}
	}
</style>
