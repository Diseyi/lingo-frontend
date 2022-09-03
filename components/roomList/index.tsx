import React from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";
import Spinner from "../spinner";
import { useRouter } from "next/router";

type Props = {
  data?: any;
  isloading?: boolean;
};

const RoomsList = ({ data, isloading }: Props) => {

  const router = useRouter()
  
  return (
    <div className=" px-6 h-[600px]  overflow-y-scroll ">
      {isloading ? (
        <div className="h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className=" my-2">
          {data.map((item: any) => {
            return (
              <div
                key={item}
                className="flex w-full flex-row gap-4 py-2 hover:bg-[#E9EBEC] hover:rounded cursor-pointer border-b px-4 items-center"
                onClick={() => router.push(`/room/${item}`)}
              >
                <div className="">
                  <Image src={avatar.src} width="48px" height="48px" alt="" />
                </div>
                <div className="font-semibold">{item} </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RoomsList;
