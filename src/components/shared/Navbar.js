import Link from "next/link";


const Navbar = () => {


const navLinkStyles = <>
<li className="text-gray-600 font-bold hover:text-blue-500 transition-all duration-300"><Link href={'/'}>Home</Link></li>
<li className="text-gray-600 font-bold hover:text-blue-500 transition-all duration-300"><Link href={'/'}>All Books</Link></li>
<li className="text-gray-600 font-bold hover:text-blue-500 transition-all duration-300"><Link href={'/'}>Profile</Link></li>
</>

    return (
        <div className="bg-base-100 shadow-sm">
            
<div className="navbar w-11/12 mx-auto">
  <div className="navbar-start gap-2 md:gap-0">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinkStyles}
      </ul>
    </div>
    <Link href={'/'} className="text-2xl md:text-3xl font-bold">BookFlow</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinkStyles}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-sm md:btn-md btn-primary">Login</a>
  </div>
</div>

        </div>
    );
};

export default Navbar;