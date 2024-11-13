import { IoArrowForward } from "react-icons/io5";
import Button from "@/components/Buton";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMongoose } from "react-icons/si";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const ProjectsData = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "Developed a responsive and user-friendly e-commerce website using Next.js, Tailwind CSS, and MongoDB. Implemented features such as product listings, shopping cart, and secure payment processing.",
      image: "/Estore/3.jpeg",
    },
    {
      id: 2,
      title: "Movie App",
      description:
        " Developed a Netflix clone using Next.js, TypeScript, and MongoDB. Implemented features such as user authentication, movie recommendations, and personalized watchlists.",
      image: "/Netflix Movie Data/3.png",
      link: "/",
    },
    {
      id: 3,
      title: "Refukus Animated Web Website",
      description:
        " Developed a responsive and user-friendly React JS Animated , Tailwind CSS, and gsap",
      image: "/Refokuss/2.png",
      link: "https://portfolio-nextjs-typescript-mongodb.vercel.app/",
    },
  ];
  const skillSet = [
    {
      skill: "SSR & SSG Expertise",
      description:
        "Proficient in implementing Server-Side Rendering (SSR) and Static Site Generation (SSG) using Next.js, optimizing page load times and SEO performance. Experienced in configuring routing, creating dynamic pages, and leveraging the benefits of SSR for improved user experience and search engine indexing.",
    },
    {
      skill: "API Integration",
      description:
        "Skilled in integrating RESTful APIs, utilizing data-fetching methods to manage dynamic data efficiently within applications. Capable of designing robust API architecture and implementing error handling to ensure seamless communication between the front-end and back-end systems. Familiar with tools such as Postman for testing and documenting APIs.",
    },
    {
      skill: "Responsive UI Design",
      description:
        "Experienced in creating responsive and user-friendly interfaces using modern CSS frameworks and best practices, ensuring accessibility across devices. Proficient in utilizing Flexbox and Grid layouts, as well as media queries, to build adaptive designs that enhance user engagement and maintain brand consistency. Committed to following accessibility standards (WCAG) to create inclusive web applications.",
    },
    {
      skill: "Authentication & Security",
      description:
        "Knowledgeable in implementing secure authentication methods (e.g., Bcrypt, JWT) and best practices for protecting user data and API endpoints. Experience with role-based access control and encryption techniques to safeguard sensitive information. Actively stay updated with security vulnerabilities and industry best practices to maintain application integrity and user trust.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-screen px-4 sm:px-6 lg:px-10">
        <section className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center overflow-hidden">
          <div>
            <FaArrowRightLong className="absolute -z-20 opacity-10 font-thin overflow-hidden top-0 right-0 lg:text-[30rem] -rotate-45 m-0 p-0" />
          </div>

          <section className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left">
            <h1 className="group bg-gradient-to-r from-gray-500 via-zinc-600 to-gray-400 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-tight font-bold selection:bg-[#0a0a0a] selection:text-white">
              Hi I'm{" "}
              <span className="bg-gradient-to-r from-gray-500 via-zinc-600 to-gray-400 bg-clip-text text-transparent">
                Umar
              </span>{" "}
              <br />{" "}
              <span className="bg-gradient-to-r from-gray-500 via-zinc-600 to-gray-400 bg-clip-text text-transparent">
                Next
              </span>{" "}
              Js Developer
            </h1>
            <Link href="/contactPage" className="mt-6 md:mt-8 lg:mt-10">
              <Button text="Contact Me" />
            </Link>
          </section>

          <section className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 px-4 lg:px-0">
            <p className="max-w-lg tracking-tighter leading-6 lg:leading-relaxed border-t-2 border-t-zinc-700 py-6 bg-gradient-to-r from-gray-200 via-zinc-500 to-gray-200 bg-clip-text text-transparent">
              Passionate Next.js developer with experience in building dynamic,
              responsive, and scalable web applications. Skilled in creating
              seamless user experiences through optimized front-end designs and
              robust API integrations. Proficient in JavaScript, with a strong
              foundation in React and TypeScript, and expertise in handling
              databases like MongoDB. I focus on crafting clean, maintainable
              code that enhances application performance and scalability.
            </p>
          </section>
        </section>

        {/* About Section */}
        <section className="w-full h-auto flex justify-center gap-4 lg:gap-8 flex-wrap px-4 lg:px-0 mt-6">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-auto px-4 py-2 rounded-md shadow-md cursor-pointer group"
            >
              <IoArrowForward className="text-xl lg:text-2xl mr-2 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
              <p className="text-base lg:text-lg">{item.skill}</p>
            </div>
          ))}
        </section>

        {/* Skills Details */}
        <section className="w-full flex flex-col gap-6 justify-between items-center mt-10 px-4 sm:px-8 lg:px-16">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-10 px-6"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left tracking-tight bg-gradient-to-r from-gray-400 via-zinc-600 to-gray-400 bg-clip-text text-transparent leading-none selection:bg-[#0a0a0a] selection:text-white">
                {item.skill}
              </h1>
              <p className="max-w-lg tracking-tight leading-6 border-t-2 border-t-zinc-700 py-4 lg:py-10">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Skills Overview */}
        <section className="max-w-screen-xl h-auto flex  flex-col justify-center items-center mx-auto p-6 rounded-lg shadow-md mt-8 lg:mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Skills Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HTML Skill */}
            <div className="flex items-center">
              <FaHtml5 className="text-orange-600 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">HTML</div>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="flex items-center">
              <FaCss3Alt className="text-blue-600 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">CSS</div>
              </div>
            </div>

            {/* JavaScript Skill */}
            <div className="flex items-center">
              <FaJsSquare className="text-yellow-500 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">JavaScript</div>
              </div>
            </div>

            {/* React Skill */}
            <div className="flex items-center">
              <FaReact className="text-blue-400 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">React</div>
              </div>
            </div>

            {/* Next.js Skill */}
            <div className="flex items-center">
              <SiNextdotjs className="text-gray-800 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Next.js</div>
              </div>
            </div>

            {/* Express.js Skill */}
            <div className="flex items-center">
              <SiExpress className="text-gray-600 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Express.js</div>
              </div>
            </div>

            {/* Node.js Skill */}
            <div className="flex items-center">
              <FaNodeJs className="text-green-600 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Node.js</div>
              </div>
            </div>

            {/* MongoDB Skill */}
            <div className="flex items-center">
              <SiMongodb className="text-green-500 mr-3 text-2xl md:text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">MongoDB</div>
              </div>
            </div>
          </div>
        </section>

        {/* End of Skills Overview */}
        <section className="w-full h-full">
          <h2 className="text-3xl font-bold text-gray-200 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="../Estore/3.jpeg"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-400 mb-4">
                  A full-stack e-commerce platform built with MERN stack
                  featuring user authentication, product management, and payment
                  integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-sm rounded-full text-white">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500 text-sm rounded-full text-white">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-500 text-sm rounded-full text-white">
                    MongoDB
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="../Significo/4.png"
                alt="Signi Foco"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  Signi Foco
                </h3>
                <p className="text-gray-400 mb-4">
                  A modern photography portfolio website showcasing professional
                  photography services, client galleries, and booking
                  functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-sm rounded-full text-white">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-500 text-sm rounded-full text-white">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-purple-500 text-sm rounded-full text-white">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="../Netflix Movie Data/3.png"
                alt="Movie App"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  Movie App
                </h3>
                <p className="text-gray-400 mb-4">
                  A dynamic movie application that allows users to browse,
                  search, and discover movies with detailed information and
                  ratings.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-sm rounded-full text-white">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500 text-sm rounded-full text-white">
                    API
                  </span>
                  <span className="px-3 py-1 bg-red-500 text-sm rounded-full text-white">
                    CSS
                  </span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Live Demo
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
