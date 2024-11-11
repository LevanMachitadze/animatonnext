'use client';
import MyParagraphAnimation from '@/components/MyParagraphAnimation';
import MyWordAnimation from '@/components/MyWordAnimation';
import Image from 'next/image';

const paragraph: string =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quam iusto quibusdam culpa rem beatae iste enim, nulla unde eius reiciendis nesciunt quod alias dolore fugit quae ducimus deleniti fugiat.';

export default function Home() {
  return (
    <main>
      <div className='h-screen'></div>
      {/* paragraph cpmponent */}
      <MyParagraphAnimation paragraph={paragraph} />
      <div className='h-screen'></div>
      <MyWordAnimation paragraph={paragraph} />
      <div className='h-screen'></div>
    </main>
  );
}
