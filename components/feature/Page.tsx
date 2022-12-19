import { Bottom } from './Bottom';
import Top from './Top';
import {usePathname} from "next/navigation";



const Feathers = (): JSX.Element => {
  const pathName = usePathname()
  console.log(pathName);
  
  return (
    <section className="mt-[50px] flex w-full flex-col items-center justify-center overflow-hidden  px-4">
      <Top pathName={pathName}/>
      <Bottom />
    </section>
  );
};

export default Feathers;
