'use client';
import Image from 'next/image';
import { useEffect, useState, useMemo, useRef } from 'react';
export const Calendar = () => {
  const [days, setDays] = useState<React.ReactNode[]>([]);
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    const newDays = [];
    for (let i = 0; i < daysInMonth; i++) {
      newDays.push(<Day num={i} key={i} />);
    }
    setDays(newDays);
    console.log('Days updated');

    return () => {
      console.log('Calendar unmounted');
    };
  }, [daysInMonth]);
  return (
    <div>
      <div className='grid grid-cols-7 grid-rows-1 sticky font-mono text-xl h-3/4 w-3/4 bg-cyan-400 bg-opacity-30 '>
        <div className='min-h-4 hover:border-2 border-zinc-500'>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div className='grid grid-cols-7 grid-rows-5 gap-2 sticky font-mono text-xl h-3/4 w-3/4 '>
        {days}
      </div>
    </div>
  );
};
const Day = ({ num }: { num: number }) => {
  const [focused, setFocused] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setFocused(false);
      }
    };

    if (focused) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [focused]);

  return (
    <div
      className='hover:border-2 border-zinc-500'
      onClick={() => setFocused(!focused)}
    >
      {num}
      {focused && (
        <div ref={modalRef}>
          <DayModal num={num} />
        </div>
      )}
      <div className='text-xs'>{'event'}</div>
    </div>
  );
};

const DayModal = ({ num }: { num: number }) => {
  return (
    <div className='absolute bg-zinc-300 bg-opacity-50 w-1/2 h-1/2'>
      <div className='text-xl'>{'Event'}</div>
      <div className='text-xs'>{'Description'}</div>
    </div>
  );
};
