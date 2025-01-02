
const Contact = () => (
  //   <section id="contact" className="bg-black text-white py-12">
  //   <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
  //   <div className="flex flex-col items-center space-y-8">
  //     <div className="flex items-center space-x-3">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m0 4l-4 4" />
  //       </svg>
  //       <p className="text-lg">
  //         Email: <a href="mailto:sriramvenkat2304@gmail.com" className="text-blue-400 hover:underline">sriramvenkat2304@gmail.com</a>
  //       </p>
  //     </div>
      
  //     <div className="flex items-center space-x-3">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M16 8c0-1.1-.9-2-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2h6c1.1 0 2-.9 2-2V8z" />
  //       </svg>
  //       <p className="text-lg">
  //         LinkedIn: <a href="https://linkedin.com/in/sriram-v-241888242" className="text-blue-400 hover:underline">sriram-v-241888242.in</a>
  //       </p>
  //     </div>
  
  //     <div className="flex items-center space-x-3">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h3M3 14h3M3 6h3M6 6l12 12M12 12l12-12M12 12L6 6M6 18h3" />
  //       </svg>
  //       <p className="text-lg">
  //         Phone: <a href="tel:+91 000000000" className="text-blue-400 hover:underline">+91 000000000</a>
  //       </p>
  //     </div>
  
  //     <div className="flex items-center space-x-3">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h3M3 14h3M3 6h3M6 6l12 12M12 12l12-12M12 12L6 6M6 18h3" />
  //       </svg>
  //       <p className="text-lg">
  //         GitHub: <a href="https://github.com/yourgithub" className="text-blue-400 hover:underline">github.com/yourgithub</a>
  //       </p>
  //     </div>
  
  //     <div className="flex items-center space-x-3">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  //         <path strokeLinecap="round" strokeLinejoin="round" d="M16 8c0-1.1-.9-2-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2h6c1.1 0 2-.9 2-2V8z" />
  //       </svg>
  //       <p className="text-lg">
  //         Blogger: <a href="https://techie-tides.blogspot.com" className="text-blue-400 hover:underline">techie-tides.blogspot.com</a>
  //       </p>
  //     </div>
  //   </div>
  // </section>
  <div className="bg-gray-900 text-white px-10 py-16">
  <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">Get In Touch</h1>
  
  <div className="flex flex-col items-center space-y-6">
  
    <div className="flex flex-col items-center space-y-2 text-lg">
    <div className="flex items-center space-x-2">
  <a href="mailto:sriramvenkat2304@gmail.com" className="hover:text-blue-400 transition flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon>
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path>
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
    </svg>
    <span className="ml-2">sriramvenkat2304@gmail.com</span>
  </a>
</div>
<div className="flex items-center space-x-2">
  <a href="tel:+918190814835" className="flex items-center hover:text-blue-400 transition">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="mr-2">
      <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path>
      <path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
    </svg>
    +91 8190814835
  </a>
</div>
    </div>

    {/* Social Links */}
    <div className="flex space-x-8 ">
      <a href="https://linkedin.com/in/sriram-v-241888242" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499C12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36L36 36z"/></svg>
      </a>
      <a href="https://github.com/Sriram-003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.386c.601.11.82-.258.82-.577c0-.285-.011-1.039-.015-2.039c-3.34.723-4.043-1.609-4.043-1.609c-.547-1.387-1.332-1.758-1.332-1.758c-1.09-.742.082-.727.082-.727c1.203.086 1.836 1.235 1.836 1.235c1.071 1.836 2.809 1.304 3.492.999c.109-.777.422-1.304.762-1.605c-2.664-.301-5.465-1.332-5.465-5.929c0-1.313.469-2.383 1.235-3.223c-.124-.302-.535-1.52.118-3.168c0 0 1.007-.32 3.3 1.23c.957-.266 1.984-.398 3.003-.402c1.019.004 2.046.136 3.003.402c2.293-1.55 3.3-1.23 3.3-1.23c.656 1.648.244 2.866.119 3.168c.768.84 1.235 1.91 1.235 3.223c0 4.609-2.804 5.625-5.475 5.922c.433.374.817 1.102.817 2.222c0 1.605-.014 2.898-.014 3.293c0 .32.215.693.825.575C24.563 25.8 28 21.3 28 16c0-6.629-5.371-12-12-12Z"/></svg>
      </a>
      <a href="https://techie-tides.blogspot.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 transition hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><path fill="#ff6f00" d="M37,42H11c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h26c2.761,0,5,2.239,5,5v26C42,39.761,39.761,42,37,42z"/><path fill="#fff" d="M33.5,22h-1c-0.828,0-1.5-0.672-1.5-1.5V20c0-3.866-3.134-7-7-7h-4c-3.866,0-7,3.134-7,7v8c0,3.866,3.134,7,7,7h8c3.866,0,7-3.134,7-7v-4.5C35,22.672,34.328,22,33.5,22z M20,19h5c0.553,0,1,0.448,1,1s-0.447,1-1,1h-5c-0.553,0-1-0.448-1-1S19.447,19,20,19z M28,29h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S28.553,29,28,29z"/></svg>
      </a>
    </div>
  </div>
</div>

  
  );
  
  export default Contact;
  