import {cpus} from 'os'

const average = () => {
    const osCPU = cpus();
    const osCPULength = osCPU.length;

    const mapedCPU = osCPU.map(cpu => {
        return {
            "idle": cpu.times.idle,
            "times": Object.values(cpu.times).reduce((a, b) => a + b)
        }
    })

    return {
        "avgIdle": mapedCPU.reduce((a, b) => a + b.idle, 0) / osCPULength,
        "avgTotal": mapedCPU.reduce((a, b) => a + b.times, 0) / osCPULength
    }
}

export default () => {
    return new Promise(resolve => {
        const startMeasure = average()
        setTimeout(() => {
            const endMeasure = average()
            return resolve((10000 - Math.round(10000 * (endMeasure.avgIdle - startMeasure.avgIdle) / (endMeasure.avgTotal - startMeasure.avgTotal))) / 100)
        }, 1000)
    })
}