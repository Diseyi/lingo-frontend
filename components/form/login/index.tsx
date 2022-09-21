import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../../hooks/useAuthContext";
import {  message } from "antd";
import axios from "axios";
import Link from "next/link";
import Spinner from "../../spinner";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { dispatch } = useAuthContext() as any;

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();

    const checkPayload = isValidPayload(username, password);
    if (checkPayload) {
      message.warn("Username or password shouldn't be empty");
    } else {
      setIsLoading(true);
      const headers = {
        "Content-Type": "application/json",
      };

      const payload = JSON.stringify({
        username,
        password,
      });

      const reqOptions = {
        url: "https://backend-lingo.herokuapp.com/api/users/login",
        method: "POST",
        headers: headers,
        data: payload,
      };

      try {
        const response = await axios.request(reqOptions);
        const data = response?.data;

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "LOGIN", payload: data });
        setIsLoading(false);

        router.push("/chats")
      } catch (error: any) {
        const errorResponse = error.response;
        setIsLoading(false);
        if (errorResponse.status === 400) {
          message.warn("Incorrect details");
          return;
        }
        message.warn("Server error")
      }
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
