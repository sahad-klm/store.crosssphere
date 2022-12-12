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
import { usePathname, useSearchParams } from 'next/navigation';

const Home = (data: {
  sate: any | undefined;
  page: any | undefined;
}): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { site, page }:any = data;



  return (
    <Layout site={site} page={page}>
      <HomeComponent />
      <FeathersCategory />
      <PopularProducts />
      <DailyBestSeller />
      <DealsOfTheDay />
      <FooterProducts />
      <Feathers />
    </Layout>
  );
};

export default Home;
