import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Plus } from "lucide-react"

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div>
      <header className="flex justify-between items-center h-18 px-30 font-montserrat font-bold">
        <div className="flex-1">
        <a href="#">Home</a>
        </div>
        <div className="mr-30">
          <ul className="flex gap-12 ">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Organizer Dashbord</a></li>
            <li><a href="#">Log Out</a></li>
          </ul>
        </div>
      </header>

      <div className="grid grid-cols-5 mt-8">
        <nav className="font-poppins p-10 bg-slate-100">
             <ul className="inline-block ">
              <li className="mb-2"><a href="#" className="font-bold">Personal info</a></li>
              <li className="mb-2"><a href="#" className="font-bold">Tickets</a></li>
              <li className="mb-2"><a href="#" className="font-bold">Notifications</a></li>
              <li className="mb-2"><a href="#" className="font-bold">Settings</a></li>
             </ul>
        </nav>
        <main className="col-span-4 p-30">
          <div>

            <h1 className="font-montserrat font-[700] text-3xl leading-[36px]">Personal Information</h1>
            <p className="font-montserrat">Update your details to stay connected and book events seamlessly</p>

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
                      // prefixIcon={MapPin}
                  />
              </div>
              <div>
              <button className="w-[300px] h-[60px] mt-4 font-montserrat leading-[28px] font-[400] inline-flex justify-center items-center gap-1 text-[20px] cursor-pointer">
                <span><Plus size={30}/></span> Add payment method
              </button>
              </div>
              <Button type="submit" className="w-[183px] h-[50px] mt-6 font-poppins font-bold bg-blue-600 hover:bg-homeexplohover text-white py-2 rounded-[8px]">
                    Save Changes
                </Button>
            </form>
            </div>
        </main>
      </div>
    </div>
  )
}
