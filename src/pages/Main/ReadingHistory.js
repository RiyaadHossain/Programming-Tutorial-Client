import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const ReadingHistory = () => {
  const cart = useSelector((state) => state.products.cart);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {cart
        .sort((a, b) => a._id - b._id)
        .map((product) => (
          <BlogCard key={product.model} product={product} />
        ))}
    </div>
  );
};

export default ReadingHistory;
