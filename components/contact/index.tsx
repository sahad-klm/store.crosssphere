import HeadRootNames from '@/ui/HeadRootNames';
import React from 'react';
import ContactForm from './ContactForm';
import HelpYou from './HelpYou';
import LocationMap from './LocationMap';
import OurOffice from './OurOffice';

const Contact = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-lg:mt-[100px] ">
      <HeadRootNames customPath="Contact" />
      <div className="mx-4  grid lg:mx-[5%] xl:mx-[10%]">
        <HelpYou />
      </div>
      <div className="grid w-full px-4 ">
        <LocationMap />
      </div>
      <div className="mx-4 grid lg:mx-[5%] xl:mx-[10%]">
        <OurOffice />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
