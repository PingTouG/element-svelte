<script lang="ts">
	import { createEventDispatcher, onMount, tick } from 'svelte'
	import { trimConcat, preffixConcat, isKorean, throttle } from '../utils/tools'
	import Icon from '../Icon/index.svelte'
	import calcTextareaHeight from './calcTextareaHeight'
	import type { AutoSize } from './type'

	let className: string = ''
	export { className as class }
	export let type: string = 'text'
	export let value: string | number = ''
	export let maxlength: number
	export let minlength: number
	export let showWordLimit: boolean = false
	export let placeholder: string
	export let clearable: boolean = false
	export let showPassword: boolean = false
	export let disabled: boolean = false
	export let size: string
	export let prefixIcon: string
	export let suffixIcon: string
	export let rows: number = 2
	export let autosize: boolean | AutoSize = false
	export let autocomplete: string = 'off'
	export let name: string
	export let readonly: boolean = false
	export let max: any
	export let min: any
	export let step: any
	export let resize: string
	export let autofocus: boolean = false
	export let form: string
	export let label: string
	export let tabindex: number

	let el: HTMLElement
	let passwordVisible: boolean = false

	$: classAttr = trimConcat(
		`es-${type === 'textarea' ? 'textarea' : 'input'}`,
		className,
		preffixConcat(size),
		preffixConcat(clearVisible, 'es-input--', 'clear'),
		preffixConcat(showPassword, 'es-input--', 'show-pwd'),
		preffixConcat(prefixIcon, 'es-input--', 'prefix'),
		preffixConcat(suffixIcon, 'es-input--', 'suffix'),
		preffixConcat(suffixIcon, 'es-input--', 'suffix'),
		preffixConcat(isInputGroup, 'es-input-', 'group'),
		preffixConcat($$slots.prepend, 'es-input--', 'prepend'),
		preffixConcat($$slots.append, 'es-input--', 'append'),
	)

	$: isTextarea = type === 'textarea'
	$: inputType = showPassword ? (passwordVisible ? 'text' : 'password') : type
	$: isInputGroup = $$slots.prepend || $$slots.append
	$: unNoAllowed = !disabled && !readonly
	$: clearVisible = clearable && unNoAllowed && !!value && (focused || hovering)
	$: suffixVisible =
		$$slots.suffix ||
		suffixIcon ||
		clearVisible ||
		showPassword ||
		wordLimitVisible
	$: pwdVisible = showPassword && unNoAllowed && (!!value || focused)
	$: wordLimitVisible =
		showWordLimit &&
		maxlength &&
		['text', 'textarea'].includes(type) &&
		unNoAllowed &&
		!showPassword

	let limitEl: HTMLElement = null
	let inputInnerPadding: string = null
	$: {
		if (limitEl) {
			// 需要依赖value变化，所以需要加入value
			value

			let right = 8

			if (clearVisible) {
				right += 16
			}

			if (suffixIcon) {
				right += 16
			}

			if (clearVisible || suffixIcon) {
				right += 4
			}

			right += limitEl.clientWidth

			inputInnerPadding = `padding-right: ${right}px`
		}
	}

	$: valueLen = String(value).length

	let textareaStyle: string = null
	const resetTextareaCalcStyle = () => {
		if (type !== 'textarea' || !el) return
		if (!(<boolean>autosize)) {
			textareaStyle = `min-height: ${calcTextareaHeight(el).minHeight};`
			return
		}

		const minRows = (<AutoSize>autosize).minRows
		const maxRows = (<AutoSize>autosize).maxRows
		const style = calcTextareaHeight(el, minRows, maxRows)
		Object.assign(style, { resize })
		textareaStyle = Object.keys(style)
			.map((name) => `${name}:${style[name]}`)
			.join(';')
	}

	let autoScrollTop: Function

	onMount(() => {
		resetTextareaCalcStyle()
		autoScrollTop = throttle(() => (el.scrollTop = el.scrollHeight))
	})

	const dispatch = createEventDispatcher()

	let hovering: boolean = false
	let focused: boolean = false
	const onFocus = () => {
		focused = true
		dispatch('focus')
	}
	const onBlur = () => {
		focused = false
		dispatch('blur')
	}
	let isComposing: boolean = false
	const onCompositionStart = () => (isComposing = true)
	const onCompositionUpdate = (e) => {
		const text: string = e.target.value
		const lastCharacter: string = text[text.length - 1] || ''
		isComposing = !isKorean(lastCharacter)
	}
	const onCompositionEnd = (e) => {
		if (isComposing) {
			isComposing = false
			value = e.target.value
			dispatch('input', e.target.value)
		}
	}
	const onInput = (e) => {
		if (isComposing) return
		if (e.target.value === value) return

		dispatch('input', e.target.value)
		value = e.target.value
		resetTextareaCalcStyle()
		autoScrollTop()
	}
	const onChange = (e) => {
		value = e.target.value
		dispatch('change', e.target.value)
	}

	const onClear = () => {
		value = ''
		dispatch('input', '')
		dispatch('change', '')
		dispatch('clear', '')
	}

	const onShowPwdTrigger = () => (passwordVisible = !passwordVisible)
