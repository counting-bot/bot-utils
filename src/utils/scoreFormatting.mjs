import formatNumber from './formatNumber.mjs'
export default (index, name, number) => `**#${index+1}** ${name}, **${formatNumber(number, true, true)}**`;