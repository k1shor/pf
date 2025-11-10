// 4. app/home/page.js
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';

export default function Main() {
  return (
    <>
      <Head>
        <title>Kishor Munikar | Portfolio</title>
        <meta name="description" content="Welcome to the personal space of Kishor Munikar." />
      </Head>
      <PageWrapper>
        <div className="bg-green-50 p-6 rounded-xl">
          <h1 className="text-3xl font-bold mb-4">Kishor Munikar</h1>
          <p>
            I’m a passionate developer based in Nepal, dedicated to building digital products that are both scalable and human-friendly.
          </p>
          <p className="mt-4">
            When I’m not coding, I’m either teaching, learning new tech, or experimenting with design systems.
          </p>
          <BackToHome />
        </div>
      </PageWrapper>
    </>
  );
}

