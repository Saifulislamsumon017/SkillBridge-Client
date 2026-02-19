import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EduConnect
        </Link>

        <nav className="flex gap-8 items-center">
          <Link href="/tutors" className="hover:text-blue-600">
            Tutors
          </Link>
          <Link
            href="/login"
            // className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
