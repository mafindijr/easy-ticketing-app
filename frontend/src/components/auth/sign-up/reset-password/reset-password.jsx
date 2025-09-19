import { useState, useEffect } from 'react';
import UseModal from '../../../UseModal';
import { Input } from '../../../input';
import { Button } from '../../../button';
import { useForm } from 'react-hook-form';
import SetPassword from './set-password';
import { Mail, ArrowLeft } from 'lucide-react';

export default function ResetPassword({ onClose }) {
        const { register, handleSubmit, formState: { errors }, reset } = useForm();
        const [openResetPassword, setOpenResetPassword] = useState(false);
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [emailSent, setEmailSent] = useState(false);
        
        // Reset form when component mounts
        useEffect(() => {
            reset();
            setEmailSent(false);
        }, [reset]);

    return (
        <form>
          {!openResetPassword && (
            <div>
                <h4 className='font-montserrat font-[700] text-[20px] leading-[30px] text-center mb-2 mt-2'>Reset Your Password</h4>
                <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mb-4'>Enter your email to receive a reset link</p>
                {emailSent && (
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                        <h5 className="font-bold mb-2">Reset Link Sent!</h5>
                        <p>We've sent a password reset link to your email address. Please check your inbox.</p>
                    </div>
                )}
                <Input 
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      register={register}
                      error={errors.email}
                      className={`form-input ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                      required="Email is required"
                      prefixIcon={Mail}
                      validation={{
                          pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                          }
                      }}
                />

                <Button 
                    type='submit' 
                    className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[8px] transition-colors duration-300' 
                    onClick={() => {
                        setIsSubmitting(true);
                        setTimeout(() => {
                            setEmailSent(true);
                            setOpenResetPassword(true);
                            setIsSubmitting(false);
                        }, 800);
                    }}
                    style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    aria-label="Send Reset Link"
                >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                </Button>
                 <Button
                      className="py-2 px-8 mt-4 w-full border border-blue-600 rounded-[8px] font-montserrat font-bold text-[700] text-[16px] text-white text-center hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                      style={{boxShadow: "0px 0px 2px 3px rgba(2, 2, 2, 0.15)"}}
                      onClick={onClose}
                      aria-label="Back to Log In"
                  >
                      <ArrowLeft size={16} />
                      Back to Log In
                  </Button>

            </div>
          )}

          <UseModal isOpen={openResetPassword} onClose={() => setOpenResetPassword(false)}>
            <SetPassword />
          </UseModal>
        </form>
    );
};