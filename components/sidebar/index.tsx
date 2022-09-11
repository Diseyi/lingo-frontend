import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icon/logo.svg";

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex h-screen bg-[#e9ebec] z-10 absolute top-0 w-3/4 flex-col md:hidden ">
        <div className=" ">
          <Image
            src={Logo.src}
            width="200px"
            height="68px"
            alt=""
            className=""
          />
        </div>
        <Link href="/login">
          <div className="text-base border-b rounded border-[#DcE0E8] hover:text-[#DCE0E8] hover:bg-[#52B1A4]  w-full  px-8 py-3 ">
            Login
          </div>
        </Link>

        <Link href="/signup">
          <div className="text-base hover:bg-[#52B1A4] rounded hover:text-[#DCE0E8] w-full px-8 py-3">
            Sign up
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
