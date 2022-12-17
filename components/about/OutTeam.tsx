import { ourThings } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';
import { SquigglyLine } from '@/lib/icon';

const OutTeam = () => {
  return (
    <div className="mt-[50px] w-full">
      <m.div
        initial="hide"
        animate="show"
        exit="hide"
        variants={{
          show: {
            y: '0%',
            opacity: 1,
          },
          hide: {
            y: '75%',
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.75,
        }}
        className="mb-10 flex w-full flex-col items-center justify-center"
      >
        <h1 className="mb-2 font-head text-h2 text-gray-700">Our Team</h1>
        <SquigglyLine className="w-7 scale-[5] opacity-50" />
      </m.div>
      <div className="flex gap-5">
        <div className='grid w-[33%]'>
          {ourThings.map((item) => (
            <React.Fragment key={item.id}>
              {item.outTeams?.map((team) => (
                <div key={team.id}>
                  <small className='text-emerald-500 text-base mb-[5px]'>{team.title}</small>
                  <h1 className='font-head text-gray-800 text-5xl mb-[30px]'>{team.subtitle}</h1>
                  {team.text.map((text, te) => (
                    <React.Fragment key={text.id}>
                      <p className='text-base text-gray-500 mb-5'>{text.text}</p>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
          <button className='bg-emerald-500 text-white font-head text-sm w-max py-3 px-8 rounded-md hover:bg-yellow-400 duration-300 border-none'>View All Members</button>
        </div>
        <div className=''>
          {ourThings.map((item) => (
            <React.Fragment key={item.id}>
              {item.outTeams?.map((team) => (
                <div key={team.id} className='grid grid-cols-2 w-full h-full gap-5'>
                  {team.persons.map((person) => (
                    <div key={person.id} className='flex  items-start justify-center rounded-2xl w-full overflow-hidden relative'>
                      <img src={person.picture} alt="" className='w-full h-[80%] object-cover rounded-2xl' />
                      <div className='flex bg-white shadow absolute w-[80%]  py-10 bottom-0 z-50 h-28 rounded-2xl flex-col items-center justify-center hover:-translate-y-1 duration-300'>
                        <h1 className='font-head text-2xl text-gray-700 mb-[5px]'>{person.name}</h1>
                        <h5 className='text-gray-500 text-base capitalize'>{person.post}</h5>


                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutTeam;
