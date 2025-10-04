'use client';
import countryList from "react-select-country-list";
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { Button } from '@/components/ui/button';
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SignUp = () => {
  const pathname = usePathname()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology'
    },
    mode: 'onBlur'
  })
  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const options = useMemo(() => countryList().getData(), [])

  return (
    <>
      <h1 className='form-title'>Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <InputField
          name='fullName'
          label='Full Name'
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: 'Full Name is required', minLength: 2 }}
        />

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

        <CountrySelectField
          name='country'
          label='Country'
          control={control}
          error={errors.country}
          required
        />

        <SelectField
          name='investmentGoals'
          label='Investment Goals'
          placeholder='Select your investment goal'
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name='riskTolerance'
          label='Risk Tolerance'
          placeholder='Select your risk level'
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name='preferredIndustry'
          label='Preffered Industry'
          placeholder='Select your preferred industry'
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}
        </Button>

        <div className="text-center pt-2">
          <p className="text-sm text-gray-500">
            Already have an account? {` `}
            <Link href={pathname === '/sign-in' ? '/sign-up' : '/sign-in'} className="footer-link">
              {' '}{pathname === '/sign-in' ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default SignUp
