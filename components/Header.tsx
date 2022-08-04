import { useEffect, useState } from "react";
import Image from "next/image";

import ClientOnlyPortal from "./ClientOnlyPortal";

import logo from "../public/images/logo.svg";
import openMenu from "../public/images/icon-hamburger.svg";
import closeMenu from "../public/images/icon-close-menu.svg";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <header className="hero md:hero-desktop | min-h-[300px] md:min-h-[400px]">
      <div
        className={`md:mx-auto md:max-w-[1110px] pt-8 pb-9 mx-6 flex justify-between relative ${open ? "z-40" : ""}`}
      >
        <a href="#">
          <Image src={logo} alt="Crowdfund" />
        </a>

        <ul
          className={`md:flex md:text-white text-black ${
            open ? "absolute z-50 top-full w-full divide-y rounded-lg font-bold bg-white" : "hidden"
          }`}
        >
          <li className="p-4 hover:underline">
            <a href="#">About</a>
          </li>
          <li className="p-4 hover:underline">
            <a href="#">Discover</a>
          </li>
          <li className="p-4 hover:underline">
            <a href="#">Get Started</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={toggleOpen}>
          {open ? <Image src={closeMenu} alt="Close menu" /> : <Image src={openMenu} alt="Open menu" />}
        </button>

        {open && (
          <ClientOnlyPortal>
            <div
              className="fixed z-10 inset-0"
              style={{
                backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%)",
              }}
            ></div>
          </ClientOnlyPortal>
        )}
      </div>
    </header>
  );
}

export default Header;
