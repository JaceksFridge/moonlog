
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'

const Number = ({ n, onRest }) => {
    const [displayNumber, setDisplayNumber] = useState(0);
  
    useEffect(() => {
      setDisplayNumber(n);
      console.log(`Type of n: ${typeof n}, Value of n:`, n);
    }, [n]);
  
    const animationProps = useSpring({ 
        number: displayNumber, 
        from: { number: 0 }, 
        config: { mass: 1, tension: 20, friction: 10},
        onRest: onRest,
      });
  
    return (
      <animated.div>
        {animationProps.number.to((num) => num.toFixed(0))}
      </animated.div>
    );
  };
  
  export default Number;