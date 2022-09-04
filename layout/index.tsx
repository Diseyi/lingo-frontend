import React from "react";
import Chatnav from "../components/nav/chatnav";

type Props = {
  icon?: JSX.Element;
  search?: JSX.Element;
  notification?: JSX.Element;
  content?: any
  children?: JSX.Element;
  onClick?: () => void;
};

const Layout: React.FC<Props> = ({
  children,
  onClick,
  content,
  search,
  icon
}) => {
  return (
    <section className="h-screen overflow-hidden ">
      <div className="flex w-full h-screen ">
        <div className="w-[380px]  bg-white ">
          <div className="dark:bg-[#1f2e2b] ">
            <Chatnav />
            {/* <div className=""> {notification} </div> */}
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
    </section>
  );
};

export default Layout;
