import Link from "next/link";
import React, { useContext } from "react";
import Login from "../../components/form/login";
import Logo from "../../assets/icon/logo.svg";
import Image from "next/image";
import { AuthContext } from "../../store/auth";


const index = () => {
  return (
    <div className="bg-[#f2f3f5] h-screen ">
      <header className="hidden  md:block">
        <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
          <div className="flex flex-row items-center gap-9">
            <div className="">
              <Image
                src={Logo.src}
                width="230px"
                height="68px"
                alt=""
                className=""
              />
            </div>
            <div className="text-lg">
              <Link href="/"> How it works </Link>
            </div>
          </div>
          <div className=" flex-row items-center hidden lg:flex ">
            <div className="text-lg px-8">Dont have an account?</div>
            <div className="text-base bg-[#AAE8DF] px-8 py-2 rounded ">
              <Link href="/signup">Sign Up </Link>
            </div>
          </div>
        </nav>
      </header>
      <Login />
    </div>
  );
};

export default index;
