import { ChartArrows } from '@/icons';

interface OverviewItemProps {
  value: string | number;
  label: string;
  growth: string | number;
  isLast: boolean;
}

const OverviewItem = ({ value, label, growth, isLast }: OverviewItemProps) => (
  <div
    className={`flex flex-col items-center ${!isLast ? 'border-r border-gray-700 pr-6xl' : ''}`}
  >
    <span className="text-4xl font-semibold mb-2sm">{value}</span>
    <span className="text-base font-semibold text-grayBlue-400 mb-2sm">
      {label}
    </span>
    <div className="flex items-center rounded-lg bg-gray-50 py-sm px-m">
      <ChartArrows width="12px" height="7px" fill="black" className="mr-1" />
      <span className="text-sm font-bold">{growth}</span>
    </div>
  </div>
);

export default OverviewItem;
