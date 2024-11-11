'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ParagraphProops = {
  paragraph: string;
};

export default function MyWordAnimation({ paragraph }: ParagraphProops) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.6', 'start 0'],
  });

  const words = paragraph.split('');
  console.log(words);

  return (
    <p
      ref={container}
      className='flex flex-wrap text-[60px] leading-none p-10 max-w-[1280px] text-white'
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className='relative mr-3 mt-3'
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
