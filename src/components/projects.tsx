import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'aos/dist/aos.css'; // Import AOS styles
import content from './Content'; // Ensure the path is correct
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from 'aos';

// Initialize AOS
AOS.init();
interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

const Project = () => {
  const { projects } = content;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // State to manage popup visibility

  // Function to handle opening the popup
  const openPopup = (project: Project) => {
    setSelectedProject(project);
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2.5}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{ paddingBottom: '50px' }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '300px',
              height: '400px',
              padding: '20px',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
            }}
            onClick={() => openPopup(project)} // Open popup on click
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '15px',
              }}
            />
            <h3>{project.title}</h3>
            <p style={{ fontSize: '14px', color: '#555', margin: '10px 0' }}>
              {project.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          data-aos="zoom-in" // AOS animation for popup
        >
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-[800px]"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginRight: '20px',
              }}
            />

            {/* Project Details */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                style={{
                  textDecoration: 'none',
                  color: '#007BFF',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  border: '1px solid #007BFF',
                  borderRadius: '5px',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
