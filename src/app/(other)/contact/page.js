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
  FaGlobe
} from 'react-icons/fa';
import Link from 'next/link';

export default function ExperienceProjectsContact() {
  return (
    <>
      <Head>
        <title>Experience, Projects & Contact | Kishor Munikar</title>
        <meta name="description" content="Explore my experience, notable projects, and ways to get in touch." />
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
              className="grid md:grid-cols-2 gap-10"
            >
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
                  <FaEnvelope className="text-indigo-600" /> Contact
                </h2>
                <div className="space-y-4 text-lg">
                  <p className="flex items-center gap-3">
                    <FaEnvelope /> k1shor.mkar@gmail.com
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhone /> +977-9860113289
                  </p>
                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt /> Kathmandu, Nepal
                  </p>
                  <p className="flex items-center gap-3">
                    <FaGlobe /> <Link href="https://indexithub.com" target="_blank" className="underline">indexithub.com</Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaGithub /> <Link href="https://github.com/k1shor" target="_blank" className="underline">github.com/k1shor</Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaLinkedin /> <Link href="https://www.linkedin.com/in/kishor-munikar-94aa4937/" target="_blank" className="underline">linkedin.com/in/k1shor</Link>
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Send Me a Message</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" />
                  <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" />
                  <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 resize-none"></textarea>
                  <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition">Send Message</button>
                </form>
              </div>
            </motion.section>

            {/* Map Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-semibold mb-6">Find Me Here</h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6695183990457!2d85.31682587454861!3d27.6969294761981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1999f1894a87%3A0xb1724897ad8b151!2sGM%20Complex%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1710662000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
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
