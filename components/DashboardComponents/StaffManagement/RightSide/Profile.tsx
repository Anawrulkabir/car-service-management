import Image from 'next/image'
import React from 'react'

export default function Profile() {
  return (
   <>
   <div className="flex flex-col justify-center max-w-xs p-6  rounded-xl sm:px-12  ">
	<Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" width={500} height={500}  />
	<div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl text-[#0A112F] font-medium sm:text-2xl">Arlene McCoy</h2>
			<p className="px-5 text-xs sm:text-lg font-normal text-[#70707A]">Worker</p>
		</div>
		
	</div>
</div>
   </>
  )
}
