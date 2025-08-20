import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import ProfileUploader from "../components/test-profile";

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log("Form Submitted with: ", data);
    };

  return (
    <div className=" my-20 mx-30">

            <div className="w-[600px]"> 
                <h2 className="font-montserrat font-[700] text-[32px] leading-[44px] mb-4">My Profile</h2>
            </div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <main className="grid grid-cols-2 gap-8">


          <div>
            <h4 className="text-[20px] leading-[30px] font-montserrat font-bold ">Personal Information</h4>
            <div className="border-[#cccccc] border-1 rounded-[8px] p-[32px]">
              <ProfileUploader />
               <div className="grid grid-cols-2 gap-6">
                <div>
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
                  {errors.firstName && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Please enter your first name</span> }
                </div>
                <div>
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
                  {errors.lastName && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Please enter your last name</span> }
                  </div>
              </div>
              <div>
                <div>
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
                {errors.email && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Please enter a valid email address</span> }
                </div>
                  <div>
                    <Input
                        label="Phone Number"
                        name="phoneNumber"
                        type="text"
                        placeholder="Enter your phone number"
                        register={register}
                        error={errors.phoneNumber}
                        className={`form-input ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : ""}`}
                        required
                    />

                    {errors.phoneNumber && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Please enter a valid phone number</span> }  
                 </div>
              </div>
            </div>
              <Button type="submit" className="w-[183px] h-[50px] mt-6 font-poppins font-bold bg-blue-600 hover:bg-homeexplohover text-white py-2 rounded-[8px]">
                    Save Changes
              </Button>
            </div>

            <div>
              <h4 className="text-[20px] leading-[30px] font-montserrat font-bold ">Password Update</h4>
              <div className="border-[#cccccc] border-1 rounded-[8px] p-[32px]">
                <div>
                <Input 
                 label="Current Password*"
                 name="password"
                 type="text"
                 placeholder="Current Password"
                 register={register}
                 error={errors.password}
                 className={`form-input ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : ""}`}
                 required
                //  prefixIcon={}
                />

                {errors.password && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Please enter your current password to update your password</span> }
               </div>
               
               <div>
                <Input 
                 label="New Password*"
                 name="newPassword"
                 type="text"
                 placeholder="New Password"
                 register={register}
                 error={errors.newPassword}
                 className={`form-input ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : ""}`}
                 required
                //  prefixIcon={}
                />

                {errors.newPassword && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">New password must be at least 8 characters</span> }
               </div>
               
               <div>
                <Input 
                 label="Confirm Password*"
                 name="confirmPassword"
                 type="text"
                 placeholder="Confirm Password"
                 register={register}
                 error={errors.confirmPassword}
                 className={`form-input ${errors.phoneNumber ? "border-red-500 focus:ring-red-500" : ""}`}
                 required
                //  prefixIcon={}
                />

                {errors.confirmPassword && <span className="text-[12px] leading-[16px] text-[#d32f2f] font-montserrat font-[400]">Passwords do not match</span> }
               </div>
              </div>
            </div>
        </main>
       </form>
    </div>
  )
}
