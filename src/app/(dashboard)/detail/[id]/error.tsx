'use client';
import { Error } from '@/components';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorDetailPage = ({ reset, error }: GlobalErrorProps) => (
  <Error onReset={reset} message={error.message} />
);

export default ErrorDetailPage;
