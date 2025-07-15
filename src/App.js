

import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect, useState } from "react";

import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";


import "./index.css";


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const [activeSection, setActiveSection] = useState("home");
    const [showTopButton, setShowTopButton] = useState(false);
   





  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollY = window.scrollY + 200;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
        if (window.scrollY > 400) {
  setShowTopButton(true);
} else {
  setShowTopButton(false);
}

      }
    };
      


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
  <div className="bg-gradient-to-br from-[#1e1e2f] to-[#3a1c71] min-h-screen text-white">

      {/* Navigation Bar */}
<header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50">
  <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Prabhanshu</h1>
    

  <ul className="hidden md:flex space-x-8 font-medium">
  {["home", "about", "projects", "contact"].map((section) => (
    <li key={section}>
      <a
        href={`#${section}`}
        className={`transition ${
          activeSection === section ? "text-pink-400 font-bold" : "hover:text-pink-400"
        }`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    </li>
  ))}
</ul>
{/* Hamburger Icon for Mobile */}
<button
  className="md:hidden text-white text-3xl focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
>
  ☰
</button>



  </nav>
  {/* Mobile Navigation Menu */}
{isOpen && (
  <div className="md:hidden bg-black bg-opacity-90 text-white px-4 py-6 space-y-4 text-center">
    {["home", "about", "projects", "contact"].map((section) => (
      <a
        key={section}
        href={`#${section}`}
        className="block text-lg font-semibold hover:text-pink-400"
        onClick={() => setIsOpen(false)} // closes menu on link click
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </div>
)}

</header>

      {/* Hero Section */}
      <section
  id="home"
  className="min-h-screen flex items-center flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-12"
  data-aos="fade-up"
>

        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-16">
            Hey, I'm <span className="text-pink-400">Prabhanshu</span> 
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            A Web Developer, Tech Explorer & AI Enthusiast<br />
            Crafting code with creativity and purpose.
          </p>
          
          
        </div>

        {/* Glass Card with Image */}
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-xl flex items-center justify-center animate-fade-in-up">
          <img
            src="/imgg1.jpg"
            alt="Prabhanshu"
            className="rounded-full w-56 h-56 object-cover border-4 border-pink-400 shadow-xl"
          />
        </div>
        <p className="absolute bottom-6 text-sm text-white text-center w-full opacity-100 animate-bounce">
  ↓ Scroll to know more about me
</p>

      </section>
      

     
{/* About + Skills + Roles Section */}
<section id="about" className="py-16 bg-white text-gray-800 px-6">
  {/* Intro */}
  <div className="max-w-4xl mx-auto mb-12">
    <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
    <p className="text-lg leading-relaxed text-center">
         I'm Prabhanshu Chouhan — a creative developer with a passion for building clean, intuitive, and impactful web experiences. I believe great design isn't just functional — it should feel delightful to use.

      <br /><br />
         I'm currently pursuing a B.Tech in Artificial Intelligence at IIT Gandhinagar, where I enjoy exploring real-world challenges through the lens of code, design, and human-centered thinking.

    </p>
  </div>

 <section id="skills" className="py-16 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-12 text-pink-400">
      Technical Skills
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {[
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Arduino", icon: "devicon-arduino-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
      ].map(({ name, icon }) => (
  <div
    key={name}
    className="bg-[#1e293b] hover:bg-[#273549] p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 transition duration-300 text-center"
  >
    <i className={`${icon} text-5xl mb-4 mx-auto`}></i>
    <h3 className="text-lg font-semibold text-white">{name}</h3>

    {/* Decorative Bar */}
    <div className="h-1 w-2/3 bg-pink-500 mx-auto mt-3 rounded-full opacity-80"></div>
  </div>
))}

    </div>
  </div>
</section>


<section className="bg-[#1e1e2f] py-16 px-6">
  <h2 className="text-3xl font-bold text-white text-center mb-6">Current Roles</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Role 1 */}
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md text-gray-800">
      <img
        src="/icons/eii.png"
        alt="EII Logo"
        className="w-14 h-14 object-contain rounded-md border-2 border-pink-500 p-1"
      />
      <span className="text-lg font-semibold">EII Marketing Team</span>
    </div>

    {/* Role 2 */}
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md text-gray-800">
      <img
        src="/icons/amalthea.png"
        alt="Amalthea Logo"
        className="w-14 h-14 object-contain rounded-md border-2 border-blue-500 p-1"
      />
      <span className="text-lg font-semibold">Amalthea Events Team</span>
    </div>
  </div>
</section>




  <p className="mt-20  text-sm text-purple-600 text-center animate-bounce">
    ↓ Projects Ahead!!
  </p>
</section>

 {/* Projects Section */}
      <section
  id="projects"
  className="py-32 bg-gray-200 px-8 text-gray-500"
  data-aos="fade-up"
>

        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Musical Note Detector</h3>
            <p className="text-gray-600 mb-4">
              An Arduino-based sound sensor system that detects musical notes and displays them on an LCD.
            </p>
            <a href="#project1" className="text-pink-500 hover:underline">View Details</a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Electrostatic Air Purifier</h3>
            <p className="text-gray-600 mb-4">
              An innovative air purifier that removes pollutants using electrostatic precipitation—no filters needed. 
            </p>
            <a href="#project2" className="text-pink-500 hover:underline">View Details</a>
          </div>
          {/* Project 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Eklavya De-Trip</h3>
            <p className="text-gray-600 mb-4">
              Specifically designed athletic hurdle aimed at reducing injuries for amateur runners.
            </p>
            <a href="#project3" className="text-pink-500 hover:underline">View Details</a>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2"> Maping with Geopandas</h3>
            <p className="text-gray-600 mb-4">
              From handling shapefiles to visualizing geographical trends, it showcases how geospatial insights can be extracted and beautifully visualized through code.
            </p>
            <a href="#project4" className="text-pink-500 hover:underline">View Details</a>
          </div>
        </div>
      </section>

      {/* Musical Note Detector Section */}
<section
  id="project1"
  className="py-20 px-6 bg-gradient-to-br from-[#1e1e2f] to-[#3a1c71] text-white text-center"
>
  <h2 className="text-3xl font-bold mb-4">Musical Note Detector</h2>

  <p className="text-lg text-white-600 max-w-2xl mx-auto mb-6">
    A real-time sound-to-note detector using Arduino and KY-038 sound sensor, displaying results on an I2C LCD screen.
    Ideal for music learners and hobbyists exploring audio-based electronics.
  </p>
   {/* PDF Report Download */}
  <div className="mb-8">
    <a
  href="/EErep.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 hover:bg-pink-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
>
  📄 Our IEEE Format Report
</a>

  </div>

  {/* YouTube Embed */}
  <div className="mb-8 flex justify-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/dhrGz_Zy77I"
      title="Musical Note Detector Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg shadow-xl"
    ></iframe>
  </div>

 
</section>


      {/* World of Engineering Project Section */}
<section id="project2" className="py-20 px-6 bg-gradient-to-br from-blue-100 to-purple-200 text-gray-900 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6">Electrostatic Air Purifier – World of Engineering</h2>
    <p className="text-lg mb-8 leading-relaxed">
As part of the World of Engineering course, I designed an innovative air purifier based on electrostatic precipitation.
      This project helped me explore environmental engineering and interdisciplinary problem-solving.    </p>

    {/* Reflection Essay Button */}
    <a
      href="/woe.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition mb-10"
    >
      📖 Read About My Learnings
    </a>

    {/* Project Video */}
    <p className="text-sm text-indigo-900 mt-4 italic mb-10">
  Here’s a commercial video our team designed to explain the concept and impact of our Air Purifier project.
</p>
    {/* YouTube Embed */}
  <div className="mb-8 flex justify-center">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5jY7eFScu9E"
      title="Electrostatic Air Purifier Commercial"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg shadow-xl"
    ></iframe>
  </div>
  </div>
</section>


      {/* DIP Project Section */}
<section id="project3" className="py-32 px-6 bg-gradient-to-br from-purple-800 to-indigo-900 text-white text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-extrabold mb-4 animate-fade-in-down tracking-wide">Eklavya De-Trip Hurdles (DIP Project)</h2>
    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-indigo-100">
      In the DIP course, we designed a safer athletic hurdle for amateur runners to reduce injury risks. I learned the value of user research, rapid prototyping, and thoughtful product design through hands-on teamwork and testing.
    </p>

    <a
      href="/DIP-compressed.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 mb-10 rounded-full font-semibold shadow-lg transition duration-300"
    >
      📄 Here's our team report!!
    </a>
    <p className="text-sm text-indigo-200 mt-4 italic mb-10">Watch the commercial our team created to showcase the innovation.</p>
  </div>

    <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <video
        className="w-full max-w-3xl mx-auto rounded-xl shadow-lg"
        controls
        poster="/DIPTN.png" // Add a thumbnail image as dip-thumbnail.png in public/
      >
        <source src="/DIP.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    
</section>
{/* GeoPandas Project Section */}
<section id="project4" className="py-24 px-6 bg-gradient-to-br from-green-100 to-blue-50 text-gray-900 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-green-700">Mapping with GeoPandas</h2>
    <p className="text-lg mb-6 leading-relaxed">
      In this project, I explored <strong>GeoPandas</strong>, a powerful Python library that simplifies geospatial data analysis. I used it to map, visualize, and analyze geographic patterns, gaining insights from spatial datasets in a hands-on way.
      <br /><br />
      This helped me understand the utility of GIS tools and data visualization in real-world decision making.
    </p>

    {/* Blog Button */}
    <a
      href="/PSDV.html"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition mb-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      📖 Read Full Blog Article
    </a>

    {/* YouTube Video */}
    <div className="mt-8 flex justify-center">
      <iframe
        width="720"
        height="405"
        src="https://www.youtube.com/embed/dVzKKptU888"
        title="GeoPandas Utility Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  </div>
</section>



       <section
  id="contact"
  className="py-24 bg-gradient-to-br from-blue-600 to-purple-500 text-white px-8 text-center min-h-screen"
  data-aos="zoom-in"
>

        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          I'd love to connect! Reach out via email or follow me on social media.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-6 text-lg">
          <a href="mailto:prabhanshuchouhan34@gmail.com" className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-pink-100 transition font-semibold">
            <FaEnvelope /> Email
          </a>
           <a href="https://github.com/PrabhanshuChouhan" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-pink-100 transition font-semibold">
            <FaGithub /> Github
          </a>
          <a href="https://www.instagram.com/prabhanshu_734/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-pink-100 transition font-semibold">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/prabhanshu-chouhan-860bb3322/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 py-3 px-6 rounded-full shadow-md hover:bg-pink-100 transition font-semibold">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>
      {showTopButton && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 z-50"
    title="Back to Top"
  >
    ↑ Top
  </button>
)}

    </div>
  );
}

export default App;
