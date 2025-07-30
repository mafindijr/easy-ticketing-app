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
                <h4 className='font-montserrat font-[700] font-bold text-[20px] leading-[30px] text-center mb-2'>Reset Your Password</h4>
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

                <Button type='submit' 
                className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]' 
                onClick={() => setOpenResetPassword(true)}
                style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}
                >
                  send Reset Link
                </Button>
                 <Button
                      className="py-2 px-8 mt-6 w-full border border-[#CCCCCC] rounded-[8px] font-poppins font-bold text-[16px] text-center gap-30"
                      style={{boxShadow: "0px 0px 2px 3px rgba(2, 2, 2, 0.15)"}}
                  >
                      Back to Log In
                  </Button>

            </div>
          )}

          <UseModal isOpen={openResetPassword} onClose={() => setOpenResetPassword(false)}>
            <SetPassword />
          </UseModal>
        </>
    );
};