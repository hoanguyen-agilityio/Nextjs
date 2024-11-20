// Models
import { OverviewData } from '@/types';

// Components
import OverviewItem from '../OverviewItem';

const OverviewStats = ({ data }: OverviewData) => {
  const safeData = Array.isArray(data) ? data : [];

  return (
    <div className="flex justify-between w-full pt-11 pb-5xl pl-20 pr-8xl bg-white text-black dark:bg-dark-900">
      {safeData.length > 0 ? (
        safeData.map((item, index) => (
          <OverviewItem
            key={index}
            value={item.value}
            label={item.label}
            growth={item.growth}
            isLast={index === safeData.length - 1}
          />
        ))
      ) : (
        <p className="text-gray-500 w-full text-center">No data available</p>
      )}
    </div>
  );
};

export default OverviewStats;
