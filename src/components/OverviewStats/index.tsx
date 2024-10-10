import { ChartArrows } from '@/icons';
import { data } from '@/mocks';

const OverviewStats = () => (
  <div className="flex justify-between w-full pt-11 pb-5xl pl-20 pr-8xl bg-white text-black">
    {data.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center ${index !== data.length - 1 ? 'border-r border-gray-700 pr-6xl' : ''}`}
      >
        <span className="text-4xl font-semibold mb-2sm">{item.value}</span>
        <span className="text-base font-semibold text-grayBlue-400 mb-2sm">
          {item.label}
        </span>
        <div className="flex items-center rounded-lg bg-gray-50 py-sm px-m">
          <ChartArrows
            width="12px"
            height="7px"
            fill="black"
            className="mr-1"
          />
          <span className="text-sm font-bold">{item.growth}</span>
        </div>
      </div>
    ))}
  </div>
);

export default OverviewStats;
