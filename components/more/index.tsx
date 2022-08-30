import React from "react";
import Link from "next/link";

const More = () => {
  return (
    <div className="bg-white font-light w-48 absolute z-20 top-10 right-0 text-[#171B23] border text-base ">
      <div className="hover:bg-[#AAE8DF] cursor-pointer px-6 py-2">
        <Link href="/language/4545">Change language</Link>
      </div>
      <div className="hover:bg-[#AAE8DF] cursor-pointer px-6 py-2">
        Report Bug
      </div>
      <div className="hover:bg-[#AAE8DF] cursor-pointer px-6 py-2">Theme</div>
      <div className="hover:bg-[#AAE8DF] cursor-pointer px-6 py-2">
        Tell a friend
      </div>
      <Link href="/">
        <div className="hover:bg-[#AAE8DF] cursor-pointer px-6 py-2">
          Log out
        </div>
      </Link>
    </div>
  );
};

export default More;
