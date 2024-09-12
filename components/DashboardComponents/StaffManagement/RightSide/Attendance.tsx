import React from 'react'

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1); // For a 30-day month
const attendanceDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,  20, 21, 22, 23, 24]; // Example attendance data

export default function Attendance() {
  return (
    <>
       <section className='bg-[#F0F0F0] p-5 rounded' >
          <h3 className='text-[#0A112F] text-base font-semibold text-center ' >
          Attendance
          </h3>
          <div className=' grid text-center grid-cols-7 gap-5 mt-6' >
              {
                daysOfWeek?.map((day, idx) => (
                  <span key={idx} className='text-[#000000]  font-bold text-sm' >{day}</span>
                ))
              }
          </div>
          <div className=' grid grid-cols-7 gap-5 mt-6 text-center' >
              {
                daysInMonth?.map((day,idx) => (
                  <div key={idx} className={` ${attendanceDays?.includes(day) ? 'bg-[#DEE33E]' : 'bg-[#D9D9D9]'} px-2 py-1  rounded shadow`} >
                    <span  className='font-normal text-sm text-[#000000]' >{day}</span>
                  </div>
                ))
              }
          </div>
       </section>
    </>
  )
}
