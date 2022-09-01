import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";

type Props = {
  data?: any;
};

const RoomsList = ({ data }: Props) => {


  return (
    <div className=" px-6 h-[600px]  overflow-y-scroll ">
      {data.map((item: any) => {
        return (
          <div
            key={item}
            className="flex flex-row gap-4 py-2 border-b px-4 items-center"
          >
            <div className="">
              <Image src={avatar.src} width="48px" height="48px" alt="" />
            </div>
            <div className="">{item} </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomsList;
