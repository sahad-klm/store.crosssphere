import {
  HomeComponent,
  FeathersCategory,
  DailyBestSeller,
  PopularProducts,
  DealsOfTheDay,
  FooterProducts,
} from 'components';

const Module = ({
  index,
  data,
  product,
  activeVariant,
  onVariantChange,
}: any): any => {
  const ModuleType = (data: any): any => {
    switch (data._type) {
      case 'homeContent':
        return HomeComponent;
      case 'featuresCategory':
        return FeathersCategory;
      case 'popularProducts':
        return PopularProducts;
      case 'dailyBestSeller':
        return DailyBestSeller;
      case 'dealsOfTheDay':
        return DealsOfTheDay;
      case 'footerProducts':
        return FooterProducts;
    }

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
};
export default Module;
