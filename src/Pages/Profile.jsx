import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Plus } from "lucide-react";
import { MapPin } from "lucide-react";

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div className="mt-14">

            <div className="w-[600px]"> 
                <h1 className="font-montserrat font-[700] text-[56px] leading-[68px] mb-2">Personal Information</h1>
                <p className="font-montserrat text-[18px] font-[400] mb-2 leading-[28px]">Update your details to stay connected and book events seamlessly</p>
            </div>
        <main className="grid grid-cols-2">

          <div>
            
            <form>

               <div className="grid grid-cols-2 gap-6">
                <div>
                  <Input
                      label="First name"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      register={register}
                      error={errors.firstName}
                      required
                  />
                </div>
                <div>
                  <Input
                      label="Last name"
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      register={register}
                      error={errors.lastName}
                      required
                  />
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
                    required
                />
                </div>
                  <div>
                    <Input
                        label="Phone Number"
                        name="phone number"
                        type="text"
                        placeholder="Enter your phone number"
                        register={register}
                        error={errors.email}
                        required
                    />
                 </div>
                 <div> 
                  <Input
                        label="Location"
                        name="location"
                        type="text"
                        placeholder="Enter your location"
                        register={register}
                        error={errors.location}
                        required
                        prefixIcon={MapPin}
                    />
                  </div>
                  <span className="text-[#4B5563] font-montserrat font-[400] text-[12px] leading-[16px]">Help us recommend neary events</span>
              </div>
              <div>
              <button className="w-[300px] h-[60px] mt-4 font-montserrat leading-[28px] font-[400] inline-flex justify-center items-center gap-1 text-[20px] cursor-pointer">
                <span><Plus size={30}/></span> Add payment method
              </button>
              </div>
              <Button type="submit" onClick={handleSubmit} className="w-[183px] h-[50px] mt-6 font-poppins font-bold bg-blue-600 hover:bg-homeexplohover text-white py-2 rounded-[8px]">
                    Save Changes
                </Button>
            </form>
            </div>
            <div>
              <form>
                <Input 
                 label="Current Password*"
                 name="password"
                 type="text"
                 placeholder="Current Password"
                 register={register}
                 error={errors.password}
                 required
                //  prefixIcon={}
                />

                <Input 
                 label="New Password*"
                 name="newPassword"
                 type="text"
                 placeholder="New Password"
                 register={register}
                 error={errors.newPassword}
                 required
                //  prefixIcon={}
                />

                <Input 
                 label="Confirm Password*"
                 name="confirmPassword"
                 type="text"
                 placeholder="Confirm Password"
                 register={register}
                 error={errors.confirmPassword}
                 required
                //  prefixIcon={}
                />
              </form>
            </div>
        </main>
    </div>
  )
}
