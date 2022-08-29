import React from 'react'
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";

const Chats = () => {
  return (
    <div className=" px-6 ">
      <div className="">
        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Swiss jake004</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Lisa23</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Joe43</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Kiki3456</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Pinky 439</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Loisy56</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Diseyi56</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Paris54</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">John doe23</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Spanish room</div>
        </div>

        <div className="flex flex-row gap-4 py-2 border-b px-4 items-center">
          <div className="">
            <Image src={avatar.src} width="48px" height="48px" alt="" />
          </div>
          <div className="">Spanish room</div>
        </div>
      </div>
    </div>
  );
}

export default Chats