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
                        <span className='font-montserrat cursor-pointer text-[#6B7280] font-[400] text-xs'>Password must be atleast 8 characters</span>
        
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
                        <Button
                            className="py-2 px-8 mt-6 w-full border border-[#CCCCCC] rounded-[8px] font-montserrat font-bold text-[16px] text-[700] text-center gap-30"
                            style={{boxShadow: "0px 0px 2px 3px rgba(2, 2, 2, 0.15)"}}
                        >
                            Back to Log In
                        </Button>
                        
    </div>
  )
}
