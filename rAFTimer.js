/**
 * Timer Service
 * @param {Object} config Configuration object used for initialization
 * @param {Number} config.delay Interval time in seconds
 * @param {Boolean} config.countdown Indicates if timer should go up or down
 * @param {Function} config.onRun Fired in every second
 * @param {Function} config.onEnd Fired when the timer is finished
 */
const TimerService = ({
  delay = 3, countdown = true, onRun, onEnd,
}) => {
  let rAF = null;
  let startTime = null;
  let prevSecond = 0;

  function stop() {
    window.cancelAnimationFrame(rAF);
  }

  function rAFRender(timestamp) {
    startTime = startTime || timestamp;

    const timeElapsedSinceStart = timestamp - startTime;
    const secondsElapsedSinceStart = Math.floor(timeElapsedSinceStart / 1000);

    const currentSecond = countdown ? delay - secondsElapsedSinceStart : secondsElapsedSinceStart;

    if (prevSecond !== secondsElapsedSinceStart) {
      prevSecond = secondsElapsedSinceStart;
      onRun(currentSecond);

      if (secondsElapsedSinceStart >= delay) {
        stop();
        onEnd(currentSecond);

        return;
      }
    }

    rAF = window.requestAnimationFrame(rAFRender);
  }

  function start() {
    window.requestAnimationFrame(rAFRender);
  }

  return Object.freeze({
    start,
    stop,
  });
};

export default TimerService;
