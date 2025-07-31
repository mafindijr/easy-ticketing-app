import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Plus } from "lucide-react";
import { MapPin } from "lucide-react";
import ProfileNav from "./profile-nav";

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div className="relative">
      
      <ProfileNav />

      <div className="grid grid-cols-5 h-[100dvh] mt-12">
        <nav className="font-poppins p-10 font-[700] text-[16px] leading-[100%] bg-[#FAFAFA]">
             <ul className="inline-block">
              <li className="mb-6"><a href="#" className="font-bold">Personal info</a></li>
              <li className="mb-6"><a href="#" className="font-bold">Tickets</a></li>
              <li className="mb-6"><a href="#" className="font-bold">Notifications</a></li>
              <li className="mb-6"><a href="#" className="font-bold">Settings</a></li>
             </ul>
        </nav>
        <main className="col-span-4 px-20 py-4">
          <div>
            <div className="w-[600px]"> 
                <h1 className="font-montserrat font-[700] text-[56px] leading-[68px] mb-2">Personal Information</h1>
                <p className="font-montserrat text-[18px] font-[400] mb-2 leading-[28px]">Update your details to stay connected and book events seamlessly</p>
            </div>

            <form>

               <div className="grid grid-cols-2 gap-6">
                  <Input
                      label="First name"
                      name="firstName"
                      type="text"
                      placeholder="First name"
                      register={register}
                      error={errors.firstName}
                      required
                  />

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

                <Input
                    label="Phone Number"
                    name="phone number"
                    type="text"
                    placeholder="Enter your phone number"
                    register={register}
                    error={errors.email}
                    required
                />

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
        </main>
      </div>
    </div>
  )
}
