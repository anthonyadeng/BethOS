'use client';
import Image from 'next/image';
import headerlogo from '../public/newheader2.png';
import abstractlogo from '../public/newheader3.png';
import e from '../public/e.png';

export default function Home() {
  const handleClick = () => {
    const email1 = `${process.env.NEXT_PUBLIC_FIRST}`;
    const email2 = `${process.env.NEXT_PUBLIC_SECOND}`;
    const email3 = `${process.env.NEXT_PUBLIC_THIRD}`;
    const code = [105, 108, 46, 99];
    const dcodeHypertext = (text: string) => {
      const element = document.createElement('div');
      element.innerHTML = text;
      return element.textContent || element.innerText || '';
    };
    const dcode = code.map((c) => String.fromCharCode(c)).join('');
    console.log(dcodeHypertext(email1));
    const ans = `${dcodeHypertext(email1)}${dcodeHypertext(
      email2
    )}${dcode}${dcodeHypertext(email3)}`;
    window.location.href = `mailto:${ans}`;
  };
  return (
    <div>
      <header className='flex flex-row w-full h-16 sm:h-24  text-zinc-900 bg-slate-50 bg-opacity-30 fixed justify-items-center text-center items-center z-50 border-b border-zinc-200 backdrop-blur-sm font-mono text-xl'>
        <div className='w-24 h-full border-zinc-800 flex'>
          <div className='w-full h-full relative'>
            <Image
              src={abstractlogo}
              alt='logo'
              fill
              className='object-fill pointer-events-none object-left'
            />
          </div>
        </div>
        <div className=' text-blue-600 font-sans text-2xl text-left sm:text-6xl mx-4'>
          Bethany Hughes
        </div>
        <div className='w-24 h-full absolute pr-2 m-0 right-0 flex'>
          <div className='border-l w-full h-full relative'>
            <Image
              src={headerlogo}
              alt='logo'
              fill
              className='object-contain pointer-events-none object-center'
            />
          </div>
        </div>
      </header>
      <main className='flex flex-col w-full h-screen bg-slate-100 text-zinc-900  overflow-hidden items-center'>
        <div
          className='blur-2xl opacity-60 rounded-full overflow-hidden '
          style={{
            position: 'absolute',
            zIndex: 10,
            bottom: 0,
            right: 0,
            width: 222,
            height: 222,
            background:
              'radial-gradient(closest-side, rgba(147, 128, 201, 0.94), rgba(98, 139, 237, 0.82), transparent)',
          }}
        ></div>
        <div
          className='blur-2xl opacity-30 rounded-full overflow-hidden '
          style={{
            position: 'absolute',
            zIndex: 10,
            bottom: 10,
            right: 10,
            width: 222,
            height: 111,
            background:
              'conic-gradient(rgba(92, 110, 161, 0.8), rgba(233, 38, 50, 0.85), transparent)',
          }}
        ></div>
        <div className=' z-10 pointer-events-none bottom-0 left-1/2 before:absolute before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""]  before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-rose-400 before:opacity-50 before:w-48 before:lg:w-96 before:h-screen overflow-hidden'></div>
        <div className='w-full h-screen static justify-items-center items-center place-content-center place-items-center'></div>
        <div className='w-full min-h-screen bg-transparent z-1 overflow-y-scroll overflow-x-hidden flex-row justify-center'>
          <div className='text-xl sm:text-3xl  right-0 text-left absolute bottom-0 font-sans font-medium py-16 px-12 w-1/2 lg:w-1/3'>
            <p>{'Bethany Hughes (b. 1992, Canada) '}</p>
            <p className='text-sm sm:text-lg'>
              {
                '-> Conservation Assistant at Athena Art Conservation in NYC, focusing on paintings and paper artworks.'
              }
            </p>
            <div className='relative w-1/2 h-12 p-0 min-w-36'>
              <Image
                src={e}
                alt='e'
                onClick={handleClick}
                fill
                className='pointer-events-auto object-contain'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
