import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default montserrat;
