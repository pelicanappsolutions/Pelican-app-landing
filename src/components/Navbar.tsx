import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Pelican App Solutions
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
