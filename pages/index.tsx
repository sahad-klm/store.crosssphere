
import { DailyBestSeller, DealsOfTheDay, FeathersCategory, FooterProducts, Header, HomeComponent, PopularProducts, Feathers } from "components";

export default function Home(): any {
  return (
      <main>
        <Header />
        <HomeComponent />
        <FeathersCategory />
        <PopularProducts />
        <DailyBestSeller />
        <DealsOfTheDay />
        <FooterProducts />
        <Feathers />
      </main>
  );
}
