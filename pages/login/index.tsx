import Link from "next/link";
import React from "react";
import Login from "../../components/form/login";
import Logo from "../../assets/icon/logo.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-[#f2f3f5] h-screen ">
      <header className="hidden  md:block">
        <nav className="flex flex-row items-center justify-between w-[90%] m-auto py-4 ">
          <div className="flex flex-row items-center gap-9">
            <Link href="/">
              <div className="">
                <Image
                  src={Logo.src}
                  width="230px"
                  height="68px"
                  alt=""
                  className=""
                />
              </div>
            </Link>
          </div>
          <div className=" flex-row items-center hidden lg:flex ">
            <div className="text-lg font-semibold px-8">Dont have an account?</div>
            <Link href="/signup">
              <div className="text-white font-semibold hover:bg-[#AAE8DF] hover:text-gray-600 px-8 py-2 rounded text-base boxshadow2 bg-[#52B1A4] cursor-pointer">
                Sign up
              </div>
            </Link>
          </div>
        </nav>
      </header>
      <Login />
    </div>
  );
};

export default index;
