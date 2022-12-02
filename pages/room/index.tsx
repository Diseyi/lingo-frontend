import React, { useEffect, useState, useRef } from "react";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import Empty from "../../components/empty";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import { useRoom } from "../../hooks/useRoom";

const Room = () => {
  const { data, isLoading } = useRoom();
  const [roomData, setRoomData] = useState(data);
  const [searchData, setSearchData] = useState('');
  const holdDdata = useRef(data);

  useEffect(() => {
    if (data !== null) {
      holdDdata.current = data;
      setRoomData(holdDdata.current)
    }
  },);

  const handleSearch = (e: any) => {
    const value = e.target.value;
    const filterData = data.filter((item: any) => {
      if (item.toLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    console.log(filterData);
   holdDdata.current = filterData
  };

  return (
    <div className="">
      <title>Room</title>
      <Layout
        search={<Search searchvalue={searchData} handleSearch={handleSearch} />}
        content={
          !isLoading && roomData === null ? (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          ) : (
            <RoomList data={roomData} isloading={isLoading} />
          )
        }
        mobileContent={
          !isLoading && roomData === null ? (
            <EmptyList text="Your Rooms on Lingo would appear here" />
          ) : (
            <RoomList data={roomData} isloading={isLoading} />
          )
        }
      >
        <Empty />
      </Layout>
    </div>
  );
};

export default Room;
