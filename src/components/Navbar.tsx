"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLinksProps {
  closeMenu?: () => void;
}

export function NavLinks({ closeMenu }: NavLinksProps){

  return (
    <>
      <Link href="/" className="nav-link" onClick={closeMenu}>
        home
      </Link>
      <Link href="/galleryPage" className="nav-link" onClick={closeMenu}>
        gallery
      </Link>
      <Link href="/projectsPage" className="nav-link" onClick={closeMenu}>
        projects
      </Link>
      {/* <Link href="/#contact" className="nav-link">
        contact
      </Link> */}
    </>
  );
}

export function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="lg:col-span-7 lg:col-start-6 md:col-span-4 md:col-start-3 -col-start-1">
        <div className="nav-links md:flex justify-between hidden">
          <NavLinks closeMenu={closeMenu} />
        </div>
        <div>
          <button
            className="md:hidden"
            aria-label="Menu Button"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
        <div className={`hamburger-menu lg:px-32 md:px-10 px-5 fixed top-auto z-[20] bg-white left-0 w-full flex h-screen flex-col md:hidden items-center justify-center col-span-full pb-5 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <NavLinks closeMenu={closeMenu} />
        </div>
      </nav>
    </>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[20] bg-white w-full">
      <div className="lg:px-32 md:px-10 px-5 columns py-4">
        <Link href="/">JT_</Link>
        <Nav />
      </div>
    </header>
  );
}