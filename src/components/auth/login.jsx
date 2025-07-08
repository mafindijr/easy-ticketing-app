import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Button } from "../button";
import UseModal from "../UseModal";
import GoogleIcon from "../../assets/svgs/google.svg";
import FacebookIcon from "../../assets/svgs/facebook.svg";
import TwitterIcon from "../../assets/svgs/twitter.svg";
import ResetPassword from './sign-up/reset-password/reset-password';
import { SignUp } from './sign-up/sign-up';


export const Login = () => {

    const [openResetPassword, setOpenResetPassword] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    const loginOptions = [
        { icon: GoogleIcon, label: "Continue with Google" },
        { icon: FacebookIcon, label: "Continue with Facebook" },
        { icon: TwitterIcon, label: "Continue with Twitter" },
    ];

    return (
        <>
       {!openResetPassword && (<div className="mt-6 h-[70vh] overflow-y-auto px-2 hide-scrollbar">
            <h1 className="text-[#004E98] font-bold text-3xl text-center font-poppins">
                EasyTicket
            </h1>
            <h1 className="text-black text-[56px] text-center mt-6  font-bold font-montserrat">
                Log in
            </h1>
            <p className="text-black text-base font-montserrat text-center mt-2">
                Don’t have an account yet?{" "}
                <Button className="font-bold" onClick={() => setOpenSignUp(true)}>Sign up</Button>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Address"
                    register={register}
                    error={errors.email}
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    error={errors.password}
                    required="Password is required"
                />

                <Button className="text-[#4B5563] text-xs font-montserrat" onClick={() => setOpenResetPassword(true)}>
                    Forgot Password?
                </Button>
                <Button type="submit" className="w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]">
                    Log in
                </Button>

                <div className="flex items-center my-4">
                    <div className="border border-[#CCCCCC] w-full" />
                    <p className="text-[#CCCCCC] text-[18px] px-4">Or</p>
                    <div className="border border-[#CCCCCC] w-full" />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {loginOptions.map((option, index) => (
                        <Button
                            key={index}
                            className="py-4 px-8 w-full border border-[#CCCCCC] rounded-[8px] font-poppins font-bold flex items-center gap-30"
                        >
                            <img
                                src={option.icon}
                                alt={option.label}
                                className="w-6 h-6"
                            />
                            {option.label}
                        </Button>
                    ))}
                </div>
            </form>
        </div>)}

        <UseModal isOpen={openResetPassword} onClose={() => setOpenResetPassword(false)}>
                <ResetPassword />
        </UseModal>
        <UseModal isOpen={openSignUp} onClose={() => setOpenSignUp(false)}>
            <SignUp />
        </UseModal>
        </>
    );
};
