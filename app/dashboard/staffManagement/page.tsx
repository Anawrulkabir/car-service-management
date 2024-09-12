import StaffTable from '@/components/DashboardComponents/StaffManagement/LeftSide/StaffTable'
import StaffActivities from '@/components/DashboardComponents/StaffManagement/RightSide/StaffActivities'
import React from 'react'

export default function StaffManagement() {
  return (
    <section className='flex flex-col-reverse container px-2 md:px-4 lg:px-6   lg:flex-row gap-8 my-8'>
      <div className='flex-1' >
      <StaffTable/>
      </div>
      <div>
      <StaffActivities/>
      </div>
    </section>
  )
}
