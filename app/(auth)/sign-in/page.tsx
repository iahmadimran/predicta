'use client';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form'
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignIn = () => {
  const pathname = usePathname()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  })
  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1 className='form-title'>Log In to Your Account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <InputField
          name='email'
          label='Email'
          placeholder="john@example.com"
          register={register}
          error={errors.email}
          validation={{ required: 'Email is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email Address is required' }}
        />

        <InputField
          name='password'
          label='Password'
          placeholder="Enter a strong password"
          type='password'
          register={register}
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 8 }}
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Logging In' : 'Log In'}
        </Button>

        <div className="text-center pt-2">
          <p className="text-sm text-gray-500">
            {pathname === '/sign-in' ? "Don't have an account?" : "Already have an account?"}{` `}
            
            <Link href={pathname === '/sign-in' ? '/sign-up' : '/sign-in'} className="footer-link">
              {' '}{pathname === '/sign-in' ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default SignIn

