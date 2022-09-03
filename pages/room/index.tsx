import React, { useEffect, useState } from "react";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import { useGroup } from "../../common/hooks/useGroup";
import { useGroupContext } from "../../common/hooks/useGroupContext";

const Room = () => {
  const [filterChats, setFilterChats] = useState(true);

  const { getGroup, error, isLoading } = useGroup();
  const { user } = useGroupContext() as any;
  const groups = user?.groups ? user.groups : [];
  console.log(groups.length);

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
            <RoomList data={groups} />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
