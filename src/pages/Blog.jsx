import React from 'react';
import OurBlogs from "../components/OurBlogs.jsx";
import RateBlog from "../components/RateBlog.jsx";
import ReportAgent from "../components/ReportAgent.jsx";
import BlogLast from "../components/BlogLast.jsx";

const Blog = () => {
    return (
        <div>
            <OurBlogs/>
            <RateBlog/>
            <ReportAgent/>
            <BlogLast/>
        </div>
    );
};

export default Blog;