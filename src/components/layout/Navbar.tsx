
import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Leader Board", path: "/leaderboard" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const location = window.location.pathname;

  return (
    <header className="w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.01)] fixed top-0 left-0 z-50">
      {/* Top blue border */}
      <div className="h-1 w-full bg-[#094C99]" />
      <nav className="flex items-center justify-between max-w-[1240px] mx-auto py-4 px-6 gap-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <Link to="/">
            <img
              src="/lovable-uploads/5816b89c-e6bd-463a-b497-f843224f0a79.png"
              alt="T2T Theory to Trade Logo"
              className="h-16 w-auto object-contain"
              style={{ minWidth: 84 }}
            />
          </Link>

          {/* Navigation links */}
          <ul className="flex items-center gap-1 text-[#343434] text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={[
                    "inline-block px-5 py-2 transition-colors duration-150 hover:text-[#094C99]",
                    location === link.path ? "font-extrabold text-[#094C99]" : "",
                  ].join(" ")}
                >
                  {link.name}
                  {/* Active underline */}
                  {location === link.path && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-1 bg-[#094C99] rounded-[2px]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right action area */}
        <div className="flex items-center gap-3 relative">
          {/* Diagonal divider */}
          <div
            className="hidden md:block absolute left-[-48px] top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <svg width="48" height="48" viewBox="0 0 60 60" fill="none" className="h-12 w-12">
              <polygon points="0,0 60,0 0,60" fill="#094C99" />
            </svg>
          </div>
          <Button
            variant="outline"
            className="border-[#094C99] text-[#094C99] px-6 rounded-md font-semibold bg-white hover:bg-[#f5faff] shadow-none"
            style={{ borderWidth: "2px" }}
          >
            Sign in
          </Button>
          <Button
            variant="default"
            className="bg-[#094C99] hover:bg-[#296cb2] px-6 rounded-md font-semibold text-white shadow-none"
          >
            Log in
          </Button>
        </div>
      </nav>
      {/* Spacing to offset fixed header */}
      <div className="h-[73px] md:h-[73px]" />
    </header>
  );
};

export default Navbar;
