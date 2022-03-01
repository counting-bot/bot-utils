export default (number, commaSeparator, trim) => {
    const srtNumber = number.toString();
    const trimedNumber = trim ? (srtNumber.includes(".") ? `${srtNumber.split(".")[0]}.${srtNumber.split(".")[1].slice(0, 2)}` : srtNumber) : srtNumber
    return commaSeparator ? `${trimedNumber.split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}${srtNumber.includes(".")?".":""}${trimedNumber.split(".")[1]??""}` : trimedNumber
};