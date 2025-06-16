// import { GrMail } from "react-icons/gr";
// import { MdArrowForward, MdCall } from "react-icons/md";
// import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import {  RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import chatbotImg from '/images/chatbot1.png';
import aiGameImg from '/images/aigame.png';
import movRecImg from '/images/mov_rec.jpg';
import aiFaceImg from '/images/ai_face.jpg';
import bankingImg from '/images/banking.jpg';
import cmsImg from '/images/cms.jpeg';
// import deepfakeImg from './images/Deepfake.jpg';


const content = {
    nav: [
      {
        link: "#home",
        icon: TbSmartHome,
      },
      {
        link: "#skills",
        icon: BiUser,
      },
      {
        link: "#projects",
        icon: RiProjectorLine,
      },
      {
        link: "#contact",
        icon: MdOutlinePermContactCalendar,
      },
    ],
    projects:[
      { title: 'Deepfake Detection for Secure Online video conference',
        image: './images/Deepfake.jpg',
        description: 'This is a deepfake detection system for secure the video conference by idenetify the fake persons on the meetings.', 
        link: '/projects/project1' 
      },
      { title: 'Financial ChatBot',
        image: chatbotImg,
        description: 'It is Rule based Chatbot.It give the response based on the user given input.I developed in Flask as the frontend framework.', 
        link: '/projects/project1' 
      },
      { title: 'Unbeatable Ai TIC TAC TOE Game',
        image:  aiGameImg,
        description: 'Description of project 2', 
        link: '/projects/project2' 
      },
      { title: 'Movie Recommendation System', 
        image:movRecImg,
        description: 'Description of project 2', 
        link: '/projects/project2' 
      },
      { title: 'Human Face detect', 
        image: aiFaceImg,
        description: 'Description of project 2', 
        link: '/projects/project2' 
      },
      { title: 'Simple banking Application', 
        image: bankingImg,
        description: 'Description of project 2', 
        link: '/projects/project2' 
      },
      { title: 'Compliant Management System', 
        image : cmsImg,
        description: 'Description of project 2',  
        link: '/projects/project2' 
      }
    ]
}

export default content