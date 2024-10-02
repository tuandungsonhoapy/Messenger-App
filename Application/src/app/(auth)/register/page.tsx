import { RegisterForm } from '@/app/(auth)/register/register-form'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Account Register</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </div>
  )
}

export default Page
