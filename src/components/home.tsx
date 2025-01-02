import { useEffect, useState } from 'react';

const typingPhrases = ["Software Developer", "UI Designer", "Graphics Designer","Web developer"];
const Home =()=>{
    const [currentPhrase, setCurrentPhrase] = useState(0);
  const [typing, setTyping] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyping(typingPhrases[currentPhrase].slice(0, index + 1));
      index++;

      if (index === typingPhrases[currentPhrase].length) {
        setTimeout(() => {
          index = 0;
          setCurrentPhrase((prev) => (prev + 1) % typingPhrases.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentPhrase]);
    return(
        // <div className='m-14 grid'>
        //     <div className='grid-col-1'>
        //      <h1 className="text-4xl p-20 font-bold">I'm a {typing}</h1> 
        //      </div>
        //      <div className='grid-cols-1 border-none rounded-xl'>
        //      <img src={"/pro.jpg"} alt='My image' width={"300"} height={"300"}/>
        //      </div>
        // </div>
        <div className="min-h-screen flex items-center justify-center w-full" id='home'>
        <div className="container mx-auto p-5 flex flex-col md:flex-row items-center">
          {/* Left Side: Text */}
          <div className="text-left w-full md:w-1/2">
            <h1 className="text-4xl text-gray-700 font-bold  mb-4">
            I&apos;m a {typing}
            </h1>
            <p className="text-gray-600 mb-6">
            Innovative and results-driven Computer Science student with apassion for creating impactful digital solutions. With a strongfoundation in full stack web development, Artificial Intelligence.Myexpertise in cutting-edge technologies like Next.js, Node.js,Firebase, and Salesforce.com enables me to tackle complexchallenges with creativity and precision.
            </p>
            {/* <button className="bg-blue-500 m-2 text-white px-4 py-2 rounded-full hover:bg-blue-600"> */}
            <div>
            <a href="https://linkedin.com/in/sriram-v-241888242" target="_blank">
            <button>            
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
            </button></a>
            <a href="https://github.com/Sriram-003" target="_blank">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 32 32">
<path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
</svg>
            </button></a>
            <a href="https://techie-tides.blogspot.com" target="_blank">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#ff6f00" d="M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26 C42,39.761,39.761,42,37,42z"></path><path fill="#fff" d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8 c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5 c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"></path>
</svg>
            </button></a> 
            </div>
             
          </div>
  
          <div className="w-full flex items-center justify-center md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img
            src="./src/assets/profile.jpg"
            alt="My image"
            width={400}
            height={400}
            className="rounded-3xl drop-shadow-2xl"
          />
        </div>
        </div>
      </div>
    )
}
export default Home