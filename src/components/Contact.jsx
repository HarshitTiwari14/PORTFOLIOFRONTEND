import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-purple-400 mb-10">Contact Me</h1>

      <div className="space-y-8 text-lg w-full max-w-xl">

        <div className="flex items-center gap-4">
          {/* Phone SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 5h2l.4 2m2.6 0a11.038 11.038 0 015.6 5.6l2-1c.9-.3 1.9.4 1.9 1.4v3c0 1.1-1 2-2.1 2-6.6 0-12-5.4-12-12 0-1.1.9-2.1 2-2.1h3c1 0 1.7 1 1.4 1.9l-1 2z" />
          </svg>
          <span>+91 6264509973</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Email SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0l-4-4m4 4l-4 4M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6" />
          </svg>
          <span>harshittiwari0014@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Instagram SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8a4 4 0 110 8 4 4 0 010-8zm6.5-1a1.5 1.5 0 11-3.001.001A1.5 1.5 0 0118.5 7zM12 10a2 2 0 100 4 2 2 0 000-4z"/>
          </svg>
          <a
            href="https://www.instagram.com/harshit_tiwari__14/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @harshit_tiwari__14
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* LinkedIn SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3C3.34 3 2 4.34 2 5.98s1.34 2.98 2.98 2.98c1.64 0 2.98-1.34 2.98-2.98S6.62 3 4.98 3zM2 8.98h6V22H2V8.98zm7.982 0H17.9v1.798h.082c.79-1.498 2.724-2.998 5.598-2.998 5.992 0 7.1 3.998 7.1 9.198V22h-6v-6.098c0-1.45-.028-3.298-2.006-3.298-2.006 0-2.314 1.57-2.314 3.194V22h-6V8.98z"/>
          </svg>
          <a
            href="https://www.linkedin.com/in/harshit-tiwari-a928a3258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/harshit_tiwari
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
