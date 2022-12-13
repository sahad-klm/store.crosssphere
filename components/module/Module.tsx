import {
  HomeComponent,
  FeathersCategory,
  DailyBestSeller,
  PopularProducts,
  DealsOfTheDay,
  FooterProducts,
  Collations
} from 'components';
import CollationSlug from 'components/collections/[collationSlug]/collationSlug';

const Module = ({
  index,
  data,
  product,
  activeVariant,
  onVariantChange,
}: any):JSX.Element | any => {

  console.log(data);
  

  const ModuleType = (data : any): any => {
    
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
      case 'collection':
        return <Collations />;
      case 'collationSlug':
        return <CollationSlug />;
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
