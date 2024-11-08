'use client';
import Image from 'next/image';

import { CardType } from '@/constants/card';

export default function MyCard({ card }: { card: CardType }) {
  return (
    <div className='group h-[450px] w-[450px] overflow-hidden bg-neutral-200 flex flex-col items-center justify-center'>
      <Image
        className='transition-transform duration-300 group-hover:scale-110'
        src={card.image}
        width={350}
        height={150}
        alt={card.image}
      />
      <div className='group-hover:scale-110 text-black'>{card.title}</div>
    </div>
  );
}
