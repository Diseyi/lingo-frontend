import React, { useState } from "react";
import FriendSearch from "../../components/friendSearch";
import Empty from "../../components/empty";
import Layout from "../../layout";
import FriendList from "../../components/friendList";

const Friend = () => {
  const [value, setValue] = useState("");
  const [showFriend, setShowFriend] = useState(false);

  const getUser = () => {
    setShowFriend(!showFriend);
  };

  return (
    <div className="">
      <title>Room</title>
      <Layout
        content={
          <>
            {showFriend ? (
              <FriendSearch
                onclick={() => console.log("hello")}
                onchange={(e: { target: { value: string } }) =>
                  setValue(e.target.value)
                }
                searchvalue={value}
              />
            ) : (
              <FriendList />
            )}
            <div
              onClick={getUser}
              className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[290px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
            >
              +
            </div>
          </>
        }
        mobileContent={
          <>
            <FriendList />
            <div
              onClick={getUser}
              className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[220px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
            >
              +
            </div>
          </>
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Friend;
