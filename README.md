```
npm i counting-bot/bot-utils
```

&#x200B;

# bot-utils
Common functions that [Counting](https://discord.com/oauth2/authorize?client_id=726560538145849374&scope=bot%20applications.commands) uses.

functions included:
&#x200B;
- avgCPUload: Displays the average cpu load percentage
    -    4.06
- removeFormatting: Removes discord formatting
    - _**__OwO__**_   (`_**__OwO__**_`) turns into OwO
- formatTime: Formats a time in milliseconds to a readable string with days, hours, minutes, and seconds
    - 1643714185 truns into 19 Day(s) 0:35:14

&#x200B;

# Usage

```js
import {formatTime, avgCPUload, removeFormatting} from './src/index.mjs';

console.log(formatTime(1643714185)) // 19 Day(s) 0:35:14

console.log(await avgCPUload()) // 4.06

console.log(removeFormatting("_**__OwO__**_")) // OwO
```

&#x200B;

# Development

If you have ANY problem, please drop a bug report on Github or post the issue in #issues of the [discord](https://discord.gg/5kNZFH5). Pull requests are welcome.
