// Third party
import { memo } from 'react';

// Components
import { ChartArrows } from '@/icons';
import clsx from 'clsx';

interface OverviewItemProps {
  value: string | number;
  label: string;
  growth: string | number;
  isLast: boolean;
  isFirst: boolean;
}

const OverviewItem = memo(
  ({ value, label, growth, isLast, isFirst }: OverviewItemProps) => (
    <div
      className={clsx(
        'flex flex-col items-center',
        { 'border-r border-gray-700 pr-6xl': !isLast },
        { 'pl-7': !isFirst },
      )}
    >
      <span className="text-4xl font-semibold mb-2sm">{value}</span>
      <span className="text-base font-semibold text-ratio-200 dark:text-grayBlue-400 mb-2sm">
        {label}
      </span>
      <div className="flex items-center rounded-lg bg-gray-50 py-sm px-m dark:bg-gray-700">
        <ChartArrows width="12px" height="7px" className="mr-1" />
        <span className="text-sm font-bold">{growth}</span>
      </div>
    </div>
  ),
);

OverviewItem.displayName = 'OverviewItem';

export default OverviewItem;
