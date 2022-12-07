import { feathersInTotals } from 'constants/data';

export const Bottom = (): JSX.Element => (
  <div className="mt-[50px] grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
    {feathersInTotals?.map((item) => (
      <div
        key={item.id}
        className="group/icon flex items-center justify-start gap-6 rounded-xl bg-gray-200 p-4"
      >
        <img
          src={item.icon}
          alt=""
          className=" h-16 w-16 object-contain transition-transform duration-300 group-hover/icon:-translate-y-1"
        />
        <div>
          <h4 className="font-head text-[18px] text-gray-800">{item.title}</h4>
          <p className="mt-[2px] font-body text-gray-600">{item.subtitle}</p>
        </div>
      </div>
    ))}
  </div>
);
