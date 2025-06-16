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
import deepfakeImg from '/images/Deepfake.jpg';


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
        image: deepfakeImg,
        description: 'This is a deepfake detection system for secure the video conference by idenetify the fake persons on the meetings.', 
        link: '/projects/project1' 
      },
      { title: 'Financial ChatBot',
        image: chatbotImg,
        description: 'Developed  a Deepfake detection system for secure online video conference, using Deep learning techniques. Deployed as a web browser extension for real time deepfake monitoring.', 
        link: '/projects/project1' 
      },
      { title: 'Unbeatable Ai TIC TAC TOE Game',
        image:  aiGameImg,
        description: 'Created an AI-powered Tic-Tac-Toe bot that uses a Minimax Algorithm for unbeatable gameplay.', 
        link: '/projects/project2' 
      },
      { title: 'Movie Recommendation System', 
        image:movRecImg,
        description: 'This project recommend movie name that the user search on the text box. The system suggest name by similarity of the input movie name.', 
        link: '/projects/project2' 
      },
      { title: 'Human Face detect', 
        image: aiFaceImg,
        description: 'This project detect the human face by using Haar-Cascade face detection model.', 
        link: '/projects/project2' 
      },
      { title: 'Simple banking Application', 
        image: bankingImg,
        description: 'This Java project is used for simple banking operations like Create account with password authenication, Maintain the account each user with JDBC database connectivity.', 
        link: '/projects/project2' 
      },
      { title: 'Compliant Management System', 
        image : cmsImg,
        description: 'This project is used for get the suggestion of employ, it maintain the suggestion with the sql-lite backend database. ',  
        link: '/projects/project2' 
      }
    ]
}

export default content