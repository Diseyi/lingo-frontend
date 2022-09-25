import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import ChatHeader from "../../components/nav/chatHeader";
import { useRoom } from "../../hooks/useRoom";

const RoomId = () => {
  const { data, isLoading } = useRoom();
  const [roomParam, setRoomParam] = useState<string | string[] | undefined>('')
   const router = useRouter();

  useEffect(() => {
    const queryparam = router.query.id
    setRoomParam(queryparam)
  })

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
        <ChatHeader roomName={`${roomParam} Room`} members="2,000 members" online="150 online" />
      </Layout>
    </div>
  );
};

export default RoomId;
