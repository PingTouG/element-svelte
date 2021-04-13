<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { trimConcat, preffixConcat } from '../utils/tools'
	import Input from './Input.svelte'
	import Icon from '../Icon/index.svelte'
	import repeatClick from '../utils/repeat-click'

	let className = ''
	export { className as class }
	export let value: number = 0
	export let min: number = -Infinity
	export let max: number = Infinity
	export let step: number = 1
	export let stepStrictly: boolean = false
	export let precision: number
	export let size: string
	export let disabled: boolean = false
	export let controls: boolean = true
	export let controlsPosition: string
	export let name: string
	export let label: string
	export let placeholder: string

	$: controlsAtRight = controlsPosition === 'right'
	$: classAttr = trimConcat(
		'es-input-number',
		className,
		preffixConcat(size),
		preffixConcat(disabled, '', 'disabled'),
		preffixConcat(controlsAtRight, '', 'controls-right'),
	)
	let numPrecision: number
	$: {
		const stepPrecision = _getPrecision(step)
		if (precision !== undefined) {
			if (stepPrecision > precision) {
				console.warn(
					'[Element Warn][InputNumber]precision should not be less than the decimal places of step',
				)
			}
			numPrecision = precision
		} else {
			numPrecision = Math.max(_getPrecision(value), stepPrecision)
		}
	}

	$: {
		let newVal = value === undefined ? value : Number(value)
		if (newVal !== undefined) {
			if (!isNaN(newVal)) {
				if (stepStrictly) {
					const stepPrecision = _getPrecision(step)
					const precisionFactor = Math.pow(10, stepPrecision)
					newVal =
						(Math.round(newVal / step) * precisionFactor * step) /
						precisionFactor
				}

				if (precision !== undefined) {
					newVal = _toPrecision(newVal, precision)
				}
			}
		}
		if (newVal >= max) newVal = max
		if (newVal <= min) newVal = min
		value = newVal
		dispatch('input', newVal)
	}

	let displayValue
	$: {
		let currentValue: number | string = value

		if (typeof currentValue === 'number') {
			if (stepStrictly) {
				const stepPrecision = _getPrecision(step)
				const precisionFactor = Math.pow(10, stepPrecision)
				currentValue =
					(Math.round(currentValue / step) * precisionFactor * step) /
					precisionFactor
			}

			if (precision !== undefined) {
				currentValue = currentValue.toFixed(precision)
			}
		}

		displayValue = currentValue
	}

	$: minDisabled = _decrease(value, step) < min
	$: maxDisabled = _increase(value, step) > max

	const _getPrecision = (value: number) => {
		if (value === undefined) return 0
		const valueString = value.toString()
		const dotPosition = valueString.indexOf('.')
		let precision = 0
		if (dotPosition !== -1) {
			precision = valueString.length - dotPosition - 1
		}
		return precision
	}
	const _toPrecision = (num: number, precision: number = 10) => {
		if (precision === undefined) precision = numPrecision
		return parseFloat(
			(
				Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
			).toString(),
		)
	}
	const _increase = (val: number, step: number) => {
		if (typeof val !== 'number' && val !== undefined) return val

		const precisionFactor = Math.pow(10, numPrecision)
		return _toPrecision(
			(precisionFactor * val + precisionFactor * step) / precisionFactor,
		)
	}
	const _decrease = (val, step) => {
		if (typeof val !== 'number' && val !== undefined) return val

		const precisionFactor = Math.pow(10, numPrecision)

		return _toPrecision(
			(precisionFactor * val - precisionFactor * step) / precisionFactor,
		)
	}

	const increase = () => {
		if (disabled || maxDisabled) return
		const val = value || 0
		const newVal = _increase(val, step)
		setValue(newVal)
	}
	const decrease = () => {
		if (disabled || minDisabled) return
		const val = value || 0
		const newVal = _decrease(val, step)
		setValue(newVal)
	}

	const dispatch = createEventDispatcher()

	const setValue = (newVal) => {
		const oldVal = value

		if (typeof newVal === 'number' && precision !== undefined) {
			newVal = _toPrecision(newVal, precision)
		}

		if (newVal >= max) newVal = max
		if (newVal <= min) newVal = min
		if (oldVal === newVal) return
		dispatch('input', newVal)
		dispatch('change', { newVal, oldVal })
		value = newVal
	}

	const onInputChange = (e) => {
		const newVal = e.detail === '' ? undefined : Number(e.detail)
		if (!isNaN(newVal) || e.detail === '') {
			setValue(newVal)
		}
	}
</script>

<div class="{classAttr}">
	{#if controls}
		<span
			class="es-input-number__decrease"
			class:disabled="{minDisabled}"
			use:repeatClick="{decrease}"
		>
			<Icon name="{controlsAtRight ? 'arrow-down' : 'minus'}" />
		</span>
		<span
			class="es-input-number__increase"
			class:disabled="{maxDisabled}"
			use:repeatClick="{increase}"
		>
			<Icon name="{controlsAtRight ? 'arrow-up' : 'plus'}" />
		</span>
	{/if}
	<Input
		placeholder="{placeholder}"
		name="{name}"
		label="{label}"
		value="{displayValue}"
		disabled="{disabled}"
		size="{size}"
		max="{max}"
		min="{min}"
		on:focus
		on:blur
		on:change="{onInputChange}"
	/>
</div>

<style src="./_inputNumber.scss" global>
</style>
