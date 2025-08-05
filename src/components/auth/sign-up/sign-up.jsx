import { useForm } from "react-hook-form";
import { Input } from "../../input";
import { Button } from "../../button";
import { useState, useEffect } from "react";
import { User, Mail, Lock, MapPin } from "lucide-react";

export const SignUp = ({ onSuccess, onOpenSignUp }) => {
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Reset form when modal is opened
    useEffect(() => {
        reset();
    }, [reset]);
    
    // Watch password for confirmation validation
    const password = watch("password", "");

    const onSubmit = async data => {
        setIsSubmitting(true);
        try {
            console.log(data);
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 800));
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-6 h-[70vh] overflow-y-auto px-2 hide-scrollbar">
            <h1 className="text-[32px] text-black font-bold text-center font-montserrat mb-4 hover:scale-105 transition-transform duration-300">
                Sign up with email
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-6">
                    <Input
                    label="First name"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    register={register}
                    error={errors.firstName}
                    className={`form-input ${errors.firstName ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="First name is required"
                    prefixIcon={User}
                />

                    <Input
                    label="Last name"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    register={register}
                    error={errors.lastName}
                    className={`form-input ${errors.lastName ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Last name is required"
                    prefixIcon={User}
                />
                </div>

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

                <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
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
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    register={register}
                    error={errors.confirmPassword}
                    className={`form-input ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Please confirm your password"
                    prefixIcon={Lock}
                    validation={{
                        validate: value => value === password || "Passwords do not match"
                    }}
                />

                <Input
                    label="Location"
                    name="location"
                    type="text"
                    placeholder="Enter your location"
                    register={register}
                    error={errors.location}
                    className={`form-input ${errors.location ? "border-red-500 focus:ring-red-500" : ""}`}
                    required="Location is required"
                    prefixIcon={MapPin}
                />
                <span className="text-[#4B5563] text-xs font-montserrat">We’ll use your location to show Meetup events near you.</span>
                <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-4 text-center">
                        By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </p>
                    <Button 
                        type="submit" 
                        className="w-full mt-2 font-poppins h-[50px] font-bold bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-[8px] transition-colors duration-300"
                        style={{boxShadow: "0px 6px 6px rgba(2, 2, 2, 0.15)"}}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        aria-label="Sign Up"
                    >
                        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                    </Button>
                    
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Button 
                                type="button" 
                                className="text-blue-600 hover:underline font-semibold"
                                onClick={onOpenSignUp}
                                aria-label="Log in"
                            >
                                Log in
                            </Button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};
