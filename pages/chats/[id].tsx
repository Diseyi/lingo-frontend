import React, { useState } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import RoomList from "../../components/roomList";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import ChatHeader from "../../components/nav/chatHeader";
import Add from "../../components/add";

const ChatId = () => {
  const [filterChats, setFilterChats] = useState(true);
  const [isSearch, setIsSearch] = useState(filterChats);

  const data = [
    "Spanish Room",
    "French Room",
    "English Room",
    "Yoruba Room",
    "Chinese Room",
    "Latin Room",
    "Spanish Room",
    "French Room",
    "English Room",
    "Yoruba Room",
    "Chinese Room",
    "Latin Room",
  ];

  const showSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={isSearch ? <Search /> : <></>}
        icon={<Add />}
        content={
          filterChats ? (
            <RoomList data={data} />
          ) : (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          )
        }
        onClick={showSearch}
      >
        {/* {data.map((name: any) => {
          return <Rooms key={name} text="spanish" />;
        })} */}
        <ChatHeader />
      </Layout>
    </div>
  );
};

export default ChatId;
