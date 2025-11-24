'use client';
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import blogs from '../blogs.json';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export default function BlogPage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <PageWrapper>
        <div className="text-center py-20 text-gray-800 dark:text-gray-200">
          <h1 className="text-4xl font-bold">Blog Not Found</h1>
          <p className="mt-4">Sorry, the blog you are looking for does not exist.</p>
        </div>
      </PageWrapper>
    );
  }

  const { title, description, keywords, author, sections } = blog;

  return (
    <>
      <Head>
        <title>{title} | {author}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Head>

      <PageWrapper>
        <div className="max-w-6xl mx-auto py-12 px-4 md:py-20">
          {/* Back Button */}
          <Link
            href={'/blogs'}
            className="mb-6 px-4 py-2 bg-sky-100 dark:bg-sky-700 text-sky-800 dark:text-white rounded-lg hover:bg-sky-200 dark:hover:bg-sky-600 transition inline-block"
          >
            ← All Blogs
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Main Content */}
            <div className="flex-1 bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg border border-sky-100 dark:border-gray-700">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                {title}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-10">{description}</p>

              <div className="space-y-8">
                {sections.map((section, idx) => (
                  <div key={idx}>
                    {section.heading && (
                      <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">
                        {section.heading}
                      </h2>
                    )}
                    {section.content && <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">{section.content}</p>}
                    {section.list && (
                      <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-2">
                        {section.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar / Archives */}
            <aside className="w-full lg:w-1/3">
              <div className="sticky top-24 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border-l-4 border-sky-500">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Archives</h3>
                <ul className="space-y-2">
                  {blogs.map((b) => (
                    <li key={b.id}>
                      <Link
                        href={`/blogs/${b.slug}`}
                        className={`block px-3 py-2 rounded-lg transition ${
                          b.slug === slug
                            ? 'bg-sky-600 text-white font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {b.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
