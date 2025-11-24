'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import blogs from './blogs.json';

export default function BlogList() {
  return (
    <>
      <Head>
        <title>All Blogs | Kishor Munikar</title>
        <meta
          name="description"
          content="Explore all blogs by Kishor Munikar on programming, software development, and tech topics."
        />
        <meta
          name="keywords"
          content="Kishor Munikar blogs, programming, software development, parallel programming, Head of Engineering, web development"
        />
        <meta name="author" content="Kishor Munikar" />
      </Head>

      <PageWrapper>
        <div className="max-w-6xl mx-auto py-12 px-4 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
            All Blogs
          </h1>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="block p-6 rounded-2xl shadow-lg hover:shadow-xl transition border border-sky-100 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <h2 className="text-2xl font-semibold mb-2 text-sky-600">{blog.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{blog.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
