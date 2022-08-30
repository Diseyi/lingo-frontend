import React, { useState } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import Add from "../../components/add";

const Room = () => {
  const [filterChats, setFilterChats] = useState(true);
  const [isSearch, setIsSearch] = useState(filterChats);

  const data = [
    { id: 1, roomName: "Spanish Room" },
    { id: 2, roomName: "French Room" },
    { id: 3, roomName: "English Room" },
    { id: 4, roomName: "Yoruba Room" },
    { id: 5, roomName: "Latin Room" },
    { id: 6, roomName: "Igbo Room" },
    { id: 7, roomName: "German Room" },
    { id: 8, roomName: "Ijaw Room" },
    { id: 9, roomName: "Tiv Room" },
    { id: 10, roomName: "Arabic Room" },
    { id: 11, roomName: "Swedish Room" },
    { id: 12, roomName: "Polish Room" },
  ];

  const showSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={<Search /> }
        // icon={<Add />}
        content={
          filterChats ? (
            <RoomList data={data} />
          ) : (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          )
        }
        onClick={showSearch}
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
