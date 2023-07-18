import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import FriendSearch from "../../components/friendSearch";
import Layout from "../../layout";
import FriendList from "../../components/friendList";
import ChatHeader from "../../components/nav/chatHeader";
import { useAuthContext } from "../../hooks/useAuthContext";
import socket from "../../socket";

const FriendId = () => {
  const [value, setValue] = useState<string>("");
  const [inputMessage, setInputMessage] = useState<string>("");
  const [showFriend, setShowFriend] = useState<boolean>(false);
  const [friendParam, setFriendParam] = useState<string | string[] | undefined>(
    ""
  );

  const containerRef = useRef<HTMLInputElement>(null);

  const { user } = useAuthContext() as any;

  const router = useRouter();
  const sendTo = router.query.id

  useEffect(() => {
    const queryparam = router.query.id;
    setFriendParam(queryparam);
  });

  const handleSubmit = () => {
    console.log(socket);

    socket.emit("private message", {
      content: inputMessage,
      from: socket.id,
      to: sendTo,
    });

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
        content={
          (
            <>
              {showFriend ? (
                <FriendSearch onclick={() => console.log('hello')} onchange={(e: { target: { value: string; } }) => setValue(e.target.value)} searchvalue={value} />
              ) : (
                <FriendList />
              )}
              <div
                onClick={() => setShowFriend(!showFriend)}
                className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[290px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
              >
                +
              </div>
            </>
          )
        }
        mobileContent={
          (
            <>
              {showFriend ? (
                <FriendSearch onclick={() => console.log('hello')} onchange={(e: { target: { value: string; } }) => setValue(e.target.value)} searchvalue={value} />
              ) : (
                <FriendList />
              )}
              <div
                onClick={() => setShowFriend(!showFriend)}
                className="w-12 h-12 rounded-full border fixed bottom-32 cursor-pointer shadow-xl left-[290px] text-3xl font-light flex justify-center items-center text-black bg-[#AAE8DF] "
              >
                +
              </div>
            </>
          )
        }
      >
        <>
          <ChatHeader roomName={`${friendParam} `} online="online" />
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

export default FriendId;
