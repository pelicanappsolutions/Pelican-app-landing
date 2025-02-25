import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 flex flex-col items-center justify-center px-6">
      {/* Company Logo */}
      <div className="mb-4">
        <Image
          src="/Pelican-app-logo.png" // This looks inside /public folder
          alt="Pelican App Solutions Logo"
          width={150} // Adjust based on your logo's dimensions
          height={150}
          priority
        />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6 text-center tracking-tight">
        Pelican App Solutions
      </h1>

      {/* Description */}
      <p className="text-lg text-center text-gray-700 max-w-2xl mb-8 leading-relaxed">
        We build simple, clutter-free applications tailored for small businesses.
        Helping you operate smoothly without the complexity of bloated software.
      </p>

      {/* Contact Us Button */}
      <a
        href="mailto:contact@pelicanappsolutions.com"
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105 mb-4"
      >
        Contact Us
      </a>

      {/* Target App Button */}
      <a
        href="https://yourappurl.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
      >
        TARGET APP
      </a>
    </main>
  );
}
