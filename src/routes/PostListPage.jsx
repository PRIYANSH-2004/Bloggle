import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"
import { useState } from "react";
const PostListPage = () => {
    const[open ,setOpen] =useState(false);

    return (
        <div className='flex flex-col gap-12 mb-8'>
      <h1 className='mb-8 text-2xl'>Development Blog</h1>
      <button onClick={()=>setOpen(prev=>!prev)} className="md:hidden text-sm bg-blue-800 text-white px-4 py-2 rounded-2xl mb-4 w-max">{open? "Close" : "Filter or Search"}</button>
      <div className="flex gap-8 flex-col-reverse md:flex-row"> {/*main div */}
          <div className="">
            <PostList/>
          </div>
          <div className={`${open? "block" : "hidden"} md:block`}>
            <SideMenu/>
          </div>
      </div>
      {/* <PostListItem/> */}
    </div>
    )
}
export default PostListPage