'use client';

// Third party
import clsx from 'clsx';
import Link from 'next/link';
import { Card } from '@nextui-org/react';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

// Constants
import { MESSAGE, REGEX, ROUTERS } from '@/constants';

// Models
import { Account } from '@/types';

// Components
import { ButtonCustom, CheckboxCustom, InputField } from '@/components';
import {
  AppleIcon,
  BackIcon,
  EyeFilledIcon,
  EyeSlashFilledIcon,
  GoogleIcon,
  LockIcon,
} from '@/icons';

interface FormLoginProps {
  onSignIn: (payload: Account) => Promise<
    | {
        success: boolean;
        error?: undefined;
      }
    | {
        error: string;
        success?: undefined;
      }
  >;
}

const FormLogin = ({ onSignIn }: FormLoginProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState('');
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async ({ username, password }: Account) => {
    startTransition(async () => {
      // Start the sign-in process
      const result = await onSignIn({ username, password });

      // Check if sign-in was successful
      if (result.error) {
        setError(result.error);
      } else {
        // If successful, show success toast and redirect to the homepage
        toast.success(MESSAGE.LOGIN_SUCCESSFULLY);
        router.push(ROUTERS.HOME);
      }
    });
  };

  return (
    <Card className="flex-row justify-end min-w-3xl pt-6 pr-3xl pl-[52px] pb-10 gap-9 w-4xl max-[1200px]:flex-col-reverse">
      <form
        className="w-[528px] max-[1200px]:w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="font-bold text-4xl">Sign In</span>
        {!Object.keys(errors).length && error && (
          <p className="text-red-600 text-sm font-normal">{error}</p>
        )}
        <Controller
          name="username"
          control={control}
          rules={{
            required: MESSAGE.USERNAME_REQUIRED,
            pattern: {
              value: REGEX.USERNAME,
              message: MESSAGE.INVALID_USERNAME,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              type="text"
              placeholder="user0123456"
              label="Username"
              className="mt-2"
              size="xl"
              color="secondary"
              classWrapper="mt-11"
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              fieldId="username"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: MESSAGE.PASSWORD_REQUIRED,
            pattern: {
              value: REGEX.PASSWORD,
              message: MESSAGE.INVALID_PASSWORD,
            },
          }}
          render={({ field, fieldState }) => (
            <InputField
              {...field}
              label="Password"
              className="w-full"
              color="secondary"
              size="xl"
              classWrapper="mt-10"
              startContent={<LockIcon width="22px" height="22px" />}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon
                      width="1em"
                      height="1em"
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  ) : (
                    <EyeFilledIcon
                      width="1em"
                      height="1em"
                      className="text-2xl text-default-400 pointer-events-none"
                    />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              errorMsg={fieldState.error ? fieldState.error.message : undefined}
              fieldId="password"
            />
          )}
        />
        <CheckboxCustom size="default" className="mt-3xl">
          Remember me
        </CheckboxCustom>
        <ButtonCustom
          color="dark"
          radius="sm"
          className={clsx(
            'py-4 w-full text-base font-semibold h-[52px] mt-5xl',
            { 'opacity-50 cursor-not-allowed': isPending },
          )}
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'Logging in...' : 'Log In to your account'}
        </ButtonCustom>
        <div className="flex justify-between items-center gap-3 mt-l">
          <div className="w-full h-0 border border-gray-50 dark:border-gray-700 inline-block"></div>
          <p className="font-normal text-xsm text-ratio-200 dark:text-grayBlue-400">
            or
          </p>
          <div className="w-full h-0 border border-gray-50 dark:border-gray-700 inline-block"></div>
        </div>
        <ButtonCustom
          color="bright"
          radius="sm"
          className="py-4 w-full text-base font-semibold h-[52px] mt-l cursor-not-allowed"
          startContent={<GoogleIcon width="26px" height="26px" />}
        >
          Continue with Google
        </ButtonCustom>
        <ButtonCustom
          color="bright"
          radius="sm"
          className="py-4 w-full text-base font-semibold h-[52px] mt-3xl cursor-not-allowed"
          startContent={<AppleIcon width="26px" height="26px" />}
        >
          Login with AppleID
        </ButtonCustom>
        <p className="font-normal text-xsm text-ratio-200 dark:text-grayBlue-400 text-center mt-3xl">
          Forgot password?{' '}
          <Link
            href={ROUTERS.EMPTY}
            className="font-semibold text-black-900 dark:text-white"
          >
            Recover my password
          </Link>
        </p>
      </form>
      <Link href={ROUTERS.HOME} className="h-10 flex max-[1200px]:justify-end">
        <ButtonCustom
          startContent={<BackIcon width="7px" height="18px" />}
          color="default"
          radius="sm"
          size="xs"
          className="gap-5"
        >
          Back
        </ButtonCustom>
      </Link>
    </Card>
  );
};

export default FormLogin;
