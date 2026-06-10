'use client';
import Container from '@/components/Container'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['new collections'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Container className='bg-white/20 rounded-lg shadow-lg border border-white/25 py-24 mt-10 mb-14'>
      <div className="flex flex-col gap-3 pl-5">
        <div className='text-3xl uppercase font-bold'><span ref={el} /></div>
        <div><span className='text-6xl font-bold'>20</span><span className=''>%off</span></div>
        <div className="">
          <Link href="/products/nike-air-zoom" className='inline-block bg-gray-900 text-gray-100 text-lg py-1.5 px-3 rounded-lg uppercase'>shop now</Link>
        </div>
      </div>
      <div className="relative float-right -mt-40 mr-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 inline-block w-60 h-60 border border-white/20 rounded-full"></div>
        <img src="assets/shoes1.png" alt="shoe 1" className='rotate-330' />
      </div>
    </Container>
  )
}

export default HeroSection