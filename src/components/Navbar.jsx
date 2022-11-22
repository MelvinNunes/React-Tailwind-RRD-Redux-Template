import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { navbar_links } from "../data/links";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const activeLink = "font-semibold text-lg  text-slate-800";
  const standardLink =
    "font-semibold text-lg text-white hover:text-slate-500 transition-all duration-200";

  return (
    <div>
      {/* Web Nav */}
      <nav className="hidden md:flex bg-dataset md:px-10  xl:px-28  py-7 justify-between  items-center">
        <div>
          <img src={Logo} alt="enviro-logo" className="w-24 px-3" />
        </div>
        <div>
          <ul className="flex gap-6">
            {navbar_links.map((link) => (
              <NavLink to={link.path}>
                {({ isActive }) => (
                  <span className={isActive ? activeLink : standardLink}>
                    {link.name}
                  </span>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav className="md:hidden flex bg-enviro py-5 px-10 justify-between  items-center">
        <MobileDrawer />
        <img src={Logo} alt="logo-mini" className="w-24" />
      </nav>
    </div>
  );
}
