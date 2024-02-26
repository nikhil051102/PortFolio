// app/components/common/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-50 p-4 flex items-center justify-between">
      {/* Logo on the left */}
      <div className="flex items-center ml-2">
        <img src="/images/Somraj.svg" alt="Logo" className="h-14" />
      </div>

      {/* Navigation links and Get Resume Button in the middle */}
      <div className="flex space-x-4 font-semibold gap-4 ">
        <Link href="/">
          <p className="text-black">About me</p>
        </Link>
        <Link href="/services">
          <p className="text-black">Services</p>
        </Link>
        <Link href="/portfolio">
          <p className="text-black">Portfolio</p>
        </Link>
        <Link href="/blog">
          <p className="text-black">Blog</p>
        </Link>
      </div>

      {/* Get Resume Button on the right */}
      <Link href="/images.Somraj.svg">
        <button className="bg-purple-600 hover:bg-green-800 text-white font-bold py-2 px-4 mr-2 rounded">
          Get Resume
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
