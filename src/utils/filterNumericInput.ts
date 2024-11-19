import { REGEX } from '@/constants';

export const filterNumericInput = (e: React.FormEvent<HTMLInputElement>) => {
  const input = e.currentTarget;
  const regex = REGEX.NUMERIC_INPUT;
  input.value = input.value
    .split('')
    .filter((char) => regex.test(char))
    .join('');
};
