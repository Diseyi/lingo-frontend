import React, { useEffect, useState } from "react";
import Search from "../../components/search";
import Notification from "../../components/notification";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import Add from "../../components/add";
import useAxios from "../../common/hooks/useAxios";
import { message } from "antd";

const Room = () => {
  const [filterChats, setFilterChats] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState({} as any);

  const Auth = useAxios() as any;
  const id = '6309e78027d5fbfac7d5e86b'

  useEffect(() => {
    async function sendRequest() {
      setIsLoading(true);

      const { error, data } = await Auth.authenticate(`/api/users/${id}`, "get");

      if (error) {
        setIsLoading(false);
        console.log(error);
        message.warn(error);
      } else {
        setIsLoading(false);
        const response = data.groups
        setGroups([...response]);
        console.log(data, groups);
      }
    }

    sendRequest();
  }, []);

  
  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={<Search /> }
        content={
          filterChats ? (
            <RoomList data={groups} />
          ) : (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
