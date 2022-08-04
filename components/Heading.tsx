import { useState } from "react";
import Image from "next/image";

import mastercraft from "../public/images/logo-mastercraft.svg";

interface HeadingProps {
  onClick: () => void;
}

function Heading({ onClick }: HeadingProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmarked = () => {
    setBookmarked((b) => !b);
  };

  return (
    <article className="card | pt-0 pb-10 relative flex flex-col items-center text-center">
      <div className="absolute -translate-y-1/2">
        <Image src={mastercraft} alt="" />
      </div>
      <h1 className="mt-14 text-[1.35rem] leading-none font-bold text-black">Mastercraft Bamboo Monitor Riser</h1>
      <p className="mt-4 leading-relaxed">A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>

      <div className="mt-8 w-full flex items-stretch justify-between gap-2">
        <button className="button | md:px-10 md:flex-grow-0 flex-grow" onClick={onClick}>
          Back this project
        </button>
        <div>
          <button className="flex flex-row-reverse items-stretch" onClick={toggleBookmarked} data-checked={bookmarked}>
            <span className="md:flex hidden pl-16 pr-8 -ml-12 items-center leading-none rounded-full font-bold bg-gray-150">
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </span>
            <svg className="bookmark" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default Heading;
