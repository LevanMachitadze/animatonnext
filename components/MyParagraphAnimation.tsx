'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ParagraphProops = {
  paragraph: string;
};

export default function MyParagraphAnimation({ paragraph }: ParagraphProops) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.p
      ref={container}
      style={{ opacity }}
      className='text-[60px] leading-none p-10 max-w-[1280px] text-white'
    >
      {paragraph}
    </motion.p>
  );
}
