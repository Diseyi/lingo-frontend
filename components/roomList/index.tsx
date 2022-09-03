import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";
import Spinner from "../spinner";

type Props = {
  data?: any;
  isloading?: boolean;
};

const RoomsList = ({ data, isloading }: Props) => {
  return (
    <div className=" px-6 h-[600px]  overflow-y-scroll ">
      {isloading ? (
        <div className="h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="">
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
      )}
    </div>
  );
};

export default RoomsList;
