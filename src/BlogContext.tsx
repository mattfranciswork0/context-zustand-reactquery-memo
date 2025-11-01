import { createContext, useContext } from "react";

type BlogState = {
  loading: boolean;
  title: string;
  message: string;
};

type BlogContext = {
  setBlogState: (val: BlogState) => void;
  blogState: BlogState;
};
export const BlogContext = createContext<BlogContext | null>(null);
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }
  return context;
};

export const BlogContext2 = createContext<any>(null);
export const useBlogContext2 = () => {
  const context = useContext(BlogContext2);
  if (!context) return context;
};
