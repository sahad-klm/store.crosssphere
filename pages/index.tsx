import { modulesFinder } from '@/lib/helpers';
import { pageController } from '@/lib/pageController';
import {
  DailyBestSeller,
  DealsOfTheDay,
  FeathersCategory,
  FooterProducts,
  HomeComponent,
  PopularProducts,
  Feathers,
} from 'components';
import Layout from 'components/layout/layout';
import Module from 'components/module/Module';
import { usePathname, useSearchParams } from 'next/navigation';

const Home = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { site, page }: any = data;
  const pageName = modulesFinder(pathname)


  return (
    <Layout site={site} page={page}>
      {pageName[0].modules.map((page: { id: any; pageType: any; }) => (
        <Module key={page.id} data={page?.pageType} />
      ))}
    </Layout>
  );
};

export default Home;
