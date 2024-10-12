import Image from 'next/image';
import headerlogo from '../public/1.png';
import yeslogo from '../public/yes.png';
import goodlogo from '../public/good.png';
import bg1 from '../public/bg1.png';
import r1 from '../public/r1.png';
import r2 from '../public/r2.png';
import r3 from '../public/r3.png';
import r4 from '../public/r4.png';
import r5 from '../public/r5.png';
import r6 from '../public/r6.png';
import animlogo from '../public/anim2.gif';
import { Newsletter } from './components/Newsletter';
import { Calendar } from './components/Calendar';

export default function Home() {
  return (
    <div>
      <header className='flex flex-row w-full  h-24  text-zinc-900 bg-slate-50 bg-opacity-50 fixed justify-items-center text-center items-center z-50 backdrop-blur-sm font-mono text-xl'>
        <Image
          src={yeslogo}
          placeholder='blur'
          alt='logo'
          style={{
            marginTop: '25rem',
            position: 'absolute',
            pointerEvents: 'none',
          }}
        />
        <div className='flex-initial w-20'>
          <Image
            src={headerlogo}
            placeholder='blur'
            alt='logo'
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'left',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className='flex-initial w-44'>Home ✓</div>|
        <a href='/shop' className='flex-initial w-44'>
          Shop
        </a>
        |<div className='flex-initial w-44'>About</div>|
      </header>{' '}
      <div className='w-24 h-12 bg-rose-300 fixed bottom-0 right-0 z-50'></div>{' '}
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
        <div className='w-full h-screen static justify-items-center items-center place-content-center place-items-center'>
          <Image
            src={bg1}
            placeholder='blur'
            quality={75}
            fill
            sizes='100vw'
            alt='background'
            style={{
              objectFit: 'cover',
              position: 'absolute',
              margin: '0px',
              left: '0px',
              opacity: 0.7,
              top: '0px',
              padding: '0px',
              zIndex: 0,
              pointerEvents: 'none',
            }}
            priority
          />

          <Image
            src={goodlogo}
            placeholder='blur'
            alt='logo'
            style={{
              position: 'absolute',
              right: '0px',
              bottom: '0px',
              zIndex: 40,
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className='w-full min-h-screen bg-transparent z-1 overflow-y-scroll overflow-x-hidden flex-row justify-center'>
          <div className='flex justify-center relative pointer-events-none z-[9] m-0 p-0'>
            <Image
              src={animlogo}
              width={1500}
              alt='animlogo'
              priority
              style={{
                margin: '0px',
                zIndex: 9,
              }}
            />
          </div>

          <div className='text-3xl opacity-90 z-20 text-left top-[40vh] font-sans font-medium p-12 flex-row text-wrap w-96 lg:sticky'>
            <p>{'Sign up for our newsletter ->'}</p>
            <Newsletter />
            <p className='text-xl'>
              {
                'Every month you will receive a selection of writing, art, and exciting news'
              }
            </p>
          </div>

          <div className='text-3xl text-left w-full lg:w-[90vw] lg:left-[25%] relative top-12 font-sans font-medium p-12'>
            <Image
              src={r1}
              placeholder='blur'
              alt='logo'
              width={200}
              style={{
                objectPosition: 'left',
                pointerEvents: 'none',
                display: 'inline-block',
              }}
            />
            <div className='w-96 relative z-[1] inline-block'>
              <p className='text-2xl'>Yes Good is</p>
              <p> </p>
            </div>
            <p> </p>
            <div className='w-96 relative'>
              <Image
                src={r2}
                placeholder='blur'
                alt='logo'
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  pointerEvents: 'none',
                }}
              />
            </div>{' '}
            <div className='z-20 top-[10vh] lg:sticky'>
              <Calendar />
            </div>
            <div className='w-96 left-[15vw] relative z-0'>
              <Image
                src={r3}
                placeholder='blur'
                alt='logo'
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              />
            </div>
            <div className='w-96 relative'>
              <Image
                src={r4}
                placeholder='blur'
                alt='logo'
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div className='w-96 relative'>
              <Image
                src={r5}
                placeholder='blur'
                alt='logo'
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div className='w-96 relative'>
              <Image
                src={r6}
                placeholder='blur'
                alt='logo'
                style={{
                  objectFit: 'contain',
                  objectPosition: 'left',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
