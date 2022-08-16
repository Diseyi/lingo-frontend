import Link from 'next/link';
import React from 'react';
import Logo from "../../assets/icon/logo.svg";

const index = () => {
  return (
      <header className="">
        <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
          <div className="flex flex-row items-center gap-9">
            <div className="">
              <img src={Logo.src} alt="" className="" />
            </div>
            <div className="text-lg">
              <Link href="/"> How it works </Link>
            </div>
            <div className="text-lg">
              <Link href="/"> FAQ </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-9">
            <div className="flex text-base">
              <Link href="/"> EN</Link>
              {/* <img src={ArrowDown.src} alt="" className="" /> */}
            </div>
          </div>
        </nav>
      </header>

  );
}

export default index