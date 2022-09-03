import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input, message } from "antd";
import Link from "next/link";
import Spinner from "../../spinner";
import { useAuth } from "../../../common/hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, error, isLoading } = useAuth();

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();

    const checkPayload = isValidPayload(username, password);
    if (checkPayload) {
      message.warn("Username or password shouldn't be empty");
    } else {
      const payload = {
        username,
        password,
      };

      await auth("/api/users/login", "post", payload);
      router.push("/chats")
    }
  };

  const getUsername = (e: any) => {
    setUsername(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const isValidPayload = (username: string, password: string) => {
    return username === "" && password === "";
  };

  return (
    <div className=" w-[90%] md:w-[500px] m-auto   ">
      <h2 className="font-medium text-xl lg:text-4xl text-center my-4 mb-14 py-2 ">
        Login into your account
      </h2>
      <form action="" className="mt-6  p-2 ">
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label htmlFor="username" className=" font-medium text-base">
            Username
          </label>
          <Input
            placeholder="Username"
            size="large"
            value={username}
            onChange={getUsername}
            style={{ background: "#E9EBEC", height: "50px", border: "none" }}
          />
        </div>
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label htmlFor="username" className=" font-medium text-base">
            Password
          </label>
          <Input.Password
            placeholder="Password"
            size="large"
            value={password}
            onChange={getPassword}
            style={{ background: "#E9EBEC", height: "50px", border: "none" }}
          />
        </div>
        {/* <div className=""{...token}></div> */}

        <button
          className={
            isLoading
              ? "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base boxshadow bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
              : "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base boxshadow bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
          }
          onClick={sendRequest}
        >
          Login
          {isLoading && <Spinner />}
        </button>
        <div className="py-4 text-center">Or</div>
        <button className="w-full h-[50px] boxshadow  rounded bg-[#525765] text-[#D5D7DA] py-2 mb-4 font-bold ">
          Continue with Google
        </button>
      </form>
      <div className="text-[#1F2D2B] text-center">
        Dont have an account?{" "}
        <Link href="/signup">
          <span className="text-[#52B1A4] cursor-pointer hover:text-gray-600">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
