import { CircularProgress } from '@nextui-org/react';

const Loading = () => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div
      aria-label="Loading..."
      role="status"
      className="flex items-center justify-center space-x-2"
    >
      <CircularProgress size="lg" aria-label="Loading..." />
      <span className="text-4xl font-medium text-gray-800">Loading...</span>
    </div>
  </div>
);

export default Loading;
