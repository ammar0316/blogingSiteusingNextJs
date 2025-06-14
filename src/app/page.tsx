import Link from "next/link";
import { Blogs } from "@/types/type"; // Make sure this is a valid type

 const Home = ()=> {
    const blogs: Blogs[] = [
    {
      id: 1,
      name: "The Rise of JavaScript in Modern Web Development",
      details:
        "JavaScript has become the backbone of modern web applications. From frontend frameworks like React and Angular to backend tools like Node.js, it's everywhere.",
      picture:
        "https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/6573330691921d8d930b9e27_free-javascript-courses-blog-hero-image.webp",
    },
    {
      id: 2,
      name: "Why Learning TypeScript is Worth It",
      details:
        "TypeScript enhances JavaScript by adding static types. It helps catch errors during development, making large-scale projects easier to maintain.",
      picture:
        "https://media.licdn.com/dms/image/v2/D5612AQFasQpvKew-eA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726418497222?e=2147483647&v=beta&t=BJvKx-A8OvUqU3CDGHYzKbYIKC2qBwVnUJz-Vmijo7Y",
    },
    {
      id: 3,
      name: "How to Build a Full-Stack App Using the MEARN Stack",
      details:
        "The MEARN stack includes MongoDB, Express, Angular, React, and Node.js. It enables you to create powerful full-stack applications with JavaScript.",
      picture:
        "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/04/0-cl7fc6pt1MHjIF4K.png",
    },
    {
      id: 4,
      name: "Top 5 Tips for Beginner Web Developers",
      details:
        "Start with HTML, CSS, and JavaScript. Build small projects. Use GitHub to showcase your work. Follow modern development trends. Never stop learning.",
      picture:
        "https://media.licdn.com/dms/image/v2/D5612AQFasQpvKew-eA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726418497222?e=2147483647&v=beta&t=BJvKx-A8OvUqU3CDGHYzKbYIKC2qBwVnUJz-Vmijo7Y",
    },
    {
      id: 5,
      name: "Understanding React Hooks: useState and useEffect",
      details:
        "React hooks allow function components to have state and side effects. Learn how to manage UI interactions and data fetching using these essential hooks.",
      picture:
        "https://kinsta.com/wp-content/uploads/2023/04/what-is-typescript.jpeg",
    },
    {
      id: 6,
      name: "The Rise of JavaScript in Modern Web Development",
      details:
        "JavaScript has become the backbone of modern web applications. From frontend frameworks like React and Angular to backend tools like Node.js, it's everywhere.",
      picture:
        "https://cdn.prod.website-files.com/5dcc7f8c449e597be23356e0/6573330691921d8d930b9e27_free-javascript-courses-blog-hero-image.webp",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((items) => (
        <div
          key={items.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <img
            src={items.picture}
            alt={items.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h1 className="text-lg font-semibold text-gray-800">
              {items.name}
            </h1>
            <p className="text-sm text-gray-600 line-clamp-3">
              {items.details}
            </p>

            {/* ✅ Wrap button with Link to dynamic blog detail page */}
            <Link href={`/blog/${items.id}`}>
              <button className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200">
                See Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home 


