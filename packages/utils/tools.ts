/**
 * 有条件的拼接前缀
 * @param val 判断条件
 * @param preffix 拼接前缀
 * @param concatVal 要拼接的内容，为空则用val拼接
 * @returns 拼接结果
 */
export const preffixConcat = (val, preffix = '', concatVal = undefined) =>
	!!val ? `${preffix}${concatVal ? concatVal : val}` : ''

/**
 * 拼接并移除左右空白
 * @param args 要拼接的内容
 * @returns
 */
export const trimConcat = (...args) => args.join(' ').trim()

export const isKorean = (text) => {
	const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi
	return reg.test(text)
}

export const isUnDef = (val) => val === undefined || val === null

// 节流函数
export const throttle = (fn, delay = 200) => {
	let suspend = false

	return function () {
		if (suspend) {
			return false
		}

		suspend = true

		setTimeout(() => {
			fn.call(this, arguments)
			suspend = false
		}, delay)
	}
}
