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
      <section className="w-full h-screen">
        <section className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <div>
            <FaArrowRightLong className="absolute -z-20 opacity-10 font-thin overflow-hidden top-0 right-0 lg:text-[30rem] -rotate-45 m-0 p-0" />
          </div>

          <section className="w-1/2 flex flex-col items-center justify-center">
            <h1 className="group bg-gradient-to-r from-gray-500 via-zinc-600 to-gray-400 bg-clip-text text-transparent lg:text-7xl tracking-tighter text-center leading-none font-bold selection:bg-[#0a0a0a] selection:text-white-900">
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
            <Link href="/contactPage" className="mt-10">
              <Button text="Contact Me" />
            </Link>
          </section>

          <section className="w-1/2 flex justify-end text-justify mr-10">
            <p className="w-2/3 tracking-tighter leading-1 z-30 border-t-2 border-t-zinc-700 py-10 bg-gradient-to-r from-gray-200 via-zinc-500 to-gray-200 bg-clip-text text-transparent">
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
        <section className="w-full h-[40%] flex justify-center gap-8 flex-wrap">
          {[
            "SSR & SSG Expertise",
            "API Integration",
            "Responsive UI Design",
            "Authentication & Security",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-10 px-4 py-2 rounded-md shadow-md cursor-pointer group"
            >
              <IoArrowForward className="text-2xl mr-2 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </section>

        <section className="w-full h-full flex flex-col gap-10 justify-center items-center mt-10">
          {skillSet.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center gap-10 px-10"
            >
              <h1 className="lg:text-4xl w-1/3 text-left tracking-tighter bg-gradient-to-r from-gray-400 via-zinc-600 to-gray-400 bg-clip-text text-transparent leading-none font-bold selection:bg-[#0a0a0a] selection:text-white-900">
                {item.skill}
              </h1>
              <p className="w-2/3 tracking-tighter leading-1 z-30 border-t-2 border-t-zinc-700 py-10">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        {/* Skills Overview */}
        <section className="max-w-screen-xl mx-auto p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Skills Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <FaHtml5 className="text-orange-600 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">HTML</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-orange-600"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <FaCss3Alt className="text-blue-600 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">CSS</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <FaJsSquare className="text-yellow-500 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">JavaScript</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <FaReact className="text-blue-400 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">React</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-blue-400"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <SiNextdotjs className="text-gray-800 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Next.js</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-gray-800"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <SiExpress className="text-gray-600 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Express.js</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-gray-600"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <FaNodeJs className="text-green-600 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">Node.js</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <SiMongodb className="text-green-500 mr-3 text-3xl" />
              <div className="flex-1">
                <div className="text-gray-300">MongoDB</div>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    className="h-full bg-green-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Skills Overview */}
        
      </section>
    </>
  );
}
