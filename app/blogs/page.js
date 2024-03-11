"use client";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Blogs/BlogNavbar";
import WebBanner from "../components/Blogs/WebBanner";
import { useEffect, useState } from "react";

const blogs = () => {
  const blogsData = [
    {
      id: 1,
      img: "https://picsum.photos/400",
      title: "How to deploy a website on AWS using S3 and CloudFront",
      author: "Somraj",
      short_desc:
        "Deploying a website on AWS involves several key steps. First, host your static files on Amazon S3 for scalable storage. Utilize Amazon CloudFront as a content delivery network (CDN) to enhance performance.",
      full_desc: "Full description of Blog 1...",
      category: "AWS DevOps",
      tag: ["Trending", "Recent"],
      date: "2024-03-12",
    },
    {
      id: 2,
      img: "https://picsum.photos/400",
      title: "How to deploy a website on AWS using S3 and CloudFront",
      author: "Jane Smith",
      short_desc:
        "Deploying a website on AWS involves several key steps. First, host your static files on Amazon S3 for scalable storage. Utilize Amazon CloudFront as a content delivery network (CDN) to enhance performance.",
      full_desc: "Full description of Blog 2",
      category: "Lifestyle",
      tag: ["Trending", "DevOps"],
      date: "2022-01-02",
    },
    {
      id: 3,
      img: "https://picsum.photos/400",
      title: "How to deploy a website on AWS using S3 and CloudFront",
      author: "John Doe",
      short_desc:
        "Deploying a website on AWS involves several key steps. First, host your static files on Amazon S3 for scalable storage. Utilize Amazon CloudFront as a content delivery network (CDN) to enhance performance.",
      full_desc: "Full description of Blog 3",
      category: "Technology",
      tag: ["Trending", "DevOps"],
      date: "2022-01-03",
    },
  ];

  // const [allBlogs, setAllBlogs] = useState([]);
  // const [trendingBlogs, setTrendingBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8000/api/data/");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setAllBlogs(data.blogs);
  //       console.log(allBlogs);

  //       const trending = data.blogs.filter((blog) =>
  //         blog.tags.includes("Trending")
  //       );
  //       setTrendingBlogs(trending.slice(0, 3));
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <WebBanner blogs={blogsData} />
    </>
  );
};

export default blogs;
