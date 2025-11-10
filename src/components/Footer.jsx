'use client';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

export default function Footer() {
    return (
    <footer className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="mb-3 sm:mb-0 text-sm">
        © {new Date().getFullYear()} Kishor Munikar. All rights reserved.
      </div>

      <div className="flex items-center gap-6">
        {/* Social Media Links */}
        <a
          href="https://www.facebook.com/dE5Tructi0n/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaFacebookF size={20} />
        </a>
        
        <a
          href="https://www.linkedin.com/in/kishor-munikar-94aa4937/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 dark:hover:text-blue-500 transition"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/k1shor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>

        {/* Email and Phone */}
        <a
          href="mailto:k1shor.mkar@gmail.com"
          aria-label="Email"
          className="hover:text-red-600 dark:hover:text-red-400 transition"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="tel:+9779860113289"
          aria-label="Phone"
          className="hover:text-green-600 dark:hover:text-green-400 transition"
        >
          <FaPhone size={20} />
        </a>

        
      </div>
    </footer>
  );
}
