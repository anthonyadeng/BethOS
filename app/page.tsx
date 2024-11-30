import Image from 'next/image';
import headerlogo from '../public/newheader2.png';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div>
      <header className='flex flex-row w-full h-16 sm:h-24  text-zinc-900 bg-slate-50 bg-opacity-30 fixed justify-items-center text-center items-center z-50 backdrop-blur-sm font-mono text-xl'>
        {/* <Image
          src={yeslogo}
          placeholder='blur'
          alt='logo'
          style={{
            marginTop: '25rem',
            position: 'absolute',
            pointerEvents: 'none',
          }}
        /> */}
        <div className='w-24 h-full p-1 pl-7  bg-blue-500'>
          <Image
            src={headerlogo}
            alt='logo'
            fill
            className='object-contain pointer-events-none border object-right border-zinc-800'
          />
        </div>
        <h3 className='w-full pr-24 text-blue-600 font-sans text-2xl text-right sm:text-6xl'>
          Bethany Hughes
        </h3>
      </header>{' '}
      <div className='w-24 h-12 bg-blue-600 fixed bottom-0 right-0 z-50 flex items-center justify-center text-2xl'>
        @
      </div>{' '}
      <main className='flex flex-col w-full h-screen bg-slate-100 text-zinc-900 text-center justify-items-center items-center place-content-center place-items-center overflow-hidden'>
        {' '}
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
        <div className=' z-[1] bottom-0 left-1/2 before:absolute pointer-events-none before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[""]  before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-rose-400 before:opacity-50 before:w-48 before:lg:w-96 before:h-screen overflow-hidden'></div>
        <div className='w-full h-screen static justify-items-center items-center place-content-center place-items-center'></div>
        <div className='w-full min-h-screen bg-transparent z-1 overflow-y-scroll overflow-x-hidden flex-row justify-center'>
          <div
            id='carousel'
            className='absolute top-1/4 right-1/2 m-0 p-0 w-auto h-auto'
          >
            {/* <Carousel /> */}
          </div>
          <div className='text-xl sm:text-3xl  right-0 text-left absolute bottom-0 font-sans font-medium py-24 px-12'>
            {' '}
            <p>{'Bethany Hughes (b. 1992, Canada) ->'}</p>
            <p className='text-sm sm:text-xl w-1/2'>
              {
                'Conservation Assistant at Athena Art Conservation in NYC, focusing on paintings and paper artworks.'
              }
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
