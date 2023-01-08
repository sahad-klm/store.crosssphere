import { ourThings } from '@/lib/data';
import React from 'react';
import { m } from 'framer-motion';
import {
  FacebookIcon,
  InstagramIcon,
  SquigglyLine,
  TwitterIcon,
  YoutubeIcon,
} from '@/lib/icon';
import Link from 'next/link';
import { fadeAnim } from '@/lib/motion';

const OutTeam = () => {
  const socialMediaIcon = (platform: string): any => {

    switch (platform) {
      case 'facebook':
        return <FacebookIcon className="h-[20px] w-[20px] fill-emerald-500" />;

      case 'twitter':
        return <TwitterIcon className="h-[20px] w-[20px] fill-emerald-500" />;

      case 'instagram':
        return <InstagramIcon className="h-[20px] w-[20px] fill-emerald-500" />;
      case 'youtube':
        return <YoutubeIcon className="h-[20px] w-[20px] fill-emerald-500" />;
    }
  };

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
      <div className="flex gap-5 max-md:flex-col">
        <div className="grid md:w-[33%]">
          {ourThings.map((item) => (
            <React.Fragment key={item.id}>
              {item.outTeams?.map((team) => (
                <div key={team.id}>
                  <m.small
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={{
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                    hide: {
                      y: '55%',
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.45 ,
                  }}
                  className="mb-[5px] text-base text-emerald-500">
                    {team.title}
                  </m.small>
                  <m.h1 initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={{
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                    hide: {
                      y: '55%',
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.55 ,
                  }} className="mb-[30px] font-head text-5xl text-gray-800">
                    {team.subtitle}
                  </m.h1>
                  {team.text.map((text, te) => (
                    <React.Fragment key={text.id}>
                      <m.p initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={{
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                    hide: {
                      y: '55%',
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.65 *(te),
                  }} className="mb-5 text-base text-gray-500">
                        {text.text}
                      </m.p>
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
          <m.button 
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={{
            show: {
              y: '0%',
              opacity: 1,
            },
            hide: {
              y: '55%',
              opacity: 0,
            },
          }}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.65 ,
          }}
          className="w-max rounded-md border-none bg-emerald-500 py-3 px-8 font-head text-sm text-white outline-none duration-300 hover:bg-yellow-400">
            View All Members
          </m.button>
        </div>
        <div className="">
          {ourThings.map((item) => (
            <React.Fragment key={item.id}>
              {item.outTeams?.map((team) => (
                <div
                  key={team.id}
                  className="grid h-full w-full gap-5 max-md:mb-[40px] md:grid-cols-2"
                >
                  {team.persons.map((person) => (
                    <m.div
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={fadeAnim}
                      key={person.id}
                      className="relative  flex w-full items-start justify-center overflow-hidden rounded-2xl"
                    >
                      <m.img 
                      initial="hide"
                      whileInView="show"
                      exit="hide"
                      variants={{
                        show: {
                          y: '0%',
                          opacity: 1,
                        },
                        hide: {
                          y: '55%',
                          opacity: 0,
                        },
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.45 ,
                      }}
                        src={person.picture}
                        alt=""
                        className="h-[80%] w-full rounded-2xl object-cover"
                      />
                      <div className="absolute bottom-1 z-50 flex w-[80%]  flex-col items-center justify-center rounded-2xl bg-white p-[30px] shadow duration-300 hover:-translate-y-1">
                        <m.h1 
                        initial="hide"
                        whileInView="show"
                        exit="hide"
                        variants={{
                          show: {
                            y: '0%',
                            opacity: 1,
                          },
                          hide: {
                            y: '55%',
                            opacity: 0,
                          },
                        }}
                        transition={{
                          duration: 0.2,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.55 ,
                        }} className="mb-[5px] font-head text-2xl text-gray-700">
                          {person.name}
                        </m.h1>
                        <m.h5 initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={{
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                    hide: {
                      y: '55%',
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.65 ,
                  }}
                        className="text-base capitalize text-gray-500">
                          {person.post}
                        </m.h5>
                        <div className="mt-5 flex gap-3">
                          {person.socialMedia.map((social, ik) => (
                            <m.span 
                            initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={{
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                    hide: {
                      y: '55%',
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.75 * (ik / 4),
                  }} key={social.id}>
                            <Link href={`${social.id}`}>
                              {socialMediaIcon(social.platform)}
                            </Link>
                            </m.span>
                          ))}
                        </div>
                      </div>
                    </m.div>
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
