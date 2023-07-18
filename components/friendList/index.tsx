import React, { useState } from "react";
import Image from "next/image";
import avatar from "../../assets/icon/avatar.png";
import Spinner from "../spinner";
import Search from "../search";
import EmptyList from "../../components/emptyList";
import { useGetFriend } from "../../hooks/useGetFriend";
import { useRouter } from "next/router";


const FriendList = () => {

  const [searchValue, setSearchValue] = useState('')

  const router = useRouter()
  const { data, isLoading } = useGetFriend();

  const handleSearch = (e: any) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  return (
    <ul className=" px-6 h-[600px] relative  overflow-y-scroll py-2 ">
      {isLoading ? (
        <div className="flex h-full justify-center items-center">
          <Spinner />
        </div>
      ) : (

        <div className="">
          <Search handleSearch={handleSearch} searchvalue={searchValue} />
          {data?.map((friend: any) => {
            if (data === null) return <EmptyList text="Your Friends on Lingo would appear here" />
            return (
              <div key={friend + 1} className="cursor-pointer my-6" onClick={() => router.push(`/friends/${friend}`)} >
                <div className="flex flex-row gap-4 py-2 border-b px-4 hover:bg-[#E9EBEC] dark:hover:bg-[#11473F] hover:rounded dark:text-[#DCE0E8] cursor-pointer border-b dark:border-[#3f524f] items-center">
                  <div className="">
                    <Image src={avatar.src} width="48px" height="48px" alt="" />
                  </div>
                  <div className="truncate w-2/3 dark:text-[#DCE0E8] ">
                    {friend}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </ul>
  );
};

export default FriendList;
