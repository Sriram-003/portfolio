import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import content from './Content';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from 'aos';

AOS.init();

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

const Project = () => {
  const { projects } = content;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openPopup = (project: Project) => setSelectedProject(project);
  const closePopup = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-10 min-h-screen px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      {isMobile ? (
        // ✅ Mobile: Vertical Scroll Layout
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
              onClick={() => openPopup(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      ) : (
       
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
              onClick={() => openPopup(project)}
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
              <p style={{ fontSize: '16px', color: '#555', margin: '10px 0' }}>
                {project.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/*  Popup Modal (Shared) */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" data-aos="zoom-in">
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[800px] overflow-y-auto"
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              maxHeight: '90vh',
            }}
          >
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

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: isMobile ? '100%' : '250px',
                height: isMobile ? '200px' : '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: isMobile ? '20px' : '0',
                marginRight: isMobile ? '0' : '20px',
              }}
            />

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
