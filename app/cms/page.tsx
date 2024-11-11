import Image from 'next/image';
import headerlogo from '../../public/1.png';
import CmsDash from '../components/CmsDash';
export default function CMSHome() {
  return (
    <div className='absolute overflow-hidden h-screen w-full bg-zinc-100 font-mono text-xl  text-zinc-900'>
      <header className='flex flex-row w-full  h-24  bg-slate-50 bg-opacity-50 fixed justify-items-center text-center items-center z-50 backdrop-blur-sm '>
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
        <a href='/' className='flex-initial w-44'>
          Home{' '}
        </a>
        |<div className='flex-initial w-44'>Shop</div>|
        <div className='flex-initial w-44'>About</div>|
        <div className='flex-initial w-44'>cms ✓</div>|
      </header>
      <div className='w-24 h-12 bg-rose-300 fixed bottom-0 right-0 z-50'></div>

      <div className=''>
        <br />
        <CmsDash />
      </div>
    </div>
  );
}
