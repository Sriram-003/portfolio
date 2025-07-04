
const certificates = [
  {
    name: "AI for Everyone",
    platform: "Coursera",
    date: "March 2023",
    link: "#", // add actual link
  },
  {
    name: "Full Stack Web Development",
    platform: "Udemy",
    date: "Jan 2023",
    link: "#",
  },
  {
    name: "Deep Learning Specialization",
    platform: "Coursera - Andrew Ng",
    date: "May 2023",
    link: "#",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen  dark:bg-black text-gray-900 dark:text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:scale-105 transform transition-all"
          >
            <h3 className="text-lg font-semibold">{cert.name}</h3>
            <p className="text-sm text-blue-600">{cert.platform}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300">{cert.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
