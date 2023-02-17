import {
  HomeComponent,
  FeathersCategory,
  DailyBestSeller,
  PopularProducts,
  DealsOfTheDay,
  FooterProducts,
  Collations,
  ProductDetails,
  About,
  Contact,
} from 'components';
import CollationSlug from 'components/collections/[collationSlug]/collationSlug';

const Module = ({
  index,
  data,
  product,
  activeVariant,
  onVariantChange,
}: any): JSX.Element | any => {
  const ModuleType = (data: any): any => {
    switch (data?.data) {
      case 'homeContent':
        return <HomeComponent />;
      case 'featuresCategory':
        return <FeathersCategory />;
      case 'popularProducts':
        return <PopularProducts />;
      case 'dailyBestSeller':
        return <DailyBestSeller />;
      case 'dealsOfTheDay':
        return <DealsOfTheDay />;
      case 'footerProducts':
        return <FooterProducts />;
      case 'collationSlug':
        return <CollationSlug />;
      case 'contact':
        return <Contact />;
    }
  };
  return (
    <ModuleType
      index={index}
      data={data}
      product={product}
      activeVariant={activeVariant}
      onVariantChange={onVariantChange}
    />
  );
};
export default Module;
