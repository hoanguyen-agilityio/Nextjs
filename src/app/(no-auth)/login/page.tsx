import { LogoWithoutText } from '@/icons';
import { FormLogin } from '@/ui';

export const metadata = {
  title: 'Login',
  description:
    'Access your account by logging in with your username and password. Secure and quick authentication for a seamless experience.',
};

const LoginPage = () => {
  return (
    <section className="flex items-center justify-around content-center min-h-screen">
      <div className="flex flex-col items-center">
        <LogoWithoutText width="163px" height="103px" />
        <h1 className="text-white dark:text-black-900 font-semibold text-[62px]">
          Welcome to WunderUI
        </h1>
        <span className="text-white dark:text-black-900 font-normal text-[26px]">
          Sign In now to discover the full experience
        </span>
      </div>
      <FormLogin />
    </section>
  );
};

export default LoginPage;
