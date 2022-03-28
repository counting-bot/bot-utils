import formatNumber from './formatNumber.mjs'
export default (correct, wrong) => {
    return `${formatNumber(correct < 0 ? 0.00 : (100 - (((wrong / correct).toFixed(2)) * 10)), false, true)}%`
}