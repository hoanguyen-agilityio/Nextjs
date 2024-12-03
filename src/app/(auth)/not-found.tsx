import Link from 'next/link';
import { FaceFrownIcon } from '@/icons';

const NotFound = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <FaceFrownIcon width="60px" height="60px" />
      <h2 className="text-4xl">404 Not Found</h2>
      <p className="text-2xl">Could not find the requested invoice.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-400 text-2xl"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFound;
