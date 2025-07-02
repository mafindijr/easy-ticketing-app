import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div>
      <header>
        <div>
        <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Profile</a>
          <a href="#">Organizer Dashbord</a>
          <a href="#">Log Out</a>
        </div>
      </header>

      <div>
        <nav>
          <a href="#">Personal info</a>
          <a href="#">Tickets</a>
          <a href="#">Notifications</a>
          <a href="#">Settings</a>
        </nav>
        <main>
            <h1>Personal Information</h1>
            <p>Update your details to stay connected and book events seamlessly</p>

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
              <button className="w-[300px] h-[60px] border-2 mt-4 font-montserrat leading-[28px] font-[400]">
                Add payment method
              </button>
              </div>
              <Button type="submit" className="w-[183px] h-[50px] mt-6 font-poppins font-bold bg-blue-600 hover:bg-homeexplohover text-white py-2 rounded-[8px]">
                    Save
                </Button>
            </form>
        </main>
      </div>
    </div>
  )
}
