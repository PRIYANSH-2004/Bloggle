import React from 'react'
import PostListItem from './PostListItem'

function PostList() {
  return (
    <div className='flex flex-col gap-12 mb-8'>
      {/* Post */}
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
      <PostListItem/>
    </div>
  )
}

export default PostList
