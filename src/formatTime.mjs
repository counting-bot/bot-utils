export default async (ms) => {
    const days = (Math.floor(ms/ (1000 * 60 * 60 * 24))).toFixed(0)
    const hours = (Math.floor((ms% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toFixed(0)
    const minutes = (Math.floor((ms% (1000 * 60 * 60)) / (1000 * 60))).toFixed(0)
    const seconds = (Math.floor((ms% (1000 * 60)) / 1000)).toFixed(0)

    return `${days} Day(s) ${hours}:${minutes}:${seconds}`
}