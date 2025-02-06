import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>
      {/* detail */}
      <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to='/test' className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa sed assumenda.</Link>
            <div className="flex items-center gap-2 text-gray-800 text-sm">
                <span className="">Written By</span>
                <Link className='text-blue-500'>Priyansh</Link>
                <span className="">on</span>
                <Link className='text-blue-500'>Engineering</Link>
                <span className="">2 day ago</span>
            </div>
        {/* description */}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad sit ea aliquam perspiciatis a alias esse mollitia deserunt animi. Omnis ea minus eum libero culpa laboriosam rerum excepturi nihil.
        </p>
        <Link to='/test' className='text-blue-500 underline text-sm'>Read More...</Link>
      </div>
    </div>
  )
}

export default PostListItem
