export default (correct, wrong) => `${((correct / (wrong + correct))*100).toFixed(2)}%`