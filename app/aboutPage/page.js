  const AboutSection = () => {
    return (
      <>
        <div className="min-h-screen p-8 ">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className=" rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">MERN Stack Developer</h2>
              <p className="text-white mb-4">
                I am a passionate MERN Stack Developer with expertise in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                  <ul className="list-disc list-inside text-white">
                    <li>MongoDB & Mongoose</li>
                    <li>Express.js</li>
                    <li>React.js & Next.js</li>
                    <li>Node.js</li>
                    <li>RESTful APIs</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Services</h3>
                  <ul className="list-disc list-inside text-white">
                    <li>Full-stack Web Development</li>
                    <li>API Development</li>
                    <li>Database Design</li>
                    <li>Frontend Development</li>
                    <li>Backend Development</li>
                    <li>Web Application Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Work Approach</h2>
              <p className="text-white mb-4">
                I focus on creating scalable, efficient, and maintainable applications using modern development practices and tools. My experience with the MERN stack allows me to deliver robust solutions that meet client requirements and industry standards.
              </p>
              <p className="text-white">
                I am passionate about learning new technologies and constantly improving my skills to deliver the best possible solutions for my clients.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default AboutSection;