import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="px-6 py-3 bg-purple-600 rounded-lg text-white font-medium">
          Return to Home
        </a>
      </Link>
    </div>
  );
} 