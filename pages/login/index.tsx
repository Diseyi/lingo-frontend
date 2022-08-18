import Link from "next/link";
import React from "react";
import Login from "../../components/form/login";
import Logo from "../../assets/icon/logo.svg";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <header className="hidden md:block">
        <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
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
          <div className=" flex-row items-center hidden lg:flex ">
            <div className="text-lg px-8">
              <Link href="/"> Dont have an account? </Link>
            </div>
            <div className="text-base bg-[#AAE8DF] px-8 py-2 rounded ">
              <Link href="/signup">Sign Up </Link>
            </div>
            <div className="flex text-base px-8">EN</div>
          </div>
        </nav>
      </header>
      <Login />
    </div>
  );
};

export default index;
