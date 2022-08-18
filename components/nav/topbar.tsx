import React from "react";
import Link from "next/link";
import Logo from "../../assets/icon/logo.svg";
import Image from "next/image";

const topbar = () => {
  return (
    <header className="">
      <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-6 ">
        <div className="flex flex-row items-center gap-9">
          <div className="">
            <Image src={Logo.src} alt="" className="" />
          </div>
          <div className="text-lg">
            <Link href="/"> How it works </Link>
          </div>
          <div className="text-lg">
            <Link href="/"> FAQ </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-9">
          <div className="text-lg">
            <Link href="/"> Already have an account? </Link>
          </div>
          <div className="text-base">
            <Link href="/login">Login </Link>
          </div>
          <div className="flex text-base">
            <Link href="/"> EN</Link>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default topbar;
