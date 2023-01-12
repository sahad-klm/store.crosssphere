import { modulesFinder } from '@/lib/helpers';
import { Collations } from 'components';
import Layout from 'components/layout/layout';
import Module from 'components/module/Module';
import Error from 'next/error';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import React from 'react';

const index = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element => {
  const { site, page }: any = data;
  return (
    <>
      <Collations />;
    </>
  );
};

export default index;
