import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";
import { addToHistory } from "../redux/actions/blogAction";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate()

  const seeDetails = (id) => {
    dispatch(addToHistory(blog))
    navigate(`blog/${id}`)
  }

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
      {pathname.includes("cart") && (
        <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
          <p> {blog.quantity} </p>
        </div>
      )}
      <div className='h-52 w-52 mx-auto'>
        <img src={blog.image} alt={blog.name} />
      </div>
      <h1 className='font-bold text-center'>{blog.name}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {blog.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          <li className='text-sm '>
            {blog.details.substr(0,150)}......
          </li>
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>

        <button
          onClick={() => seeDetails(blog._id)}
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
        >
          See Details
        </button>

        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>

        {/* {pathname.includes("cart") && (
          <button
            title='Remove'
            onClick={() => dispatch(removeFromCart(blog))}
            className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
          >
            <p>Remove</p>
            <MdDeleteForever size='25' />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default BlogCard;
