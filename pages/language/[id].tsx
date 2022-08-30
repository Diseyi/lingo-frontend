import React, { useState } from "react";
import { useRouter } from "next/router";
import { message, Select } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ChatApi } from "../../common/api/chat.api";
import Spinner from "../../components/spinner";
import Image from "next/image";
import Logo2 from "../../assets/icon/logo2.svg";

const { Option } = Select;

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState("");

  const room: any = [];
  const roomLanguage = [
    "English",
    "French",
    "Spanish",
    "Chinese",
    "Yoruba",
    "German",
  ];

  const router = useRouter();

  const sendRequest = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const checkPayload = isValidPayload(lang, room);

    if (!checkPayload) {
      setIsLoading(false);
      message.warn("choose a language and atleast one room");
    } else {
      const payload = {
        lang,
        room,
      };
      setIsLoading(false);
      console.log(payload, checkPayload);
    }

    router.push("/chats");
  };

  const getCheckedLang = (e: any) => {
    room.push(e.target.value);

    console.log(room);
  };

  const getLanguage = (value: string) => {
    setLang(value);
    console.log(value);
  };

  const isValidPayload = (lang: string, room: []) => {
    return lang.length !== 0 && room.length !== 0;
  };

  return (
    <section className="bg-[#f2f3f5] h-screen w-full ">
      <main className="w-[90%] md:w-[500px] m-auto  ">
        <div className=" flex justify-center my-6">
          <Image src={Logo2.src} alt="" width="136" height="112" className="" />
        </div>
        <div className=" w-5/6 mx-auto">
          <label
            htmlFor=""
            className=" text-[#171B23] font-semibold text-base "
          >
            What language would you love to communicate with?
          </label>
          <div className="my-2">
            <Select
              defaultValue="choose your language"
              size="large"
              style={{
                width: "100%",
                height: "50px",
                border: "none",
                background: "#E9EBEC",
              }}
              dropdownStyle={{
                backgroundColor: "#E9EBEC",
                margin: "15px",
                fontWeight: "400",
              }}
              onChange={getLanguage}
            >
              {roomLanguage.map((item) => (
                <Option
                  key={item}
                  value={item}
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    background: "#E9EBEC",
                    fontWeight: "400",
                  }}
                >
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="w-5/6  m-auto my-8">
          <label htmlFor="" className="font-medium text-base text-[#171B23]">
            Please select your desired language room
          </label>
          <div className="py-2 flex flex-col justify-start text-base text-[#171B23]">
            {roomLanguage.map((item) => (
              <div key={item} className="my-1">
                <Checkbox value={item} onChange={getCheckedLang}>
                  {" "}
                  {item}{" "}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <button
            className={
              isLoading
                ? "h-[50px] flex items-center justify-center gap-2 rounded-lg bg-[#52B1A4] text-[#1F2D2B] w-full py-2 mb-2 font-bold "
                : "h-[50px] flex items-center justify-center gap-2 rounded-lg bg-[#AAE8DF] text-[#1F2D2B] w-full py-2 mb-2 font-bold "
            }
            onClick={sendRequest}
          >
            Continue
            {isLoading && <Spinner />}
          </button>
        </div>
      </main>
    </section>
  );
};

export default index;
