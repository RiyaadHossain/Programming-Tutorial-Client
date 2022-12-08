import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../../css/blog.css"

export default function Blog() {

  const blogs = useSelector(state => state.products.products)
  const { id } = useParams()

  const blog = blogs.find(blog => blog._id === Number(id))

  return (
    <div className='blog-details'>
      <div className='blog-image-container'><img className='blog-image' src={blog.image} alt='' /></div>
      <div>
        <h2 className='text-3xl font-bold mb-4'>{blog.name}</h2>
        <p className='text-lg font-thin'>{blog.details}</p>
        <div className='mt-5'>
          <span className='border text-cyan-500 border-cyan-600 text-sm px-3 py-[2px] rounded-full'>blog</span>
        </div>
      </div>
    </div>
  )
}
