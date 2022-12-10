import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const Home = () => {

  const blogs = useSelector(state => state.blog.blogs)
  // const tags = useSelector(state => state.filter.tags)

  let content = blogs
    // .filter(blog => blog.tags.forEach(blogTag => tags.includes(blogTag)))
    .map((blog) => (
    <BlogCard key={blog._id} blog={blog} />
    ))
  
  console.log(blogs.filter(blog => blog.tags.length));

  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          First Upload
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          Last Upload
        </button>
        <button className={`border border-indigo-500 text-indigo-500 hover:bg-indigo-300 hover:text-white px-3 py-2 rounded-full font-semibold`}>
          Clear Filter
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
