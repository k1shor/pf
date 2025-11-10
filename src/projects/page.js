// 7. app/projects/page.js
import Head from 'next/head';
import PageWrapper from '@/components/PageWrapper';
import BackToHome from '@/components/BackToHome';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Kishor Munikar</title>
                <meta name="description" content="Discover Kishor Munikar's portfolio projects." />
            </Head>
            <PageWrapper>
                <div className="bg-purple-50 p-6 rounded-xl">
                    <h1 className="text-3xl font-bold mb-4">Projects</h1>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Resume Builder with PDF/DOCX export</li>
                        <li>POS-enabled E-Commerce Dashboard</li>
                        <li>Student Portal using Laravel + Vue</li>
                        <li>Portfolio Website with interactive UI</li>
                    </ul>
                    <BackToHome />
                </div>
            </PageWrapper>
        </>
    );
}
