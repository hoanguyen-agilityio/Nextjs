import { MESSAGE, REGEX } from '@/constants';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: MESSAGE.NAME_REQUIRED })
    .max(30, { message: MESSAGE.MAX_NAME }),
  status: z.string().max(100, { message: MESSAGE.MAX_STATUS }).optional(),
  total: z
    .string()
    .min(1, { message: MESSAGE.PRICE_REQUIRED })
    .max(10, { message: MESSAGE.MAX_TOTAL })
    .regex(REGEX.NUMBER, { message: MESSAGE.VALID_NUMBER }),
  views: z
    .string()
    .max(10, { message: MESSAGE.MAX_VIEW })
    .refine((val) => val === '' || REGEX.NUMBER.test(val), {
      message: MESSAGE.VALID_NUMBER,
    })
    .optional(),
  sales: z
    .string()
    .max(10, { message: MESSAGE.MAX_SALES })
    .refine((val) => val === '' || REGEX.NUMBER.test(val), {
      message: MESSAGE.VALID_NUMBER,
    })
    .optional(),
  conversion: z
    .string()
    .max(5, { message: MESSAGE.MAX_CONVERSION })
    .refine((val) => val === '' || REGEX.PERCENT.test(val), {
      message: MESSAGE.VALID_PERCENT,
    })
    .optional(),
  download: z.string().optional(),
  link: z.string().optional(),
  personal: z.string().optional(),
  img: z.array(z.string()).optional(),
  file: z.array(z.any()).optional(),
});

const formLoginSchema = z.object({
  username: z
    .string()
    .min(1, { message: MESSAGE.USERNAME_REQUIRED })
    .regex(REGEX.USERNAME, { message: MESSAGE.INVALID_USERNAME }),
  password: z
    .string()
    .min(1, { message: MESSAGE.PASSWORD_REQUIRED })
    .regex(REGEX.PASSWORD, { message: MESSAGE.INVALID_PASSWORD }),
});

export { formSchema, formLoginSchema };
