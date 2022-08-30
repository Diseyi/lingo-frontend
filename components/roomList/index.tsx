import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";

type Props = {
  data?: any;
};

const RoomsList = ({ data }: Props) => {

  const router = useRouter()

   const handleClick = (id: any) => {
    //  router.push(`/room/${id}`);
     console.log(id)
   };


  return (
    <div className=" px-6 h-[600px]  overflow-y-scroll ">
      {data.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex flex-row gap-4 py-2 border-b px-4 items-center"
            onClick={ () => handleClick(item.id)}
          >
            <div className="">
              <Image src={avatar.src} width="48px" height="48px" alt="" />
            </div>
            <div className="">{item.roomName} </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomsList;
