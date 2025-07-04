import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Timeline Data
const educationData = [
  {
    title: "B.E in Computer Science and Engineering",
    subtitle: "Einstein College of Engineering",
    date: "2021 - 2025",
    description: "CGPA: 8.32",
  },
  {
    title: "Higher Secondary",
    subtitle: "Tilak Vidyalaya Higher Secondary School",
    description: "Percentage: 93%",
  },
  {
    title: "SSLC",
    subtitle: "Bharathiyar Governement Higher Secondary School",
    description: "Percentage: 93.8%",
  }
];

const internshipData = [
  {
    title: "Fullstack developer Intern",
    subtitle: "Digisailor Pvt Ltd",
    date: "Jun 2024 - Jul 2024",
    description: "Gained hands-on experience with Next.js, Node.js, and Firebase, and developed APIs using Expressto build and deploy dynamic web applications.",
  },
  {
    title: "AI Developer Intern",
    subtitle: "Codsoft",
    date: "Mar 2024 - Jun 2024",
    description: "Developed AI models and algorithms, gaining expertise in machine learning, data analysis, andmodel deployment to solve real-world problems",
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const introRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    anime({
      targets: introRef.current,
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  useEffect(() => {
    anime({
      targets: contentRef.current,
      translateX: [-30, 0],
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutExpo",
    });
  }, [activeTab]);

  const timelineItems = activeTab === "education" ? educationData : internshipData;

  return (
    <div className="min-h-screen  dark:bg-black text-gray-900 dark:text-white p-6">
      {/* 👤 Intro Section */}
      <div ref={introRef} className="max-w-3xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold mb-3">About Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I’m a passionate tech enthusiast with experience in AI, ML, and full-stack development.
          I love solving real-world problems with technology and constantly learning new tools.
        </p>
      </div>

      {/* 🗂️ Tabs */}
      <div className="flex justify-center mb-6 relative">
  {["education", "internship"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`relative px-6 py-2 text-lg font-semibold transition-all duration-300 focus:outline-none  
        ${
          activeTab === tab
            ? "text-blue-600"
            : "text-black dark:text-white"
        }`}
    >
      {tab === "education" ? "Education" : "Internship"}
      {/* underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ease-in-out border-none
          ${
            activeTab === tab ? "bg-blue-600 scale-x-20 border-none" : "bg-black scale-x-0"
          } origin-left`}
      ></span>
    </button>
  ))}
</div>


      {/* 🧾 Timeline */}
      <div ref={contentRef}  className="relative border-l-4 border-blue-600 ml-4 max-w-3xl mx-auto">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-10 ml-6 relative" data-aos='fade-right'
          id ={`timeline-item-${index}`}>
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2.5"></div>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <span className="text-sm font-medium text-blue-600">{item.subtitle}</span>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.date}</p>
              <p className="mt-2 text-gray-800 dark:text-gray-200 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
