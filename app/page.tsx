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
import { Newsletter } from './components/newsletter';

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
        <div className='flex-initial w-44'>Shop</div>|
        <div className='flex-initial w-44'>About</div>|
      </header>
      <main className='flex flex-col w-full h-screen bg-slate-100 text-zinc-900 text-center justify-items-center items-center place-content-center place-items-center overflow-hidden'>
        {' '}
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
              zIndex: 9,
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className='w-full min-h-screen bg-transparent z-1 overflow-y-scroll overflow-x-hidden'>
          <div className='w-full relative left-1/4 m-[-24vh] pointer-events-none z-[9]'>
            <Image
              src={animlogo}
              width={2000}
              alt='logo'
              style={{
                position: 'relative',
                display: 'block',
                paddingTop: '50px',
              }}
            />
          </div>
          <div className='columns-3xl text-3xl md:gap-96 text-left w-3/4 left-[12%] relative font-sans font-medium '>
            <p>{'Sign up for our newsletter ->'}</p>
            <Newsletter />
            <p className='text-2xl'>
              {
                'Every month you will receive a selection of writing, art, and exciting news'
              }
            </p>
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
