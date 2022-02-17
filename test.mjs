import {formatTime, avgCPUload, removeFormatting, formatNumber, formatScoreString} from './src/index.mjs';

console.log(await formatTime(1643714185)) // 19 Day(s) 0:35:14

console.log(await avgCPUload()) // 4.06

console.log(removeFormatting("_**__OwO__**_")) // OwO

console.log(await formatNumber("123456", true)) // 123,456

console.log(await formatScoreString(5, "numselli",  13681)) // **#6** numselli, **13,681**