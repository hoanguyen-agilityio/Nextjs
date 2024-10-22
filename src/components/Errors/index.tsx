'use client';
import { MESSAGE, ROUTERS } from '@/constant';
import Link from 'next/link';

type ErrorProps = {
  onReset?: () => void;
  message?: string;
  className?: string;
};

const Error = ({ onReset, message = MESSAGE.DEFAULT }: ErrorProps) => {
  return (
    <div className="container max-w-lg bg-white p-8 flex flex-col items-center justify-center h-full m-auto">
      <h1 className="text-3xl font-bold text-red-500 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 text-xl">{message}</p>

      {onReset ? (
        <button
          onClick={onReset}
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xl"
        >
          Reset
        </button>
      ) : (
        <Link
          href={ROUTERS.HOME}
          className="pt-5 text-blue-400 text-xl hover:underline"
          aria-label="Go to Home Page"
        >
          Go to Home Page
        </Link>
      )}
    </div>
  );
};

export default Error;
