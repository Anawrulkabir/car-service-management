import Image from 'next/image'
import React from 'react'

export default function TBody() {
  return (
    <>
    <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        

                                        <div className="flex items-center gap-x-2">
                                            <Image className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" width={500} height={500}  alt=""/>
                                            <div>
                                                <h2 className="font-medium text-sm text-[#0A112F] ">Arlene McCoy</h2>
                                                <p className="text-sm font-normal text-[#70707A]">Worker</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                <div>
                                                <h2 className="font-medium text-sm text-[#0A112F] ">Mar 1, 2022</h2>
                                                <p className="text-sm font-normal text-[#70707A]">Joined From 235 Days</p>
                                            </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                <div>
                                                <h2 className="font-medium text-sm text-[#0A112F] "> <span>$1,546</span> <span className='text-[#9096A2]  font-medium text-xs ' >.12</span>  </h2>
                                                <p className="text-sm font-normal text-[#70707A]">1 Mar 2022</p>
                                            </div>
                                </td>
                               
                           
                            </tr>
    </>
  )
}
