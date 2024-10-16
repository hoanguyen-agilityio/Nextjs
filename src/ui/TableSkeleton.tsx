import { Card, Skeleton } from '@nextui-org/react';

interface TableSkeletonProps {
  productCount: number;
}

const TableSkeleton = ({ productCount }: TableSkeletonProps) => {
  return (
    <Card className="w-full space-y-5 p-4 mt-5" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-10 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        {Array.from({ length: productCount }).map((_, index) => (
          <Skeleton key={index} className="w-full rounded-lg">
            <div className="h-16 rounded-lg bg-default-200"></div>
          </Skeleton>
        ))}
      </div>
    </Card>
  );
};

export default TableSkeleton;
