import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-0 bg-transparent bg-opacity-30 backdrop-blur-[4px] text-white absoulte">
      {/* Left Section */}

      {/* Center Section */}
      <div className="flex mx-auto space-x-7 p-4 font-[500]">
        <div className="flex space-x-7">
          {/* Replace with next/link or <a> */}
          <button className="text-white font-[800] text-xl pr-64 hover:text-white transition ease-in-out">ACME</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">About</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Blog</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Customers</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Pricing</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Enterprise</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Changelog</button>
          <button className="text-zinc-300 text-sm hidden sm:block hover:text-white transition ease-in-out">Docs</button>
        </div>
        <div className="pl-[10rem] items-center hidden sm:flex">
          <button className="mr-4 text-sm font-semibold text-zinc-300 hover:text-white transition ease-in-out">Sign In</button>
          <button className="bg-white text-black px-5 text-sm py-3 hover:opacity-80 transition ease-in-out rounded-full inline-flex items-center font-semibold">
            Get Started <FaAngleRight className="ml-1" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex space-x-4"></div>
    </nav>
  );
};

export default Navbar;
