# sleep-ms

Sleep MS is primarily a command-line tool that emulates BASH [SLEEP](https://en.wikipedia.org/wiki/Sleep_%28Unix%29) 
command using NodeJS.

## Why sleep-ms?

First and foremost, it provides the ability to stall execution in milliseconds. SLEEP command supports seconds only 
(unless you install bash with [loadable sleep](http://sleep.dashnine.org/docs/api/sleep/interfaces/Loadable.html)).
Secondly, a number of CI platforms do not support sleep within scripts, but if you are on NodeJS stack, you can easily
utilise this module to overcome this limitation.

## Installing sleep-ms

```terminal
npm install sleep-ms --save;
```

## Using CLI

```terminal
# sleep for 1 second
sleepms 1000;
```
> It is recommended that you do a global install using  `npm install sleep-ms -g;`

## Using the JS API

Usually there would not be any need to use this since using `setTimeout` in JavaScript is equivalent to this.

```javascript
var sleepms = require('sleep-ms');

// sleep for one second
sleepms(1000);
```