</script>

<div
	class="{classAttr}"
	class:disabled
	on:mouseover="{() => (hovering = true)}"
	on:mouseleave="{() => (hovering = false)}"
>
	{#if isTextarea}
		<textarea
			bind:this="{el}"
			class="es-textarea__inner"
			class:limitvisible="{wordLimitVisible}"
			style="{textareaStyle}"
			autosize="{typeof autosize === 'boolean' ? autosize : false}"
			name="{name}"
			value="{value}"
			rows="{rows}"
			disabled="{disabled}"
			readonly="{readonly}"
			maxlength="{maxlength}"
			minlength="{minlength}"
			max="{max}"
			min="{min}"
			autofocus="{autofocus}"
			:aria-label="{label}"
			tabindex="{tabindex}"
			placeholder="{placeholder}"
			step="{step}"
			on:compositionstart="{onCompositionStart}"
			on:compositionupdate="{onCompositionUpdate}"
			on:compositionend="{onCompositionEnd}"
			on:input="{onInput}"
			on:change="{onChange}"
			on:focus="{onFocus}"
			on:blur="{onBlur}"></textarea>
		{#if wordLimitVisible}
			<span class="es-textarea__count" bind:this="{limitEl}">
				{valueLen}/{maxlength}
			</span>
		{/if}
	{:else}
		{#if $$slots.prepend}
			<div class="es-input-group__prepend">
				<slot name="prepend" />
			</div>
		{/if}
		{#if $$slots.prefix || prefixIcon}
			<span class="es-input__prefix">
				<slot name="prefix" />
				<Icon class="es-input__icon" name="{prefixIcon}" />
			</span>
		{/if}
		<input
			class="es-input__inner"
			style="{inputInnerPadding}"
			bind:this="{el}"
			name="{name}"
			value="{value}"
			type="{inputType}"
			disabled="{disabled}"
			readonly="{readonly}"
			placeholder="{placeholder}"
			maxlength="{maxlength}"
			minlength="{minlength}"
			max="{max}"
			min="{min}"
			autofocus="{autofocus}"
			:aria-label="{label}"
			tabindex="{tabindex}"
			step="{step}"
			on:compositionstart="{onCompositionStart}"
			on:compositionupdate="{onCompositionUpdate}"
			on:compositionend="{onCompositionEnd}"
			on:input="{onInput}"
			on:change="{onChange}"
			on:focus="{onFocus}"
			on:blur="{onBlur}"
		/>
		{#if suffixVisible}
			<span class="es-input__suffix">
				<span class="es-input__suffix-inner" on:mousedown|preventDefault>
					{#if !clearVisible || pwdVisible || suffixIcon || wordLimitVisible}
						<slot name="suffix" />
						<Icon class="es-input__icon" name="{suffixIcon}" />
					{/if}
					{#if pwdVisible}
						<Icon
							name="view"
							class="es-input__icon"
							on:click="{onShowPwdTrigger}"
						/>
					{/if}
					{#if clearVisible}
						<Icon
							class="es-input__icon"
							name="circle-close"
							on:click="{onClear}"
						/>
					{/if}
					{#if wordLimitVisible}
						<span class="es-input__count" bind:this="{limitEl}">
							<span class="es-input__count-inner">
								{valueLen}/{maxlength}
							</span>
						</span>
					{/if}
				</span>
			</span>
		{/if}
		{#if $$slots.append}
			<div class="es-input-group__append">
				<slot name="append" />
			</div>
		{/if}
	{/if}
</div>

<style src="./_input.scss" global></style>
