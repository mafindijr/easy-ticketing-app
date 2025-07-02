import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { Button } from "../components/button";

export default function Profile() {
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

            </form>
        </main>
      </div>
    </div>
  )
}
