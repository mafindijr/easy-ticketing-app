import { useForm } from "react-hook-form";
import { Input } from "..input.jsx";
import { Button } from "..button.jsx";

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
            <p>Update your</p>

            <form>

            </form>
        </main>
      </div>
    </div>
  )
}
