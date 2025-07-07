'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());
  const [showSplash, setShowSplash] = useState(false);
  const [clickedTime, setClickedTime] = useState<{ hour: number; minute: number } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (showSplash && clickedTime !== null) {
      const timeout = setTimeout(() => {
        setShowSplash(false);
        router.push(`/history/${clickedTime.hour}`);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [showSplash, clickedTime, router]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = ((hours % 12) * 30) + (minutes / 2);
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  const handleClockClick = () => {
    const now = new Date();
    const hours24 = now.getHours();
    const minute = now.getMinutes();

    setClickedTime({ hour: hours24, minute });
    setShowSplash(true);
  };

  return (
    <div className="clock-container">
      <div 
        className="analog-clock" 
        onClick={handleClockClick}
      >
        {/* Clock Face Design Elements */}
        <div className="clock-face-decoration"></div>
        
        {/* Hour Marks */}
        {[...Array(12)].map((_, i) => {
          const hour = i + 1;
          const rotation = hour * 30;
          const isQuarterHour = hour % 3 === 0;
          
          return (
            <div
              key={`hour-${hour}`}
              className="clock-marking"
              style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
            >
              <div className={`hour-tick ${isQuarterHour ? 'quarter-hour' : ''}`}></div>
              <div 
                className="clock-hour" 
                style={{ transform: `rotate(-${rotation}deg)` }}
              >
                {hour}
              </div>
            </div>
          );
        })}

        {/* Minute Marks */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 !== 0) { // Skip positions where hour ticks are
            const rotation = i * 6;
            return (
              <div
                key={`minute-${i}`}
                className="clock-marking"
                style={{ '--rotation': `${rotation}deg` } as React.CSSProperties}
              >
                <div className="minute-tick"></div>
              </div>
            );
          }
          return null;
        })}

        {/* Clock Hands */}
        <div
          className="hour-hand"
          style={{ '--rotation': `${hourRotation}deg` } as React.CSSProperties}
        />
        <div
          className="minute-hand"
          style={{ '--rotation': `${minuteRotation}deg` } as React.CSSProperties}
        />
        <div
          className="second-hand"
          style={{ '--rotation': `${secondRotation}deg` } as React.CSSProperties}
        />

        {/* Center Point */}
        <div className="clock-center" />

        {/* Time Splash Screen */}
        {showSplash && clickedTime !== null && (
          <div className="time-splash">
            <div className="time-display">
              <span className="time-hour">{clickedTime.hour.toString().padStart(2, '0')}</span>
              <span className="time-separator">:</span>
              <span className="time-minute">{clickedTime.minute.toString().padStart(2, '0')}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalogClock; 