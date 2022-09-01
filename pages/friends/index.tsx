import React, { useEffect, useState } from "react";
import { message } from "antd";
import Image from "next/image";
import Search from "../../components/search";
import Notification from "../../components/notification";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import FriendList from "../../components/friendList";
import useAxios from "../../common/hooks/useAxios";
import avatar from "../../assets/icon/avatar.png";

const Friend = () => {
  const [filterChats, setFilterChats] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [friends, setFriends] = useState([] as any);

  const Auth = useAxios() as any;

  useEffect(() => {
    async function sendRequest() {
      setIsLoading(true);

      const { error, data } = await Auth.authenticate("/api/users", "get");

      if (error) {
        setIsLoading(false);
        console.log(error);
        message.warn(error);
      } else {
        setIsLoading(false);
        setFriends([...data]);
        console.log(friends);
      }
    }

    sendRequest();
  }, []);

  return (
    <div className="">
      <title>Room</title>
      <Layout
        notification={<Notification />}
        search={
          <Search searchvalue={searchValue}  />
        }
        content={
          filterChats ? (
            <EmptyList text="Your Chats on Lingo would appear here" />
          ) : (
            <FriendList item={friends} />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Friend;
