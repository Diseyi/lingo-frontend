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
        <div className="w-[380px] bg-white ">
          <div className="">
            <Chatnav />
            {/* <div className=""> {notification} </div> */}
            <div className=""> {search} </div>
          </div>
          <div className="" onClick={onClick} > {icon} </div>
          <div className=""> {content} </div>
        </div>
        <div className="w-full ">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
