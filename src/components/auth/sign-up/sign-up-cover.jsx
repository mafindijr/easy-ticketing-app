import { useState } from "react";
import { Button } from "../../button";
import GoogleIcon from "../../../assets/svgs/google.svg";
import FacebookIcon from "../../../assets/svgs/facebook.svg";
import TwitterIcon from "../../../assets/svgs/twitter.svg";
import UseModal from "../../UseModal";
import { SignUp } from "./sign-up";

export const SignUpCover = () => {
    const signupOptions = [
        { icon: GoogleIcon, label: "Continue with Google" },
        { icon: FacebookIcon, label: "Continue with Facebook" },
        { icon: TwitterIcon, label: "Continue with Twitter" },
    ];

    const [openSignUp, setOpenSignUp] = useState(false);

    return (
        <>
            {!openSignUp && (
                <>
                    <h1 className="text-[#004E98] font-bold text-3xl text-center font-poppins">
                        EasyTicket
                    </h1>
                    <h1 className="text-black text-[56px] text-center font-bold font-montserrat">
                        Sign Up
                    </h1>

                    <Button
                        onClick={() => setOpenSignUp(true)}
                        className="py-4 px-8 w-full border border-[#CCCCCC] rounded-[8px] font-poppins font-bold mt-6"
                    >
                        Sign up with email button
                    </Button>

                    <div className="flex items-center my-4">
                        <div className="border border-[#CCCCCC] w-full" />
                        <p className="text-[#CCCCCC] text-[18px] px-4">Or</p>
                        <div className="border border-[#CCCCCC] w-full" />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        {signupOptions.map((option, index) => (
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

                    <p className="text-black text-base font-montserrat text-center mt-2">
                        By signing up, you agree to our{" "}
                        <span className="font-bold">Terms</span> &{" "}
                        <span className="font-bold">Privacy Policy</span>
                    </p>
                </>
            )}

            <UseModal isOpen={openSignUp} onClose={() => setOpenSignUp(false)}>
                <SignUp />
            </UseModal>
        </>
    );
};
