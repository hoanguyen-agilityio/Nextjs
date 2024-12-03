'use client';

// Third party
import Link from 'next/link';

// Constants
import { MESSAGE, ROUTERS } from '@/constants';

type ErrorProps = {
  onReset?: () => void;
  message?: string;
  className?: string;
};

const getErrorCode = (): number => {
  if (typeof window !== 'undefined') {
    const code = new URLSearchParams(window.location.search).get('errorCode');
    return code ? parseInt(code, 10) : 500;
  }

  return 500;
};

const getErrorMessage = (code: number): string => {
  switch (code) {
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal server error';
    case 403:
      return 'Forbidden';
    case 401:
      return 'Unauthorized';
    case 400:
      return 'Bad request';
    case 300:
      return 'Multiple choices';
    default:
      return 'Oops! Something went wrong.';
  }
};

const Error = ({ onReset, message = MESSAGE.DEFAULT }: ErrorProps) => {
  const code = getErrorCode();
  const errorMessage = getErrorMessage(code);

  return (
    <section className="min-h-screen flex justify-center">
      <div className="max-w-2xl p-5 flex flex-col items-center justify-center m-auto">
        <h1 className="text-3xl font-bold text-red-500 mb-4 text-center">
          {`Error ${code}: ${errorMessage}`}
        </h1>
        <p className="text-red-600 text-xl">{message}</p>

        {onReset ? (
          <button
            onClick={onReset}
            className="mt-4 inline-block px-4 py-2 bg-ratio-400 text-white rounded-md dark:border-blue-500 text-xl"
          >
            Reset
          </button>
        ) : (
          <Link
            href={ROUTERS.HOME}
            className="pt-5 text-ratio-400 text-xl hover:underline"
            aria-label="Go to Home Page"
          >
            Go to Home Page
          </Link>
        )}
      </div>
    </section>
  );
};

export default Error;
