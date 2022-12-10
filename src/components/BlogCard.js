import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";
import { addToHistory } from "../redux/actions/blogAction";
import { filterByTag } from "../redux/actions/filterAction";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const tags = useSelector(state => state.filter.tags)

  const seeDetails = (id) => {
    dispatch(addToHistory(blog))
    navigate(`blog/${id}`)
  }

  const active = "bg-cyan-500"

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
      {pathname.includes("cart") && (
        <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
          <p> {blog.quantity} </p>
        </div>
      )}
      <div className='h-52 w-52 mx-auto overflow-hidden mb-7'>
        <img className="" src={blog.image} alt={blog.name} />
      </div>
      <h1 className='font-bold '>{blog.name}</h1>
      <p className='mb-3'><span className="font-semibold">Time:</span> {blog.time}min</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          <li className='text-sm '>
            {blog.details.substr(0, 150)}......
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-3 gap-2">{blog.tags.map((tag, i) =>
        tag && <span onClick={() => dispatch(filterByTag(tag))} key={i} className={`border hover:bg-cyan-500 cursor-pointer text-black ${tags.includes(tag) ? active : null} border-cyan-500 text-xs px-2 py-[2px] rounded-full`}>{tag}</span>
      )}</div>
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
