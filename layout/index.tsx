import React from "react";
import Chatnav from "../components/nav/chatnav";
import Mobilenav from "../components/nav/mobilenav";
import Search from "../components/search";

type Props = {
  icon?: JSX.Element;
  search?: JSX.Element;
  notification?: JSX.Element;
  content?: any;
  mobileContent?: any;
  children?: JSX.Element;
  onClick?: () => void;
};

const Layout: React.FC<Props> = ({
  children,
  onClick,
  content,
  mobileContent,
  search,
  icon,
}) => {
  return (
    <section className="h-screen overflow-hidden ">
      <div className="hidden w-full h-screen md:flex ">
        <div className="w-[380px]  bg-white ">
          <div className="dark:bg-[#1f2e2b] ">
            <Chatnav />
            <div className="dark:bg-[#1f2e2b] "> {search} </div>
          </div>
          <div className="" onClick={onClick}>
            {" "}
            {icon}{" "}
          </div>
          <div className="dark:bg-[#1f2e2b] h-full"> {content} </div>
        </div>
        <div className="w-full dark:bg-[#383838] ">{children}</div>
      </div>
      <div className=" w-full h-screen md:hidden">
        <div className="">
          <Search />
        </div>
        <div className="">
          {mobileContent}
        </div>
        <div className="">
          <Mobilenav />
        </div>
      </div>
    </section>
  );
};

export default Layout;
