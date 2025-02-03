import { useUser } from '@clerk/clerk-react'
import React from 'react'
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
function Write() {
  const {isLoaded, isSignedIn, user} = useUser();
  if(!isLoaded){
    return <div className="">Loading...</div>
  }
  if( isLoaded && !isSignedIn){
    return <div className="">You Should Login!</div>
  }

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form action="" className='flex flex-col gap-6 flex-1 mb-16'>
        <button className='p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max'>Add a cover image</button>
        <input className='text-4xl bg-transparent font-semibold outline-node' type="text" placeholder='My awsome story'/>
        <div className="flex items-center gap-2">
          <label className='text-sm' htmlFor="">Choose a Category</label>
          <select className='p-2 rounded-xl bg-white ' name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea className='p-4 rounded-xl bg-white ' name="desc" id="" placeholder='A short description'></textarea>
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white '/>
        <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>Send</button>
      </form>
    </div>
  )
}

export default Write
