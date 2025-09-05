import { Outlet } from "react-router-dom";
import ProfileNav from '../components/profile-nav'
import FooterNav from '../components/footer-nav';


export default function DashboardLayout() {
  return (
    <div className="relative flex flex-col">
        <ProfileNav />

            <main>
                <Outlet />
            </main>

        <FooterNav />
    </div>
  )
}
