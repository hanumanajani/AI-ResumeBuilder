import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-base-100 text-base-content dark:text-base-content min-h-screen flex flex-col justify-center items-center px-6">
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-8 animate-fadeIn">
        Contact Me
      </h1>
      <p className="text-lg mb-12 text-center max-w-xl animate-slideUp">
        I’d love to connect with you! Whether it’s about collaboration,
        opportunities, or just tech discussions, feel free to reach out through
        any of the platforms below.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {/* Email */}
        <a
          href="mailto:hanumanaram2120@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="card bg-base-200 dark:bg-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fadeIn animate-delay-100"
        >
          <div className="card-body items-center text-center">
            <FaEnvelope className="text-5xl text-primary mb-4 animate-bounce" />
            <h3 className="card-title">Email</h3>
            <p className="break-all">hanumanaram2120@gmail.com</p>
          </div>
        </a>

        {/* GitHub */}
        {/* GitHub */}
<a
  href="https://github.com/hanumanajani"
  target="_blank"
  rel="noopener noreferrer"
  className="card bg-base-200 dark:bg-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fadeIn animate-delay-200"
>
  <div className="card-body items-center text-center">
    <FaGithub className="text-5xl text-black dark:text-white mb-4 animate-bounce" />
    <h3 className="card-title">GitHub</h3>
    <p>/hanumanajani</p>
  </div>
</a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hanumana-ram-21b492216/"
          target="_blank"
          rel="noopener noreferrer"
          className="card bg-base-200 dark:bg-gray-800 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fadeIn animate-delay-300"
        >
          <div className="card-body items-center text-center">
            <FaLinkedin className="text-5xl text-blue-600 mb-4 animate-bounce" />
            <h3 className="card-title">LinkedIn</h3>
            <p>Hanumana Ram</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
