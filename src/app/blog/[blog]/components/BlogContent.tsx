/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type Section = {
  title: string;
  content?: string | string[];
  bulletPoints?: string[];
  subSections?: {
    title: string;
    text?: string;
    description?: string;
    bulletPoints?: string[];
  }[];
  subheading?: string;
  textcontent?: string;
  description?: string;
};

type BlogContentProps = {
  content: {
    title: string;
    intro: string;
    thumbnail: string;
    avatar: string;
    author: {
      name: string;
      role: string;
    };
    sections: Section[];
  };
};

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const renderTextWithBold = (text: string | undefined) =>
    text?.split(/\*\*(.*?)\*\*/).map((part, i) =>
      i % 2 ? (
        <span key={i} className="font-semibold text-gray-800">
          {part}
        </span>
      ) : (
        part
      )
    );

  return (
    <div className="max-w-6xl mx-auto md:px-4 md:py-8">
      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl md:text-2xl font-medium mb-4">{section.title !== "Next Steps" && section.title}</h2>
          <p>{renderTextWithBold(section.textcontent)}</p>

          <h2 className="mb-3 text-lg font-normal text-sub-gray-500">{section?.subheading}</h2>

          {section.title === "Next Steps" ? (
            <p className="text-sub-gray mt-4 italic">{renderTextWithBold(section.content as string)}</p>
          ) : Array.isArray(section.content) ? (
            section.content.map((line, idx) =>
              typeof line === "object" && line !== null ? (
                <div key={idx} className="mb-4">
                  <h3 className="text-xl font-medium">{renderTextWithBold((line as any).title)}</h3>
                  <p className="text-sub-gray mt-2">{renderTextWithBold((line as any).description)}</p>
                </div>
              ) : (
                <p key={idx} className="text-sub-gray my-3">
                  {renderTextWithBold(line)}
                </p>
              )
            )
          ) : (
            <p className="text-sub-gray my-3">{renderTextWithBold(section.content)}</p>
          )}

          {section.subheading && <p className="font-medium text-lg mt-4">{renderTextWithBold(section.subheading)}</p>}

          {section.bulletPoints && (
            <ul className="list-disc pl-8">
              {section.bulletPoints.map((point, idx) => (
                <li key={idx} className="text-sub-gray my-2">
                  {renderTextWithBold(point)}
                </li>
              ))}
            </ul>
          )}

          {section.subSections &&
            section.subSections.map((sub, idx) => (
              <div key={idx} className="mt-4">
                {sub.text ? (
                  <p className="text-sub-gray-500">{renderTextWithBold(sub.text)}</p>
                ) : (
                  <p className="font-medium text-gray-700 my-3">{renderTextWithBold(sub.title)}</p>
                )}

                <p className="text-sub-gray my-3">{renderTextWithBold(sub.description)}</p>

                {sub.bulletPoints && (
                  <ul className="list-disc pl-8">
                    {sub.bulletPoints.map((point, subIdx) => (
                      <li key={subIdx} className="text-sub-gray-500">
                        {renderTextWithBold(point)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {section.description && <p className="text-sub-gray mt-4">{renderTextWithBold(section.description)}</p>}
        </div>
      ))}
    </div>
  );
};

export default BlogContent;
