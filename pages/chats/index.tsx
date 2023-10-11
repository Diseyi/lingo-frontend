import React, { useEffect, useState } from "react";
import { message } from "antd";
import Search from "../../components/search";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";

const Chats = () => {
  return (
    <div className="">
      <title>Room</title>
      <Layout
        search={<Search />}
        content={<EmptyList text="Your Chats on Lingo would appear here" />}
        mobileContent={
          <EmptyList text="Your Chats on Lingo would appear here" />
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Chats;
