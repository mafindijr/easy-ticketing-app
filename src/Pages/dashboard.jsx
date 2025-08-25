import EmptyDashboadState from "../components/empty-dashboad"
import DashboardLayout from "../layout/dashboard-layout"

export default function Dashboard() {


  return (
    <div className="flex flex-col gap-8 mx-[130px] justify-center mt-20">
        <div>
          <h2 className="text-[32px] leading-[44px] font-montserrat font-bold ">Dashboard</h2>
        </div>
        <div className="grid grid-cols-2 gap-[24px] w-full">
          <div className="flex flex-col rounded-[8px] border-1 border-[#cccccc] p-[24px] gap-[19px]">
            <h4 className="flex items-center gap-[16px] font-montserrat font-[700] text-[20px] text-[#999999] leading-[30px]">
              <span>icon</span>
              Total Tickets Sold
            </h4>
            <p className="text-[64px] font-montserrat font-bold leading-[100%]">0</p>
          </div>
          <div className="flex flex-col rounded-[8px] border-1 border-[#cccccc] p-[24px] gap-[19px]">
            <h4 className="flex items-center gap-[16px] font-montserrat font-[700] text-[20px] text-[#999999] leading-[30px]">
              <span>icon</span>
              Total Revenue
            </h4>
            <p className="text-[64px] font-montserrat font-bold leading-[100%]">$0</p>
          </div>
        </div>
      <div>
          <div>
            <h3 className="text-[24px] leading-[34px] font-montserrat font-bold">Your Events</h3>
          </div>
            <EmptyDashboadState />
      </div>
    </div>
  )
}
