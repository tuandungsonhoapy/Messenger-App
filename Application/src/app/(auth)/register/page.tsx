'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: ''
  })

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setRegisterForm({
        ...registerForm,
        dob: date.toISOString()
      })
    }
  }

  return (
    <div className="flex justify-center h-100vh h-screen items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Account Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="username">
                  Username
                </Label>
                <Input
                  value={registerForm.username}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      username: e.target.value
                    })
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
                  value={registerForm.password}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value
                    })
                  }
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  value={registerForm.firstName}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      firstName: e.target.value
                    })
                  }
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  value={registerForm.lastName}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      lastName: e.target.value
                    })
                  }
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="font-semibold" htmlFor="lastName">
                  Date of Birth
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/register">
            <Button variant="outline">Back to Login</Button>
          </Link>
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RegisterPage
