import { Card, Skeleton } from '@nextui-org/react';

interface OverviewSkeletonProps {
  productCount: number;
}

const OverviewSkeleton = ({ productCount }: OverviewSkeletonProps) => (
  <div className="rounded-lg bg-white dark:bg-dark-900 p-5 flex flex-col gap-5">
    <Skeleton className="w-full rounded-lg">
      <div className="h-10 rounded-lg bg-default-200"></div>
    </Skeleton>
    <div className="flex justify-between w-full">
      {Array.from({ length: productCount }).map((_, index) => (
        <Card
          key={index}
          className="w-1/5 space-y-5 p-4 shadow-none"
          radius="lg"
        >
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default OverviewSkeleton;
