import React from 'react'

export default function SetPassword() {
  return (
    <div>
        <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[44px] text-center'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center'>Create a new password for your account</p>

        
                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="New Password"
                            register={register}
                            error={errors.password}
                            required="Password is required"
                        />
        
                        <Input
                            label="Confirm new Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            register={register}
                            error={errors.confirmPassword}
                            required="Please confirm your password"
                        />

                        
                        <Button type='submit' className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]' onClick={() => setOpenResetPassword(true)}>
                          send Reset Link
                        </Button>
                        <span className='font-montserrat cursor-pointer font-[400] text-[18px] leading-[28px]'>Back to log in</span>
    </div>
  )
}
