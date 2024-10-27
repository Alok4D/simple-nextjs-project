"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Contacts",
            path: '/contacts'
        }
    ]
  return (
    <div>
      <nav className="bg-red-300 px-6 py-4 flex justify-between items-center">
      
       <h6 className="text-3xl">Next<span className="text-cyan-500"> Hero</span></h6>
      
        <ul className="flex justify-between items-center space-x-4">
          {
            links?.map((link) => <Link className={`${pathName === link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button className="bg-white text-cyan-400 p-3 rounded-lg">Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
