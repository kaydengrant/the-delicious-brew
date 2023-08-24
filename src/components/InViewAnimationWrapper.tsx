import { motion, useInView } from 'framer-motion';
import React, { ReactElement, useRef } from 'react';

type Props = {
  children: ReactElement;
  className?: string;
};

const InViewAnimationWrapper: React.FC<Props> = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.7s',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InViewAnimationWrapper;
