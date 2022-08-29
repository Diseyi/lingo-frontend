import React, { useState } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import Rooms from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";

const Chats = () => {
  const [filterChats, setFilterChats] = useState(false);

  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={filterChats ? <Search /> : <></>}
        content={
          filterChats ? (
            <Rooms />
          ) : (
            <EmptyList text="Your Chats on Lingo would appear here" />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Chats;
