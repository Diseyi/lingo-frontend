import Link from 'next/link';
import React from 'react'
import SignupForm from '../../components/form/signup'
import Logo from "../../assets/icon/logo.svg";
import Image from 'next/image';

const index = () => {
  return (
    <div className="bg-[#E9EBEC] h-screen ">
      <header className="hidden md:block  ">
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
          <div className=" flex-row items-center gap-9 hidden lg:flex ">
            <div className="text-lg px-8">
              <Link href="/"> Already have an account? </Link>
            </div>
            <div className="text-base px-8 py-2 rounded bg-[#AAE8DF] ">
              <Link href="/login">Login </Link>
            </div>
            <div className="flex text-base px-8">EN</div>
          </div>
        </nav>
      </header>
      <SignupForm />
    </div>
  );
}

export default index