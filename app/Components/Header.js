"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [shownav, setShownav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const pathname = usePathname(); 

  return (
    <header>
      <div className="container">
        <Link href="/" className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <nav className={`${shownav ? "active" : ""}`}>
          <ul>
            <li className={pathname === "/about-us" ? "active" : ""}>
              <Link onClick={() => setShownav(false)} href="/about-us">About Us</Link>
            </li>

            <li
              onClick={() => setShowSubMenu(!showSubMenu)}
              className={`menu-item ${showSubMenu ? "show_sub" : ""} ${
                pathname.startsWith("/services") ? "active" : ""
              }`}
            >
              <Link href="#">Services</Link>
              <ul className="sub_menu">
                <li
                  className={
                    pathname === "/services/pmc-services" ? "active" : ""
                  }
                >
                  <Link onClick={() => setShownav(false)} href="/services/pmc-services">PMC Services</Link>
                </li>
                <li
                  className={
                    pathname === "/services/digital-solutions" ? "active" : ""
                  }
                >
                  <Link onClick={() => setShownav(false)} href="/services/digital-solutions">Digital Solutions</Link>
                </li>
              </ul>
            </li>

            <li className={pathname === "/projects" ? "active" : ""}>
              <Link onClick={() => setShownav(false)} href="/projects">Projects</Link>
            </li>
            <li className={pathname === "/blogs" ? "active" : ""}>
              <Link onClick={() => setShownav(false)} href="/blogs">Blogs</Link>
            </li>
            <li className={pathname === "/contact-us" ? "active" : ""}>
              <Link onClick={() => setShownav(false)} href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Link href="#" className="common_btn header_btn">
          <span>
            Enquire Now <img src="/images/arrow-right.svg" alt="logo" />
          </span>
        </Link>

        <button className="mobile_menu_btn" onClick={() => setShownav(!shownav)}>
          {shownav ? (
            <img src="/images/menu_close.svg" alt="menu" />
          ) : (
            <img src="/images/menu_btn.svg" alt="menu" />
          )}
        </button>
      </div>
    </header>
  );
}
