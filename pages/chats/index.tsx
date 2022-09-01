import React, { useEffect, useState } from "react";
import { message } from "antd";
import Search from "../../components/search";
import Notification from "../../components/notification";
import Rooms from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import useAxios from "../../common/hooks/useAxios";

const Chats = () => {
  const [filterChats, setFilterChats] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
         console.log(data);
       }
     }
    
    sendRequest();
  }, []);

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
