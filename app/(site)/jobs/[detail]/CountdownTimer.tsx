"use client";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Button } from "@nextui-org/react";

const renderTime = (remainingTime: number, url: string) => {
  const handleRedirect = () => {
    window.open(url, "_blank");
    
  };
  if (remainingTime === 0) {
    return (
      <div className="timer">
        <Button onClick={handleRedirect} size="md" color="primary" radius="sm">
          Apply
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="text-md">Remaining</div>
      <div className="text-2xl  font-semibold">{remainingTime}</div>
      <div className="text-md">seconds</div>
    </div>
  );
};
interface Props {
  url: string;
}
const CountdownTimer = ({ url }: Props) => {
  return (
    <div className="flex justify-center">
      <CountdownCircleTimer
        isPlaying
        duration={15}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => renderTime(remainingTime, url)}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownTimer;
