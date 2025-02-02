import React from 'react'
import Image from './Image'
function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className="">
        <Image src="unserImg.jpeg" className="w-10 h-10 rounded-full object cover" w="40"></Image>
      </div>
    </div>
  )
}

export default Comment
