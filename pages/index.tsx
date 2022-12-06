
import { DailyBestSeller, DealsOfTheDay, FeathersCategory, Header, HomeComponent, PopularProducts } from "components";

export default function Home(): any {
  return (
    <div>
      <main>
        <Header />
        <HomeComponent />
        <FeathersCategory />
        <PopularProducts />
        <DailyBestSeller />
        <DealsOfTheDay />
      </main>
    </div>
  );
}
