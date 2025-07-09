import { Input } from "../../../input";
import { Button } from "../../../button";
import { useForm } from "react-hook-form";

export default function SetPassword() {

        const { register, handeSubmit, formState: { errors }} = useForm();

  return (
    <div>
        <h2 className='font-montserrat font-[700] font-bold text-[32px] leading-[44px] text-center'>Set New Password</h2>
        <p className='font-montserrat font-[400] text-[18px] leading-[28px] text-center'>Create a new password for your account</p>

        
                        <Input
                            label="New Password"
                            name="password"
                            type="password"
                            placeholder="New Password"
                            register={register}
                            error={errors.password}
                            required="Password is required"
                        />
                        <span className='font-montserrat cursor-pointer font-[400] text-[18px] leading-[28px]'>Password must be atleast 8 characters</span>
        
                        <Input
                            label="Confirm new Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            register={register}
                            error={errors.confirmPassword}
                            required="Please confirm your password"
                        />

                        
                        <Button type='submit' className='w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]'>
                          Update Password
                        </Button>
                        <span className='font-montserrat cursor-pointer font-[400] text-[18px] leading-[28px]'>Back to log in</span>
    </div>
  )
}
