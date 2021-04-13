import { on, once } from './dom'

export default (el, fn) => {
	let interval = null
	let startTime
	const handler = () => fn && fn()
	const clear = () => {
		if (Date.now() - startTime < 100) {
			handler()
		}
		clearInterval(interval)
		interval = null
	}

	on(el, 'mousedown', () => {
		startTime = Date.now()
		once(document, 'mouseup', clear)
		clearInterval(interval)
		interval = setInterval(handler, 100)
	})
}
