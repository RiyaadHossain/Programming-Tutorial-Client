import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const Home = () => {

  const blogs = useSelector(state => state.blog.blogs)
  console.log(blogs)

  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          AMD
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {blogs.map((blog) => (
          <BlogCard key={blog.model} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
