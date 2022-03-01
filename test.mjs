import {formatTime, avgCPUload, removeFormatting, formatNumber, formatScoreString, calculateAccuracy} from './src/index.mjs';

console.log(formatTime(1643714185)) // 19 Day(s) 0:35:14

console.log(await avgCPUload()) // 4.06

console.log(removeFormatting("_**__OwO__**_")) // OwO

console.log(formatNumber("123456", true)) // 123,456

console.log(formatScoreString(5, "numselli",  13681)) // **#6** numselli, **13,681**

console.log(calculateAccuracy(217, 404)) // 0%

console.log(calculateAccuracy(13645, 143)) // 99.9%