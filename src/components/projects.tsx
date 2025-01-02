const projects = [
    { title: 'Financial ChatBot',
      image:'/chatbot1.png', 
      description: 'It is Rule based Chatbot.It give the response based on the user given input.I developed in Flask as the frontend framework.', 
      link: '/projects/project1' 
    },
    { title: 'Unbeatable Ai TIC TAC TOE Game',
      image:'./src/assests/aigame.png',  
      description: 'Description of project 2', 
      link: '/projects/project2' 
    },
    { title: 'Movie Recommendation System', 
      image:'/mov_rec.jpg', 
      description: 'Description of project 2', 
      link: '/projects/project2' 
    },
    { title: 'Human Face detect', 
      image:'/ai_face.jpg', 
      description: 'Description of project 2', 
      link: '/projects/project2' 
    },
    { title: 'Simple banking Application', 
      image:'/banking.jpg', 
      description: 'Description of project 2', 
      link: '/projects/project2' 
    },
    { title: 'Compliant Management System', 
      image:'/cms.jpeg', 
      description: 'Description of project 2',  
      link: '/projects/project2' 
    }
    // Add more projects
  ];
  
  const Project = () => (
    <section id="projects" className="py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center  mb-8">Projects</h2>
      <div className="ml-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="w-full h-48 relative mb-4 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              style={{
                objectFit:"contain",
                borderRadius:"20px"
              }}
            />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Project;
  