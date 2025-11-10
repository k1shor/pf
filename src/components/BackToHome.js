import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function BackToHome() {
  return (
    <Link
      href="/"
      className="px-5 py-2 rounded-lg shadow border border-gray-400 text-gray-700 hover:bg-gray-200 transition duration-300 flex items-center gap-2"
    >
      <FaArrowLeft />
      Back to Home
    </Link>
  );
}
