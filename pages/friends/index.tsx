import React, { useEffect, useState } from "react";
import Search from "../../components/search";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import FriendList from "../../components/friendList";
import { useGroup } from "../../hooks/useGroup";
import { useGroupContext } from "../../hooks/useGroupContext";

const Friend = () => {
  const [searchValue, setSearchValue] = useState("");
 const { getGroup, error, isLoading } = useGroup();
 const { user } = useGroupContext() as any;
 const friends = user?.friends ? user.friends : []

 useEffect(() => {
   getGroup();
 }, []);

  return (
    <div className="">
      <title>Room</title>
      <Layout
        search={<Search searchvalue={searchValue} />}
        content={
          !isLoading && friends.length === 0 ? (
            <EmptyList text="Your Friends on Lingo would appear here" />
          ) : (
            <FriendList data={friends} isloading={isLoading} />
          )
        }
        mobileContent={
          !isLoading && friends.length === 0 ? (
            <EmptyList text="Your Friends on Lingo would appear here" />
          ) : (
            <FriendList data={friends} isloading={isLoading} />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Friend;
