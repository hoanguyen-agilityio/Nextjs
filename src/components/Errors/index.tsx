'use client';

// Third party
import Link from 'next/link';

// Constants
import { MESSAGE, ROUTERS } from '@/constants';

// Utils
import { getErrorCode, getErrorMessage } from '@/utils';

type ErrorProps = {
  onReset?: () => void;
  message?: string;
  className?: string;
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
