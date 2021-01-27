import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  size: number;
  className?: string;
}

const Loader: React.FC<Props> = ({ size, className }) => {
  return (
    <motion.div
      className={className ? className : ''}
      style={{
        margin: size + 'rem auto',
        backgroundColor: 'white',
        height: size + 'rem',
        width: size + 'rem',
        borderRadius: '20%',
      }}
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default Loader;
