import { BrowseAllCategories } from "constants/data";

function BrowseAllCategory():any {
  return (
  <div className='z-40 absolute top-14 left-0 rounded shadow-md border border-opacity-30 border-emerald-500 p-5 bg-white grid grid-cols-2 gap-3 w-max '>
    {BrowseAllCategories?.map((item) => (
      <div key={item.id} className='grid grid-flow-col w-max border border-gray-300 rounded py-2 px-4 gap-2 hover:shadow-md'>
        {item.icon}
        <p className="font-body text-emerald-500">{item.name}</p>
      </div>
    ))}

  </div>
    )
}

export default BrowseAllCategory;
