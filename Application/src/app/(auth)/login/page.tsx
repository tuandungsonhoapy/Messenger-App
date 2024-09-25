'use client'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  return (
    <div className="flex justify-center h-100vh h-screen items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Account Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="username">
                  Username
                </Label>
                <Input
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="framework">
                  Password
                </Label>
                <Input
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/register">
            <Button variant="outline">Register</Button>
          </Link>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
