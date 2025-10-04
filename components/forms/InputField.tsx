import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

const InputField = ({ name, label, placeholder, type = 'text', register, error, validation, disabled, value }: FormInputProps) => {
  return (
    <div className='space-y-1'>
      <Label htmlFor={name} className='form-label'>
        {label}
      </Label>
      <Input type={type} value={value} id={name} disabled={disabled} placeholder={placeholder} className={cn('form-input', {'opacity-50 cursor-not-allowed': disabled} )} {...register(name, validation)} />
      {error && <p className='text-red-500 text-sm'>{error.message}</p>}
    </div>
  )
}

export default InputField
