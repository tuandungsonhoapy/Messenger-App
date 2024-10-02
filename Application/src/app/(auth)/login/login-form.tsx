'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginFormSchema, LoginFormType } from '@/validationSchemas/auth.schema'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import envConfiguration from '../../../../envConfiguration'
import { CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export function LoginForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter()
  // * 1. Define your form.
  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  // * 2. Define a submit handler.
  async function onSubmit(values: LoginFormType) {
    const response = await fetch(
      `${envConfiguration.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values)
      }
    ).then((res) => res.json())

    if (response.code === 1000) {
      if (response.result.authenticated) toast.success(response.message)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 max-w-[400px] flex-shrink-0 w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CardFooter className="flex justify-between p-0 !mt-5">
          <Link href="/register">
            <Button variant="outline">Register</Button>
          </Link>
          <Button>Login</Button>
        </CardFooter>
      </form>
    </Form>
  )
}
