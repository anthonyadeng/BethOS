'use client';
import Image from 'next/image';
import { useEffect, useState, useMemo, useRef } from 'react';
import eventsData from '../testData/events.json';
type EventsDataType = typeof eventsData;
type EventType = (typeof eventsData.events)[0];
export const Calendar = () => {
  const [days, setDays] = useState<React.ReactNode[]>([]);
  const [daysInMonth, setDaysInMonth] = useState(31);
  useEffect(() => {
    const newDays = [];
    for (let i = 0; i < daysInMonth; i++) {
      newDays.push(
        <Day
          num={i}
          key={i}
          events={eventsData.events.filter((event) => Number(event.day) === i)}
        />
      );
    }
    setDays(newDays);
    console.log('Days updated');

    return () => {
      console.log('Calendar unmounted');
    };
  }, [daysInMonth]);
  return (
    <div>
      <div className='grid grid-cols-7 grid-rows-1 sticky font-mono text-xs lg:text-xl h-3/4 w-3/4 bg-cyan-400 bg-opacity-30 '>
        <div className='min-h-4 hover:border-2 border-zinc-500'>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>
      <div className='grid bg-zinc-100 grid-cols-7 grid-rows-5 gap-4 sticky font-mono text-xs md:text-base xl:text-xl h-3/4 w-3/4 '>
        {days}
      </div>
    </div>
  );
};
const Day = ({ num, events }: { num: number; events: EventType[] }) => {
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
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [focused]);

  const handleDayClick = () => {
    if (focused) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <div
      className='hover:outline hover:outline-2 hover:outline-zinc-500 min-h-48'
      onMouseDown={handleDayClick}
    >
      {num}
      {events.map((event, i) => (
        <ul key={i}> {event.name} </ul>
      ))}
      {focused && (
        <div ref={modalRef} onClick={(e) => e.stopPropagation()}>
          <DayModal
            num={num}
            events={events}
            closeModal={() => setFocused(false)}
          />
        </div>
      )}
      <div className='text-xs'>{'event'}</div>
    </div>
  );
};

const DayModal = ({
  num,
  events,
  closeModal,
}: {
  num: number;
  events: EventType[];
  closeModal: () => void;
}) => {
  return (
    <div
      className='absolute bg-zinc-300 w-1/2 max-h-96 overflow-y-scroll lg:p-4'
      onMouseDown={(e) => e.stopPropagation()}
    >
      {events.map((event, i) => (
        <div key={i}>
          <br />
          <div className='text-2xl'>{event.name}</div>
          <br />
          <div className='text-lg'>{event.time}</div>
          <br />
          <div className='text-lg'>{event.description}</div> <br />
          <div className='w-full border-2 border-zinc-800'></div> <br />
        </div>
      ))}

      <button
        className='border-[1px] hover:bg-zinc-500 hover:text-zinc-100 border-zinc-700 absolute top-0 py-1 px-2 right-0'
        onMouseDown={closeModal}
      >
        X
      </button>
    </div>
  );
};
