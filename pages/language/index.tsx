import React, { useState } from "react";
import { Select } from "antd";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { ChatApi } from "../../common/api/chat.api";
import Spinner from "../../components/spinner";
import Image from "next/image";
import Logo2 from "../../assets/icon/logo2.svg";
import { getAuthHeaders } from "../../common/api";

const { Option } = Select;

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("");

  const room: any = [];

  const roomLanguage = [
    "English",
    "French",
    "Spanish",
    "Chinese",
    "Yoruba",
    "German",
  ];

  const handleRequest = (e: any) => {
    e.preventDefault();
    sendRequest();
  };

  const sendRequest = async () => {
    setIsLoading(true);

    const payload = {
      lang: language,
      groups: room,
    };

    const isValid = validateValue(language, room);

    // if (isValid) {
    //   setIsLoading(false);
    //   return alert("Please select at least one language");
    // } else {
      const { data, error } = await ChatApi.saveLanguage(payload);
      setIsLoading(false);
      if (error) {
        error;
      }
      console.log(data);
    // }
  };

  const validateValue = (language: string, room: any) => {
    return language === "" || room.length === 0;
  };

  const handleChange = (value: string) => {
    setLanguage(value);
    console.log(language);
  };

  const handleRoom = (e: CheckboxChangeEvent) => {
    const value = e.target.value;
    room.push(value);
    console.log(room, getAuthHeaders());
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
              defaultValue="English"
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
              onChange={handleChange}
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
                <Checkbox value={item} onChange={handleRoom}>
                  {" "}
                  {item}{" "}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <button
            className="bg-[#AAE8DF] flex items-center justify-center gap-2 text-[#171B23] w-5/6 block p-4 rounded font-bold  mx-auto  "
            onClick={handleRequest}
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
