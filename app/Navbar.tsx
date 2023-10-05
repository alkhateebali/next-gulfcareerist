import Image from 'next/image'
import logo from '../public/img/logo.svg'
import Link from 'next/link';

// bg-base-100 shadow-md text-zinc-950"
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm text-zinc-950">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={'/'}>Home</Link></li>
        <li><a>Remote Jobs </a></li>
        <li><a>Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <span className="normal-case text-3xl text-sky-950"><Image src={logo} alt="Gulf Careerist" width="300" height="75" /></span>
  </div>
  <div className="navbar-end">

  </div>
</div>
  );
};

export default Navbar;
