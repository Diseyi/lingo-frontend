import React, { useState } from "react";
import { useRouter } from "next/router";
import { message } from "antd";
import Link from "next/link";
import Spinner from "../../spinner";
import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, isLoading } = useAuth();

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

      const response = await auth("/api/users/login", "post", payload);
      if (response.statusText === "Bad Request") {
        if (response.status === 400) {
          message.warn("Incorrect details");
          return;
        }
        message.warn("Server error");
        return;
      }

      router.push("/chats");
    }
  };

  const getUsername = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  const getPassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const isValidPayload = (username: string, password: string) => {
    return username === "" && password === "";
  };

  return (
    <div className=" w-[90%] md:w-[500px] m-auto   ">
      <h2 className="font-medium dark:text-[#DCE0E8] text-xl lg:text-4xl text-center my-4 mb-14 py-2 ">
        Login into your account
      </h2>
      <form action="" className="mt-6  p-2 ">
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label
            htmlFor="username"
            className="dark:text-[#DCE0E8] font-medium text-base"
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={getUsername}
            className="h-[50px] bg-[#E9EBEC] dark:text-[#DCE0E8] dark:bg-[#41494D] px-4 rounded "
          />
        </div>
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label
            htmlFor="username"
            className="dark:text-[#DCE0E8] font-medium text-base"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={getPassword}
            className="h-[50px] bg-[#E9EBEC] dark:text-[#DCE0E8] dark:bg-[#41494D] px-4 rounded "
          />
        </div>

        <button
          className={
            isLoading
              ? "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
              : "h-[50px] flex items-center  text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base  bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
          }
          onClick={sendRequest}
        >
          Login
          {isLoading && <Spinner />}
        </button>
        <div className="py-4 dark:text-[#DCE0E8] text-center">Or</div>
        <button className="w-full h-[50px] rounded bg-[#525765] text-[#D5D7DA] py-2 mb-4 font-bold ">
          Continue with Google
        </button>
      </form>
      <div className="text-[#1F2D2B] dark:text-[#DCE0E8] text-center">
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
