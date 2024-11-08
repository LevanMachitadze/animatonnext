import HorisontalScrollCarusel from '@/components/HorisontalScrollCarusel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-neutral-800'>
      <section className='flex h-48 items-center justify-center min-h-screen'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll Down
        </span>
      </section>
      <HorisontalScrollCarusel />
      <section className='flex h-48 items-center justify-center min-h-screen'>
        <span className='font-semibold uppercase text-neutral-500'>
          Scroll Up
        </span>
      </section>
    </main>
  );
}
