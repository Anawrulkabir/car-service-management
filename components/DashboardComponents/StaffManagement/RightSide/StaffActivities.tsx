import React from 'react'
import Profile from './Profile'
import Attendance from './Attendance'


export default function StaffActivities() {
  return (
   <>
        <section  className='bg-[#FFFFFF] shadow p-7 rounded flex flex-col items-center ' >
                <Profile/>
                <Attendance/>
                {/* <Performance/> */}
        </section>
   </>
  )
}
