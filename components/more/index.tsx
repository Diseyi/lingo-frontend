import React from "react";
import Link from "next/link";
import { useLogout } from "../../common/hooks/useLogout";
import { useRouter } from "next/router";
import DarkModeToggle from "../dark-mode-toggle";

const More = () => {
  const { logout } = useLogout();
  const router = useRouter();

  const handleClick = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="bg-white font-light w-48 dark:bg-[#3f524f] absolute z-20 top-6 -right-6 text-[#171B23] border text-base ">
      <Link href="/language/4545">
        <div className="hover:bg-[#AAE8DF] dark:hover:text-gray-500 dark:text-[#DCE0E8] hover:text-gray-500 font-semibold cursor-pointer px-6 py-2">
          Change language{" "}
        </div>
      </Link>
      <div className="hover:bg-[#AAE8DF] dark:hover:text-gray-500  dark:text-[#DCE0E8] hover:text-gray-500 font-semibold  cursor-pointer px-6 py-2">
        Report Bug
      </div>
      <div className="hover:bg-[#AAE8DF] dark:hover:text-gray-500  dark:text-[#DCE0E8] flex justify-between items-center hover:text-gray-500 font-semibold  cursor-pointer px-6 py-2">
        Theme <DarkModeToggle />
      </div>
      <div className="hover:bg-[#AAE8DF] dark:hover:text-gray-500  dark:text-[#DCE0E8] hover:text-gray-500 font-semibold  cursor-pointer px-6 py-2">
        Tell a friend
      </div>
      <div
        className="hover:bg-[#AAE8DF] dark:hover:text-gray-500  dark:text-[#DCE0E8] hover:text-gray-500 font-semibold  cursor-pointer px-6 py-2"
        onClick={handleClick}
      >
        Log out
      </div>
    </div>
  );
};

export default More;
