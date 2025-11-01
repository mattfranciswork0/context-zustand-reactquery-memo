import React, { useState, type ReactNode } from "react";
import { BlogContext, BlogContext2 } from "./BlogContext";

type BlogProvider = { children: ReactNode };
const BlogProvider = ({ children }: BlogProvider) => {
  const [blogState, setBlogState] = useState({
    loading: false,
    title: "Hello",
    message: "This is a post on context api",
  });

  return (
    <BlogContext.Provider value={{ blogState, setBlogState }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;

const BlogProvider2 = ({ children }: BlogProvider) => {
  const [blogState, setBlogState] = useState(false);
  return (
    <BlogContext2.Provider value={{ blogState, setBlogState }}>
      {children}
    </BlogContext2.Provider>
  );
};
