import { ChartArrows } from '@/icons';
import { data } from '@/mocks';

const OverviewStats = () => (
  <div className="flex justify-between w-full pt-11 pb-[50px] pl-20 pr-[137px] bg-white text-black">
    {data.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center ${index !== data.length - 1 ? 'border-r border-gray-700 pr-[105px]' : ''}`}
      >
        <span className="text-4xl font-semibold mb-[6px]">{item.value}</span>
        <span className="text-base font-semibold text-grayBlue-400 mb-[5px]">
          {item.label}
        </span>
        <div className="flex items-center rounded-lg bg-gray-50 py-[10px] px-[11px]">
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
