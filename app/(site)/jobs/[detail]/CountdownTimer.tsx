'use client'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const renderTime = (remainingTime:number ) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
const CountdownTimer = () => {
  return (
    <div className="flex justify-center">
<CountdownCircleTimer
    isPlaying
    duration={7}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => renderTime( remainingTime)}
  </CountdownCircleTimer>
    </div>
  )
}

export default CountdownTimer