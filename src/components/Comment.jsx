import React from 'react'
import Image from './Image'
function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className="flex items-center gap-4">
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object cover" w="40"></Image>
        <span className='text-medium'>John Doe</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>
      {/* comment */}
      <div className="mt-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore architecto perspiciatis amet ex ab tempora quos ipsum nobis facilis nemo. Saepe ipsam perferendis nihil enim eos in quaerat modi labore.
        </p>
      </div>
    </div>
  )
}

export default Comment
