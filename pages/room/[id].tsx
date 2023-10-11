import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Search from "../../components/search";
import RoomList from "../../components/roomList";
import EmptyList from "../../components/emptyList";
import Layout from "../../layout";
import ChatHeader from "../../components/nav/chatHeader";
import { useRoom } from "../../hooks/useRoom";
import socket from "../../socket";

const RoomId = () => {
  const { data, isLoading } = useRoom();
  const [roomParam, setRoomParam] = useState<string | string[] | undefined>('')
  const [inputMessage, setInputMessage] = useState<string>("");
  const router = useRouter();

  const containerRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const queryparam = router.query.id
  //   setRoomParam(queryparam)

  //   socket.emit('join-room', queryparam)

  //   socket.on('room-broadcast', (data) => {
  //     console.log(data)
  //     // setNewMessage(data.message)
  //   })
  // })

  const handleSubmit = () => {
    socket.emit('room-message', { message: inputMessage, room: roomParam })

    const div = document.createElement("div");
    const button = document.createElement("div");
    div.className = "flex justify-end";
    button.className =
      " text-white bg-[#444444] inline-flex p-3 text-sm rounded-tl-lg rounded-br-lg rounded-bl-lg text-end my-2";

    button.innerText = inputMessage;
    div.appendChild(button);
    containerRef.current?.appendChild(div);
    setInputMessage(" ");
  };

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputMessage(e.target.value);
  };

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
        <>
          <ChatHeader roomName={`${roomParam} Room`} members="2,000 members" online="150 online" />
          <div className="h-full w-full space-x-4">
          <div ref={containerRef} className="px-4" ></div>

            <div className="py-2 flex w-8/12 fixed bottom-0 ml-6 ">
              <input
                type="text"
                className="flex-1 rounded"
                placeholder="type your message"
                onChange={handleChange}
                value={inputMessage}
              />
              <button
                className="w-10 border bg-white ml-2 text-xl rounded"
                onClick={handleSubmit}
              >
                &#10148;
              </button>
            </div>
          </div>
        </>

      </Layout>
    </div>
  );
};

export default RoomId;
