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
            <div className='w-200'>
                <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[36px]'>Reset Your Password</h2>
                <p>set new password to continue</p>
                <Input 
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Address"
                      register={register}
                      error={errors.email}
                      required
                />

                <Button type='submit' className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]' onClick={() => setOpenResetPassword(true)}>
                  Reset Password
                </Button>

            </div>
          )}

          <UseModal isOpen={openResetPassword} onClose={() => setOpenResetPassword(false)}>
            <SetPassword />
          </UseModal>
        </>
    );
};