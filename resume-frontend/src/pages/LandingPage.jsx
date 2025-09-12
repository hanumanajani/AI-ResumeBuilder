import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100 transition-colors duration-500">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 flex items-center transition-colors duration-500">
        <div className="hero-content text-center animate-fadeIn">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-6 animate-slideUp">
              Build Your Professional Resume in Minutes
            </h1>
            <p className="py-4 text-lg mb-6 animate-slideUp animate-delay-200">
              Describe your skills and experience, and our AI will craft a tailored, job-ready resume that stands out.
            </p>
            <Link
              className="btn btn-primary btn-lg animate-bounce hover:scale-105 transition-transform duration-300"
              to="/generate-resume"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Zoom-in Cards */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl hover:scale-125 transition-transform duration-500 animate-fadeIn animate-delay-100">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-pulse">🤖</div>
                <h3 className="card-title">AI-Powered Resume</h3>
                <p>
                  Our AI evaluates your experience and crafts a polished resume highlighting your strengths.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl hover:scale-125 transition-transform duration-500 animate-fadeIn animate-delay-200">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-pulse">⚡</div>
                <h3 className="card-title">Time-Efficient</h3>
                <p>
                  Generate a professional resume in minutes, saving hours of manual formatting and editing.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl hover:scale-125 transition-transform duration-500 animate-fadeIn animate-delay-300">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-pulse">🎯</div>
                <h3 className="card-title">Job-Ready Focus</h3>
                <p>
                  Highlight the skills and experience recruiters care about for your targeted roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fadeIn">
            What Professionals Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-xl p-6 hover:scale-105 transition-transform duration-300 animate-fadeIn animate-delay-100">
              <p>
                "AI Resume Maker produced a polished resume that truly reflects my professional experience. I received interview calls within days!"
              </p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">mike smith</h4>
                  <p>Senior Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl p-6 hover:scale-105 transition-transform duration-300 animate-fadeIn animate-delay-200">
              <p>
                "The AI-generated resume highlighted my core competencies perfectly. It’s a great tool for professionals aiming to impress recruiters."
              </p>
              <div className="flex items-center mt-4">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Janny smith</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-base-100 text-center">
        <div className="container mx-auto px-4 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-6 animate-slideUp">Ready to Land Your Dream Job?</h2>
          <p className="mb-8 text-lg animate-slideUp animate-delay-100">
            Professionals around the world have successfully secured interviews with AI-crafted resumes. Join them today!
          </p>
          <Link
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 animate-bounce"
            to="/generate-resume"
          >
            Create My Resume
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Create professional resumes efficiently with AI assistance.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <a href="#" className="link link-hover">About</a>
              <a href="#" className="link link-hover">Features</a>
              <a href="#" className="link link-hover">Contact</a>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="link link-hover">Privacy Policy</a>
              <a href="#" className="link link-hover">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

