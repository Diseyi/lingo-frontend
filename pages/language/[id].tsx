import React, { useState } from "react";
import { useRouter } from "next/router";
import { message, Select } from "antd";
import Spinner from "../../components/spinner";
import Image from "next/image";
import Logo2 from "../../assets/icon/logo2.svg";
import Lingo from "../../assets/icon/Lingo.svg";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "next-themes";

const { Option } = Select;

const Language = () => {
  const [language, setLanguage] = useState({} as any);
  const { theme, setTheme } = useTheme();

  const { getLang, error, isLoading } = useLanguage();

  const [room, setRoom] = useState([
    { id: 0, checked: false, value: "English" },
    { id: 1, checked: false, value: "French" },
    { id: 2, checked: false, value: "Spanish" },
    { id: 3, checked: false, value: "Youruba" },
    { id: 4, checked: false, value: "Igbo" },
    { id: 5, checked: false, value: "Hausa" },
    { id: 6, checked: false, value: "Ijaw" },
    { id: 7, checked: false, value: "German" },
    { id: 8, checked: false, value: "Chinese" },
    { id: 9, checked: false, value: "Senegal" },
  ]);

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();
    const lang = language.value;
    const filterRoom = isChecked();

    const validity = isValidPayload(lang, filterRoom);
    const payload = {
      lang: lang,
      groups: filterRoom,
    };
    if (!validity) {
      await getLang(payload);
      console.log(payload);
      router.push("/chats");
    }
  };

  const handleCheck = (id: any) => {
    setRoom(
      room.map((todo) => {
        if (todo.id === id) return { ...todo, checked: !todo.checked };
        return todo;
      })
    );
  };

  const getLanguage = (value: string) => {
    setLanguage({
      ...language,
      value,
    });
  };

  const isChecked = () => {
    const filterChecked = room.filter((item: any) => item.checked === true);

    return filterChecked.map((item: any) => {
      return item.value;
    });
  };

  const isValidPayload = (lang: any, room: any) => {
    if (lang === undefined) {
      message.warn("Please select a language");
      return true;
    } else if (room.length === 0) {
      message.warn("Please select at lease one room language");
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="bg-[#f2f3f5] dark:bg-[#1f2e2b] h-screen w-full ">
      <main className="w-[90%] md:w-[500px] m-auto  ">
        <div className=" flex justify-center  items-center my-8">
          <div
            onClick={() => router.back()}
            className="font-semibold md:absolute  md:left-32 text-[#171B23]  px-8 py-2 rounded hover:shadow-lg border bg-gray-200 text-base cursor-pointer "
          >
            &larr; Go back
          </div>
          <div className="">
            {theme === "dark" ? (
              <div className="">
                <Image
                  src={Lingo.src}
                  width="136px"
                  height="112px"
                  alt=""
                  className=""
                />
              </div>
            ) : (
              <div className="">
                <Image
                  src={Logo2.src}
                  alt=""
                  width="136"
                  height="112"
                  className=""
                />
              </div>
            )}
          </div>
        </div>
        <div className=" w-5/6 mx-auto">
          <label
            htmlFor=""
            className=" text-[#171B23] dark:text-[#DCE0E8] font-semibold text-base "
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
              {room.map((item) => (
                <Option
                  key={item.id}
                  value={item.value}
                  style={{
                    width: "100%",
                    height: "50px",
                    border: "none",
                    background: "#E9EBEC",
                    fontWeight: "400",
                  }}
                >
                  {item.value}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="w-5/6  m-auto my-8">
          <label
            htmlFor=""
            className="font-medium dark:text-[#DCE0E8] text-base text-[#171B23]"
          >
            Please select your desired language room
          </label>
          <div className="py-2 flex flex-col justify-start text-base text-[#171B23]">
            {room.map((item) => (
              <div key={item.id} className="my-1 flex items-center mr-4">
                <div className="" onChange={() => handleCheck(item.id)}>
                  {item.checked ? (
                    <input
                      checked
                      type="checkbox"
                      name=""
                      id="teal-checkbox"
                      className="text-teal-600  dark:bg-[#f2f3f5] bg-gray-200 "
                    />
                  ) : (
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className=" border border-gray-100  dark:bg-[#f2f3f5] bg-gray-200 "
                    />
                  )}
                </div>
                <label
                  htmlFor="teal-checkbox"
                  className="ml-2 text-sm text-[#171B23] dark:text-[#DCE0E8]"
                >
                  {item.value}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <button
            className={
              isLoading
                ? "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
                : "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
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

export default Language;
