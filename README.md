# rAFTimer
JS timer service using requestAnimationFrame

### Usage:

```
import Timer from './rAFTimer.js';

// Initialize timer
const counter = Timer({
  countdown: false, // default `True`
  delay: 10,
  onRun: handleTimerRun,
  onEnd: handleTimerEnd,
});

// Start the timer once
counter.start();

/**
 * Fired on every second
 * @param  {Number} time Current time
 */
function handleTimerRun(time) {
  console.log(time);
}

/**
 * Fired when the timer is finished
 * @param  {Number} time Current time
 */
function handleTimerEnd(time) {
  console.log('Timer finished', time);
}
```
