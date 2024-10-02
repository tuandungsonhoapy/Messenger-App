import z from 'zod'

const minimumAgeDate = new Date()
minimumAgeDate.setFullYear(minimumAgeDate.getFullYear() - 16)

export const registerFormSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, {
        message: 'Username must be at least 3 characters!'
      })
      .max(255),
    password: z
      .string()
      .trim()
      .min(6, {
        message: 'Password must be at least 6 characters!'
      })
      .max(255),
    confirmPassword: z
      .string()
      .trim()
      .min(6, {
        message: 'Confirm password must be at least 6 characters!'
      })
      .max(255),
    firstName: z
      .string()
      .trim()
      .min(1, {
        message: 'First name field is require!'
      })
      .max(255),
    lastName: z
      .string()
      .trim()
      .min(1, {
        message: 'Last name field is require!'
      })
      .max(255),
    dob: z.date().refine((date) => date <= minimumAgeDate, {
      message: 'User must be at least 16 ages!'
    })
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Password and confirm password must be match!',
        path: ['confirmPassword']
      })
    }
  })

export type RegisterFormType = z.TypeOf<typeof registerFormSchema>

export const RegisterRes = z.object({
  result: z.object({
    id: z.string(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    dob: z.string(),
    role: z.object({
      name: z.string(),
      description: z.string(),
      permissions: z.array(
        z.object({ name: z.string(), description: z.string() })
      )
    })
  }),
  message: z.string(),
  code: z.number()
})

export type RegisterResType = z.TypeOf<typeof RegisterRes>

export const LoginFormSchema = z
  .object({
    username: z.string().min(3),
    password: z.string().min(6).max(255)
  })
  .strict()

export type LoginFormType = z.TypeOf<typeof LoginFormSchema>

export const LoginRes = RegisterRes

export type LoginResType = z.TypeOf<typeof LoginRes>
export const SlideSessionBody = z.object({}).strict()

export type SlideSessionBodyType = z.TypeOf<typeof SlideSessionBody>
export const SlideSessionRes = RegisterRes

export type SlideSessionResType = z.TypeOf<typeof SlideSessionRes>
