// app/components/common/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      <div className="flex items-center ml-2">
        <img src="/images/Somraj.svg" alt="Logo" className="h-14" />
      </div>

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

      <Link href="/images.Somraj.svg">
        <button className="bg-indigo-500 hover:bg-green-800 text-white font-bold py-2 px-4 mr-4 rounded-[15px] w-[133px] h-[51px]">
          Get Resume
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
