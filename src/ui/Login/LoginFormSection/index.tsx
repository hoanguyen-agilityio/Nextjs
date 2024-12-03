'use server';
// Third party
import { handleSignIn } from '@/actions';

// Components
import FormLogin from '../FormLogin';
import { LogoWithoutText } from '@/icons';

const LoginFormSection = () => (
  <section className="flex items-center justify-around content-center min-h-screen p-4">
    <div className="flex flex-col items-center max-[1200px]:hidden">
      <LogoWithoutText width="163px" height="103px" />
      <h1 className="text-white dark:text-black-900 text-[62px] text-center">
        Welcome to WunderUI
      </h1>
      <span className="text-white dark:text-black-900 font-normal text-[26px] text-center">
        Sign In now to discover the full experience
      </span>
    </div>
    <FormLogin onSignIn={handleSignIn} />
  </section>
);

export default LoginFormSection;
