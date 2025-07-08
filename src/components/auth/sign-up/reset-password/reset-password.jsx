import { useState } from 'react'
import UseModal from '../../../UseModal';
import { Input } from '../../../input';
import { Button } from '../../../button';
import { useForm } from 'react-hook-form';
import SetPassword from './set-password';

export default function ResetPassword() {

        const { register, handleSubmit, formState: { errors } } = useForm();
        const [openResetPassword, setOpenResetPassword] = useState(false);

    return (
        <>
          {!openResetPassword && (
            <div>
                <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[44px] text-center'>Reset Your Password</h2>
                <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center'>Enter your email to receive a reset link</p>
                <Input 
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      register={register}
                      error={errors.email}
                      required
                />

                <Button type='submit' className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]' onClick={() => setOpenResetPassword(true)}>
                  send Reset Link
                </Button>
                <span className='font-montserrat cursor-pointer font-[400] text-[18px] leading-[28px]'>Back to log in</span>

            </div>
          )}

          <UseModal isOpen={openResetPassword} onClose={() => setOpenResetPassword(false)}>
            <SetPassword />
          </UseModal>
        </>
    );
};