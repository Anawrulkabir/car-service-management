
import React from 'react'
import TBody from './TBody'

export default function StaffTable() {
  return (
    <>
    <section className="container px-4 mx-auto">
    <div className="flex items-center gap-x-3">
        

    </div>

    <div className="flex flex-col ">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow rounded">
                    <table className="min-w-full ">
                    
                        <thead className="">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-x-3">
                                    <h2 className="text-lg font-medium text-[#0A112F] ">Staff</h2>
                                    </div>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="flex items-center gap-x-2">
                                       

                                       
                                    </button>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <button className="  text-[#9FA324] font-extrabold text-sm ">
                                    See All
                                    </button>
                                </th>

                             
                            </tr>
                        </thead>
                        <tbody className="">
                            
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                            <TBody/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  
</section>
    </>
  )
}
