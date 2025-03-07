/**
 * @description getDictOptionsLabel
 * @param list 
 * @returns {*} label
 */
export function getDictOptionsLabel<T extends Record<string, any>>(
  list: T[] = [],
  value: string | number,
  key: keyof T = 'value',
  label: keyof T = 'label',
) {
  const findList = list
  if (!['string', 'number'].includes(typeof value) || findList.length === 0)
    return '-'
  const obj = findList.find(item => item[key] === value)
  return obj ? obj[label] : '-'
}
