import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const messages = [
  "Welcome, please enter the URL of your online business.",
  "After that, we dive into improving your website.",
  "So your business can flourish."
];

const MovingDotCircle = () => {
  const dotRef = useRef(null);
  const isLoading = useSelector((state) => state.search.isLoading);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current && !isLoading) {
        const circle = dotRef.current.parentElement;
        const circleRect = circle.getBoundingClientRect();
        const circleRadius = circleRect.width / 2;
        const maxMovement = circleRadius * 0.05;

        const x = e.clientX - (circleRect.left + circleRadius);
        const y = e.clientY - (circleRect.top + circleRadius);

        const scaledX = (x / circleRadius) * maxMovement;
        const scaledY = (y / circleRadius) * maxMovement;

        dotRef.current.style.transform = `translate(${scaledX}px, ${scaledY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isLoading]);

  useEffect(() => {
    if (dotRef.current) {
      if (isLoading) {
        dotRef.current.classList.add('animate-ai-pulse');
      } else {
        dotRef.current.classList.remove('animate-ai-pulse');
      }
    }
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFadeIn(true);
      }, 2000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-32 h-32 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm mb-4"
      >
        <div
          ref={dotRef}
          className="w-4 h-4 bg-red-500 rounded-full transition-transform duration-75"
        ></div>
      </div>
      <p
        className={`text-3xl font-bold tracking-tight text-gray-900 text-center leading-tight transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
};

export default MovingDotCircle;
