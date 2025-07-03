import { useEffect, useState } from "@wordpress/element";

function CountUp({
  target = 100,
  duration = 2000,
  float = false,
  decimals = 2,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  const displayValue = float ? count.toFixed(decimals) : Math.floor(count);

  return <span>{displayValue}</span>;
}

export default CountUp;
