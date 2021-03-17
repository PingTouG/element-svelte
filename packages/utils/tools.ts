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
