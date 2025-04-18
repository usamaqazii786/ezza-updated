import React, { useEffect, useState } from 'react';

interface CountProps {
  number: number;
  duration: number;
}

const Count: React.FC<CountProps> = ({ number, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    if (start === end) return;

    const incrementTime = (duration / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, duration]);

  return (
    <span>{count}</span>
  );
};

export default Count;
