'use client';
import Image from 'next/image';
import paidsticker from '../../public/paidsticker.png';
import { useState } from 'react';
export const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className='flex sticky font-mono text-xl'>
      <div
        id='receipt'
        className=' absolute text-center z-10 w-[475px] bg-orange-100 bg-opacity-40 backdrop-blur-[1px] top-0 text-slate-800 h-[0px]   rounded-md pointer-events-none overflow-hidden'
      >
        <div className='absolute top-2 right-2 w-[100px]'>
          <Image src={paidsticker} alt='paidsticker' />
        </div>
      </div>
      <div
        className='w-[475px] h-[50px] bg-slate-900 bg-opacity-60 rounded-sm z-50 absolute pointer-events-none'
        style={{
          display: submitted ? 'block' : 'none',
        }}
      ></div>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='your email'
        autoComplete='email'
        required
        disabled={submitted}
        readOnly={submitted}
        style={{
          pointerEvents: submitted ? 'none' : 'auto',
        }}
        className='absolute border-2 border-gray-500 p-2 z-10 w-[400px] h-[50px]'
      />
      <button
        className='relative bg-indigo-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded z-20 w-[75px] h-[50px]'
        onClick={(e) => {
          e.preventDefault();
          const email = document.getElementById('email') as HTMLInputElement;
          if (submitted || email.value === '') {
            return;
          }
          setSubmitted(true);
          const receipt = document.getElementById('receipt') as HTMLDivElement;
          receipt.style.bottom = `0px`;
          console.log(`${email.value} has been added to the newsletter list`);
          for (let i = 0; i <= 7; i += 0.5) {
            setTimeout(() => {
              receipt.style.height = `${i}rem`;
              receipt.style.top = `${-i}rem`;
            }, i * 600);
          }
        }}
      >
        {' '}
        ok{' '}
      </button>
    </div>
  );
};
