'use client';
import { Error } from '@/components';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset, error }: GlobalErrorProps) {
  return (
    <html>
      <body className="h-screen">
        <Error onReset={reset} message={error.message} />
      </body>
    </html>
  );
}
