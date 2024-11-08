'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import MyCard from './MyCard';
import { useRef } from 'react';
import { cards } from '@/constants/card';

export default function HorisontalScrollCarusel() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-46%']);

  return (
    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <motion.div className='flex gap-4' style={{ x }}>
          {cards.map((card) => {
            return <MyCard key={card.id} card={card} />;
          })}
        </motion.div>
        {/* <MyCard /> */}
      </div>
    </section>
  );
}
