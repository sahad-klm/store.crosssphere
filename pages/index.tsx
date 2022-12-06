
import { FeathersCategory, Header, HomeComponent, PopularProducts } from "components";

export default function Home(): any {
  return (
    <div>
      <main>
        <Header />
        <HomeComponent />
        <FeathersCategory />
        <PopularProducts />
      </main>
    </div>
  );
}
