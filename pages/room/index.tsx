import React from "react";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import { useRoom } from "../../hooks/useRoom";

const Room = () => {
  const  {data, error, isLoading } = useRoom();

  return (
    <div className="">
      <title>Room</title>
      <Layout
        search={<Search />}
        content={
           !isLoading && data === null ? (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          ) : (
            <RoomList data={data} isloading={isLoading} />
          )
        }
        mobileContent={
           !isLoading && data === null ? (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          ) : (
            <RoomList data={data} isloading={isLoading} />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
