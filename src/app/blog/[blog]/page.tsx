/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogData } from "../BlogData";
import BlogContent from "./components/BlogContent";
import { BlogHeader } from "./components/BlogHeader";

export default function SingleBlogPage({ params }: { params: { blog: string } }) {
  const blog = blogData[params.blog as keyof typeof blogData];

  if (!blog) {
    return (
      <article className="bg-white min-h-screen py-8 pt-40">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </article>
    );
  }

  return (
    <article className=" min-h-screen md:py-8 md:pt-40 pt-16">
      <div className="max-w-6xl mx-auto px-4 md:py-8">
        <BlogHeader title={blog.title} author={blog.author} thumbnail={blog.thumbnail} image={blog.avatar} />
        <p className="text-gray-700 mb-8">{blog.intro}</p>
        <BlogContent content={blog as any} />
      </div>
    </article>
  );
}
