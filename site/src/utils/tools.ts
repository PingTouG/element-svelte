// 判断是否变量定义
export const isUndef = (val: any): boolean => val === undefined || val === null
// 判断是否为空字符串
export const isStrEmpty = (val: string): boolean => val === '' || isUndef(val)
