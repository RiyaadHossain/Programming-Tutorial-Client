import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BsPlayCircleFill } from 'react-icons/bs'
import "../../css/blog.css"

export default function Blog() {

  const blogs = useSelector(state => state.blog.blogs)
  const { id } = useParams()

  if (!blogs.length) {
    return <p className='text-2xl font-bold text-center mt-12'>Loading...</p>
  }

  const blog = blogs.find(blog => blog._id === id)

  return (
    <div className='blog-details'>
      <div className='blog-image-container mb-3'><img className='blog-image' src={blog.image} alt='' /></div>
      <div>
        <h2 className='text-3xl font-bold mb-4'>{blog.name}</h2>
        <div className='mb-3 flex justify-between'><p className='flex items-center'> <BsPlayCircleFill /> <span className="font-semibold mx-2">Time: </span>{blog.time} min</p><p className='text-cyan-500 font-semibold'>{moment(blog.postedAt._d).format('MMM Do, YYYY')}</p></div>
        <p className='text-lg font-thin'>{blog.details}</p>
        <div className='mt-5 flex gap-3'>
          {blog.tags.map((tag, i) =>
            <span key={i} className='border hover:bg-cyan-500 cursor-pointer hover:text-black text-cyan-500 border-cyan-600 text-sm px-3 py-[2px] rounded-full'>{tag}</span>
          )}
        </div>
      </div>
    </div>
  )
}
