import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex border border-black flex-col items-center md:hidden ">
        <div className="text-base border-b border-black hover:bg-[#AAE8DF] w-full  px-8 py-3 ">
          <Link href="/login"> Login </Link>
        </div>
        <div className="text-base hover:bg-[#AAE8DF] w-full px-8 py-3 ">
          <Link href="/signup"> Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
