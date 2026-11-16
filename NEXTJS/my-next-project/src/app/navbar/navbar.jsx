import Link from "next/link";

export default function Navbar() {
  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyWebsite
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>

            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Welcome to MyWebsite
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Build something amazing with Next.js.
        </p>

        <Link
          href="/about"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}