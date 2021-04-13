export const on = function (element, event, handler, useCapture = false) {
	if (element && event && handler) {
		element.addEventListener(event, handler, useCapture)
	}
}

export const off = function (element, event, handler, useCapture = false) {
	if (element && event && handler) {
		element.removeEventListener(event, handler, useCapture)
	}
}

export const once = function (el, event, fn) {
	const listener = function (...args) {
		if (fn) {
			fn.apply(this, args)
		}
		off(el, event, listener)
	}
	on(el, event, listener)
}
