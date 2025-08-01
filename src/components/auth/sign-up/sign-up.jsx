import { useForm } from "react-hook-form";
import { Input } from "../../input";
import { Button } from "../../button";
import { MapPin } from "lucide-react";

export const SignUp = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        if (onSuccess) onSuccess();
    };

    return (
        <div className="mt-6 h-[70vh] overflow-y-auto px-2 hide-scrollbar">
            <h1 className="text-[32px] text-black font-bold text-center font-montserrat mb-4">
                Sign up with email
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-6">
                    <Input
                        label="First name"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        register={register}
                        error={errors.firstName}
                        className={`form-input ${errors.firstName ? "border-red-500 focus:ring-red-500" : ""}`}
                        required
                    />

                    <Input
                        label="Last name"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        register={register}
                        error={errors.lastName}
                        className={`form-input ${errors.lastName ? "border-red-500 focus:ring-red-500" : ""}`}
                        required
                    />
                </div>

                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                    className={`form-input ${errors.email ? "border-red-500 focus:ring-red-500" : ""}`}
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    register={register}
                    error={errors.password}
                    className={`form-input ${errors.password ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Password is required"
                />

                <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    register={register}
                    error={errors.confirmPassword}
                    className={`form-input ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Please confirm your password"
                />

                <Input
                    label="Location"
                    name="location"
                    type="text"
                    placeholder="Enter your location"
                    register={register}
                    error={errors.location}
                    className={`form-input ${errors.location ? "border-red-500 focus:ring-red-500" : ""}`}
                    required
                    prefixIcon={MapPin}
                />
                <span className="text-[#4B5563] text-xs font-montserrat">We’ll use your location to show Meetup events near you.</span>
                <Button type="submit" className="w-full mt-6 font-poppins font-bold bg-blue-600 text-white py-2 rounded-[8px]"
                style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}  
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};
