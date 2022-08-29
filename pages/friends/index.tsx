import React, { useState } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import FriendList from "../../components/friendList";

const Friend = () => {

  const [filterChats, setFilterChats] = useState(false);
  

  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={<Search />}
        content={filterChats ? <EmptyList /> : <FriendList />}
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Friend;
