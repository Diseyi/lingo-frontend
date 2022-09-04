import React, { useEffect } from "react";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import { useGroup } from "../../common/hooks/useGroup";
import { useGroupContext } from "../../common/hooks/useGroupContext";

const Room = () => {
  const { getGroup, error, isLoading } = useGroup();
  const { user, dispatch } = useGroupContext() as any;
  const groups = user?.groups ? user.groups : [];

  useEffect(() => {
    getGroup();
    return dispatch({ type: "GETUSER", payload: null});
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
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
