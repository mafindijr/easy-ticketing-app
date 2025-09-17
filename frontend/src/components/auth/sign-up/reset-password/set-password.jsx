import { useForm } from "react-hook-form";
import { Input } from "../../../input";
import { Button } from "../../../button";
import { useState, useEffect } from "react";
import { Lock, ArrowLeft, CheckCircle } from "lucide-react";

export default function SetPassword({ onClose }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    
    // Reset form when modal is opened
    useEffect(() => {
        reset();
        setPasswordUpdated(false);
    }, [reset]);
    
    // Watch password for confirmation validation
    const password = watch("password", "");
    
    const onSubmit = async data => {
        setIsSubmitting(true);
        try {
            console.log(data);
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 800));
            setPasswordUpdated(true);
        } catch (error) {
            console.error('Password update error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <div className="mt-4 h-[70vh] overflow-y-auto px-2 hide-scrollbar">
        <h2 className='font-montserrat font-bold text-[32px] leading-[44px] text-center hover:scale-105 transition-transform duration-300'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center mt-2'>Create a new password for your account</p>
        
        {!passwordUpdated ? (
            <form onSubmit={handleSubmit(onSubmit)}>

        
                <Input
                    label="New Password"
                    name="password"
                    type="password"
                    placeholder="Create a new password"
                    register={register}
                    error={errors.password}
                    className={`form-input ${errors.password ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Password is required"
                    prefixIcon={Lock}
                    validation={{
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    }}
                />
        
                <Input
                    label="Confirm new Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your new password"
                    register={register}
                    error={errors.confirmPassword}
                    className={`form-input ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Please confirm your password"
                    prefixIcon={Lock}
                    validation={{
                        validate: value => value === password || "Passwords do not match"
                    }}
                />
                
                <p className="text-xs text-gray-500 mt-2 mb-4">
                    Your password must be at least 8 characters long and include a mix of letters, numbers, and special characters for better security.
                </p>

                        
                <Button 
                    type="submit" 
                    className="w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[8px] transition-colors duration-300"
                    style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    aria-label="Update Password"
                >
                    {isSubmitting ? 'Updating...' : 'Update Password'}
                </Button>
                <Button 
                    className="w-full mt-4 font-poppins h-[50px] font-bold bg-white text-blue-600 py-2 rounded-[8px] border border-blue-600 hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                    onClick={onClose}
                    aria-label="Back to Log In"
                >
                    <ArrowLeft size={16} />
                    Back to Log In
                </Button>
            </form>
            ) : (
                <div className="text-center p-4">
                    <div className="flex justify-center mb-4">
                        <CheckCircle size={64} className="text-green-500" />
                    </div>
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                        <h5 className="font-bold mb-2">Password Updated Successfully!</h5>
                        <p>Your password has been updated. You can now log in with your new password.</p>
                    </div>
                    <Button 
                        className="w-full mt-4 font-poppins h-[50px] font-bold bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[8px] transition-colors duration-300"
                        onClick={onClose}
                        aria-label="Back to Log In"
                    >
                        Back to Log In
                    </Button>
                </div>
            )}
    </div>
  )
}
