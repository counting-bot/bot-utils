import formatNumber from './formatNumber.mjs'
export default async (index, name, number) => `**#${index+1}** ${name}, **${await formatNumber(number, true, true)}**`;