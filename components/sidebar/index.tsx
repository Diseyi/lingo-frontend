import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/icon/logo.svg";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => checkLoggedIn());

  const checkLoggedIn = () => {
    const userInSession = localStorage.getItem("user") || "";
    const parsed = userInSession ? JSON.parse(userInSession) : "";

    if (parsed) {
      setIsLoggedIn(true);
    }
  };

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
        {isLoggedIn ? (

            <Link href="/chats">
              <div className="text-base bg-[#52B1A4] rounded text-[#DCE0E8] w-full px-8 py-3 cursor-pointer">
                Go to chat
              </div>
            </Link>
  
        ) : (
          <div className="">
            <Link href="/login">
              <div className="text-base border-b rounded border-[#DcE0E8] hover:text-[#DCE0E8] hover:bg-[#52B1A4]  w-full  px-8 py-3 cursor-pointer ">
                Login
              </div>
            </Link>

            <Link href="/signup">
              <div className="text-base hover:bg-[#52B1A4] rounded hover:text-[#DCE0E8] w-full px-8 py-3 cursor-pointer">
                Sign up
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
