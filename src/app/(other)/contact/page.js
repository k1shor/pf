'use client';

import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
  };
  return (
    <>
      <Head>
        <title>Contact | Kishor Munikar</title>
        <meta
          name="description"
          content="Connect with Kishor Munikar — Full Stack Developer based in Kathmandu, Nepal. Reach out for collaborations, projects, or mentorship opportunities."
        />
        <meta
          name="keywords"
          content="Kishor Munikar, Full Stack Developer, Kathmandu Developer, MERN Developer, React Developer, Contact, Web Developer Nepal"
        />
        <meta property="og:title" content="Contact | Kishor Munikar" />
        <meta
          property="og:description"
          content="Connect with Kishor Munikar for collaborations, web development projects, or mentorship opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://k1shor.vercel.app/contact" />
        <meta property="og:image" content="/kishor-profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PageWrapper>
        <motion.div
          className="max-w-6xl mx-auto px-6 md:px-12 py-12 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-16">

            {/* Contact Info and Form Side-by-Side */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" /> Contact
                </h2>

                {/* Engaging rephrased paragraph */}
                <p className="mb-6 pl-4 text-justify text-lg text-gray-700 dark:text-gray-300">
                  I’d love to hear from you! Whether you’re looking to collaborate on a project, need guidance on web development, or want to discuss ideas, don’t hesitate to reach out. Let’s create something amazing together!
                </p>

                <div className="space-y-4 text-lg pl-4 text-justify">
                  <p className="flex items-center gap-3">
                    <FaEnvelope /> <span className="ml-1">k1shor.mkar@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhone /> <span className="ml-1">+977-9860113289</span>
                  </p>

                  <p className="flex items-center gap-3">
                    <FaGlobe />{' '}
                    <Link
                      href="https://indexithub.com"
                      target="_blank"
                      className="underline hover:text-indigo-600"
                    >
                      indexithub.com
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaGithub />{' '}
                    <Link
                      href="https://github.com/k1shor"
                      target="_blank"
                      className="underline hover:text-indigo-600"
                    >
                      github.com/k1shor
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaLinkedin />{' '}
                    <Link
                      href="https://www.linkedin.com/in/kishor-munikar-94aa4937/"
                      target="_blank"
                      className="underline hover:text-indigo-600"
                    >
                      linkedin.com/in/k1shor
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaFacebook className="text-blue-600" />{' '}
                    <Link
                      href="https://facebook.com/dE5Tructi0n"
                      target="_blank"
                      className="underline hover:text-indigo-600"
                    >
                      facebook.com/k1shor
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaInstagram className="text-pink-500" />{' '}
                    <Link
                      href="https://instagram.com/k1shor"
                      target="_blank"
                      className="underline hover:text-indigo-600"
                    >
                      instagram.com/k1shor
                    </Link>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Send Me a Message</h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 resize-none focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                  {status && <p className="mt-2 text-gray-700 dark:text-gray-300">{status}</p>}
                </form>
              </div>
            </motion.section>

            {/* Map Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-6 pl-4">Find Me Around Here</h2>

              <div className="rounded-2xl overflow-hidden shadow-xl border dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6695183990457!2d85.31682587454861!3d27.6969294761981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999f1894a87%3A0xb1724897ad8b151!2sGM%20Complex%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1710662000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.section>

            {/* Back to Home */}
            <motion.div
              className="pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <BackToHome />
            </motion.div>
          </div>
        </motion.div>
      </PageWrapper>
    </>
  );
}
