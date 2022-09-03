import React, { useState } from "react";
import { useRouter } from "next/router";
import { message, Select } from "antd";
import { Checkbox } from "antd";
import Spinner from "../../components/spinner";
import Image from "next/image";
import Logo2 from "../../assets/icon/logo2.svg";
import { useLanguage } from "../../common/hooks/useLanguage";

const { Option } = Select;

const Language = () => {
  const [language, setLanguage] = useState({} as any);
  const [room, setRoom] = useState([] as any);
   const { getLang, error, isLoading } = useLanguage();

  const group = [
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
  ];

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();
    const lang = language.value;

    isValidPayload(lang, room);

    const payload = {
      lang: lang,
      room: room,
    };

    console.log("payload", payload)

    await getLang(payload);
    setLanguage({})
    setRoom([])
    
    // router.push("/chats")
  };

  const getCheckedLang = (e: any) => {
    group.forEach((item: any) => {
      if (item.id === e.target.value) {
        return (item.checked = e.target.checked);
      }
    });

    isChecked();
  };

  const getLanguage = (value: string) => {
    setLanguage({
      ...language,
      value,
    });
  };

  const isChecked = () => {
    const filterChecked = group.filter((item: any) => item.checked === true);

    return filterChecked.map((item: any) => {
      setRoom([...room, item.value]);
    });
  };

  const isValidPayload = (lang: any, room: any) => {
    if (lang === undefined) {
      message.warn("Please select a language");
    } else if (room.length === 0) {
      message.warn("Please select at lease one room language");
    }
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
              {group.map((item) => (
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
          <label htmlFor="" className="font-medium text-base text-[#171B23]">
            Please select your desired language room
          </label>
          <div className="py-2 flex flex-col justify-start text-base text-[#171B23]">
            {group.map((item) => (
              <div key={item.id} className="my-1">
                <Checkbox value={item.id} onChange={getCheckedLang}>
                  {item.value}
                </Checkbox>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <button
            className={
              isLoading
                ? "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base boxshadow bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
                : "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base boxshadow bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
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
