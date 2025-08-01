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


export const Login = ({ onSuccess }) => {

    const [openResetPassword, setOpenResetPassword] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        if (onSuccess) onSuccess();
    };

    const loginOptions = [
        { icon: GoogleIcon, label: "Continue with Google" },
        { icon: FacebookIcon, label: "Continue with Facebook" },
        { icon: TwitterIcon, label: "Continue with Twitter" },
    ];

    return (
        <>
       {!openResetPassword && (<div className="mt-6 h-[70vh] overflow-y-auto px-2 hide-scrollbar">
            <div className="text-center flex items-center justify-center mb-4">
                <h1 className="flex items-center font-pacifico leading-normal font-[400] text-[32px] text-addeventbtn font-bold">
                    EasyTickets
                    <span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center pt-2">
                    <path d="M20 6.66675V9.33341M20 14.6667V17.3334M20 22.6667V25.3334M6.66667 6.66675H25.3333C26.0406 6.66675 26.7189 6.9477 27.219 7.4478C27.719 7.94789 28 8.62617 28 9.33341V13.3334C27.2928 13.3334 26.6145 13.6144 26.1144 14.1145C25.6143 14.6146 25.3333 15.2928 25.3333 16.0001C25.3333 16.7073 25.6143 17.3856 26.1144 17.8857C26.6145 18.3858 27.2928 18.6667 28 18.6667V22.6667C28 23.374 27.719 24.0523 27.219 24.5524C26.7189 25.0525 26.0406 25.3334 25.3333 25.3334H6.66667C5.95942 25.3334 5.28115 25.0525 4.78105 24.5524C4.28095 24.0523 4 23.374 4 22.6667V18.6667C4.70724 18.6667 5.38552 18.3858 5.88562 17.8857C6.38572 17.3856 6.66667 16.7073 6.66667 16.0001C6.66667 15.2928 6.38572 14.6146 5.88562 14.1145C5.38552 13.6144 4.70724 13.3334 4 13.3334V9.33341C4 8.62617 4.28095 7.94789 4.78105 7.4478C5.28115 6.9477 5.95942 6.66675 6.66667 6.66675Z" stroke="#FF6700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                </h1>
            </div>
            <h4 className="text-black text-[20px] font-[700] text-center font-bold leading-[32px] font-montserrat">
                        Log In
            </h4>
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
                    className={`form-input ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    error={errors.password}
                    className={`form-input ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Password is required"
                />

                <Button className="text-[#4B5563] text-xs font-montserrat" onClick={() => setOpenResetPassword(true)}>
                    Forgot Password?
                </Button>
                <Button type="submit" className="w-full mt-6 font-poppins h-[50px] font-bold bg-blue-600 text-white py-2 rounded-[8px]"
                style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}
                >
                    Log in
                </Button>

                <div className="flex items-center my-4">
                    <div className="border border-[#CCCCCC] w-full" />
                    <p className="text-[#CCCCCC] text-[18px] px-4">OR</p>
                    <div className="border border-[#CCCCCC] w-full" />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {loginOptions.map((option, index) => (
                        <Button
                            key={index}
                            className="py-4 px-8 w-full border border-[#CCCCCC] rounded-[8px] font-poppins font-bold flex items-center gap-30"
                            style={{boxShadow: "0px 0px 2px 3px rgba(2, 2, 2, 0.15)"}}
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
