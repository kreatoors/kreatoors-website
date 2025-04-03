import Image from "next/image";
import React from "react";

interface BlogHeaderProps {
  title: string;
  author?: {
    name: string;
    role: string;
  };
  image?: string;
  thumbnail: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BlogHeader: React.FC<BlogHeaderProps> = ({ title, author, image, thumbnail }) => {
  return (
    <div className="max-w-6xl mx-auto md:px-4 pt-8 pb-12">
      <h1 className="text-[22px] md:text-4xl mb-6 font-medium md:font-semibold">{title}</h1>

      {/* <div className="flex items-center space-x-4 mb-8">
        <img
          src={image}
          alt={author?.name}
          className="w-16 h-16 md:w-12 md:h-12 rounded-full"
        />
        <div>
          <h3 className="font-medium">{author?.name}</h3>
          <p className="text-sm text-gray-600">{author?.role}</p>
        </div>
      </div> */}

      <div className="rounded-2xl overflow-hidden mb-1 md:mb-8">
        <Image width={500} height={500} src={thumbnail} alt={title} className="w-full md:w-4/5 mx-auto rounded-3xl md:h-[420px] object-cover" />
      </div>
    </div>
  );
};
