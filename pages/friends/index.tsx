import React, { useEffect, useState } from "react";
import { message } from 'antd';
import Search from "../../components/search";
import FriendSearch from "../../components/friendSearch";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import FriendList from "../../components/friendList";
import { useGetFriend } from "../../hooks/useGetFriend";
import { useAddFriend } from "../../hooks/useAddFriend";

const Friend = () => {
  const [value, setValue] = useState("");
  const [showFriend, setShowFriend] = useState(false);

 const  {data, error, isLoading } = useGetFriend();

 const  {dataA, errorA, isLoadingA, getFriend } = useAddFriend();

 const addFriend = () => {
  const isFriend = data.includes(value)
  if (isFriend) {
    message.warn(`${value} is already on your friend list`);
    return;
  }
  getFriend(value)
  console.log(dataA, errorA)
 }


  return (
    <div className="">
      <title>Room</title>
      <Layout
        search={
          <>
            {showFriend ? (
              <FriendSearch onclick={addFriend} onchange={ (e: { target: { value: string; } }) =>  setValue(e.target.value) } searchvalue={value} />
            ) : (
              <Search  />
            )}
          </>
        }
        content={
          !isLoading && data === null ? (
            <EmptyList text="Your Friends on Lingo would appear here" />
          ) : (
            <>
              <FriendList isloadingA={isLoadingA} data={data} isloading={isLoading} />
              <div
                onClick={() =>  setShowFriend(!showFriend)}
                className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[290px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
              >
                +
              </div>
            </>
          )
        }
        mobileContent={
          !isLoading && data === null ? (
            <EmptyList text="Your Friends on Lingo would appear here" />
          ) : (
            <>
              <FriendList data={data} isloading={isLoading} />
              <div
                onClick={() => setShowFriend(!showFriend) }
                className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[220px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
              >
                +
              </div>
            </>
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Friend;
