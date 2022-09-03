import React, { useEffect } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import RoomList from "../../components/roomList";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import ChatHeader from "../../components/nav/chatHeader";
import Add from "../../components/add";
import Empty from "../../components/empty";
import { useGroup } from "../../common/hooks/useGroup";
import { useGroupContext } from "../../common/hooks/useGroupContext";

const RoomId = () => {
  const { getGroup, error, isLoading } = useGroup();
  const { user } = useGroupContext() as any;
  const groups = user?.groups ? user.groups : [];

  useEffect(() => {
    getGroup();
  }, []);

  return (
    <div className="">
      <title>Room</title>
      <Layout
      search={<Search />}
      content={
         !isLoading && groups.length === 0 ? (
          <EmptyList text="Your Rooms on Lingo would appear here" />
        ) : (
          <RoomList data={groups} isloading={isLoading} />
        )
      }
      >
        <ChatHeader />
      </Layout>
    </div>
  );
};

export default RoomId;
