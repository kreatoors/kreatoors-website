import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const one = "/images/blog/one.png";
  const two = "/images/blog/two.jpg";
  const three = "/images/blog/three.jpg";
  const four = "/images/blog/four.jpg";
  const five = "/images/blog/five.png";
  const six = "/images/blog/six.jpg";
  const seven = "/images/blog/seven.png";
  const eight = "/images/blog/eight.jpg";
  const nine = "/images/blog/1748a214f1afbad3cefb9cd6a5edc0e5.jpg";
  const ten = "/images/blog/11.jpg";
  const eleven = "/images/blog/12.jpg";

  const blogs = [
    {
      id: "egc-strategic-asset",
      title: "Employee-Generated Content (EGC): HR's Strategic Asset in Modern Brand Building",
      date: "November 19, 2024",
      image: one,
    },
    {
      id: "hr-ecosystem",
      title: "Content Creation – A Superpower in the HR Ecosystem",
      date: "November 19, 2024",
      image: two,
    },
    {
      id: "covid-changed-internal-communication",
      title: "The Hidden Cost of Hybrid: Covid changed Internal Communication",
      date: "August 8, 2024",
      image: three,
    },
    {
      id: "ai-vs-authenticity",
      title: "AI vs. Authenticity: Why Human Stories Matter More Than Ever in Brand Building",
      date: "November 19, 2024",
      image: four,
    },
    {
      id: "roi",
      title: "The ROI of Employee Stories: Real Numbers Behind Successful Advocacy Programs",
      date: "November 19, 2024",
      image: five,
    },
    {
      id: "employee-winning",
      title: "5 Companies Winning at Employee-Generated Content (And What We Can Learn)",
      date: "November 19, 2024",
      image: six,
    },

    {
      id: "corporate-voice",
      title: "Personal Brand or Corporate Voice? How to Strike the Perfect Balance ",
      date: "November 19, 2024",
      image: seven,
    },

    {
      id: "content-creation",
      title: "Content Creation Made Simple: A Guide for Busy Professionals ",
      date: "November 19, 2024",
      image: eight,
    },
    {
      id: "employee-sharing-content",
      title: "Beyond LinkedIn: Where and How Your Employees Should Share Their Stories ",
      date: "November 19, 2024",
      image: nine,
    },

    {
      id: "corporate-influencing",
      title: "    The Future of Corporate Influence: Why Employee Voices Are Your Secret Weapon ",
      date: "November 19, 2024",
      image: ten,
    },

    {
      id: "create-culture",
      title: "Creating a Culture of Sharing: How to Encourage Employee Content Creation ",
      date: "November 19, 2024",
      image: eleven,
    },
  ];
  return (
    <div className=" pt-28 md:pt-44">
      <div className="mx-auto ">
        <div className="text-center mb-12 rounded-b-[50px] py-10">
          <h1 className="text-4xl mb-4 font-playfair  ">Blog</h1>
          <p className=" text-sub-gray ">Insights to Elevate Your Expertise</p>
        </div>
        <div className="bg-white md:py-16 px-5">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <Link key={index} href={`/blog/${blog.id}`}>
                <div key={index} className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform">
                  <Image height={350} width={700} src={blog.image} alt={blog.title} className="w-full h-52 object-cover rounded-lg" />
                  <div className="md:p-4">
                    <h2 className="text-lg  font-medium  mt-2">{blog.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
