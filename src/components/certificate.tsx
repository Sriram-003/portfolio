
const certificates = [
  {
    name: "Data Visualization by Accenture",
    platform: "Forage",
    date: "June 2024",
    link: "#", 
  },
  {
    name: "Gen Ai by BCGX",
    platform: "Forage",
    date: "July 2024",
    link: "#",
  },
  {
    name: "Sentiment Analysis using Python",
    platform: "Great Learning",
    date: "Sept 2023",
    link: "#",
  },
  {
    name: "Aritifical intelligence projects",
    platform: "Great Learning",
    date: "Sept 2023",
    link: "#",
  },
  {
    name: "Web Development",
    platform: "Sololearn",
    date: "Aug 2023",
    link: "#",
  },
  {
    name: "Figma",
    platform: "Lets Upgrade",
    date: "Apirl 2024",
    link: "#",
  },
];

const Certificates = () => {
  return (
    <section id='certificate'>
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
    </section>
    
  );
};

export default Certificates;
