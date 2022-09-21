import React, { useState } from "react";
import { useRouter } from "next/router";
4;
import { useAuthContext } from "../../../hooks/useAuthContext";
import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import Spinner from "../../spinner";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { dispatch } = useAuthContext() as any;

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();

    const samePassword = comparePassword();
    const checkPayload = isValidPayload(username, password, samePassword);
    const checkUsernameLength = usernameLength(username);

    if (!samePassword) {
      message.warn("Password doesn't match");
    } else if (checkPayload) {
      message.warn("Username or password shouldn't be empty");
    } else if (checkUsernameLength) {
      message.warn("Username length should be more that four letters");
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
        url: "https://backend-lingo.herokuapp.com/api/users/signup",
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

        router.push("/language")
      } catch (error: any) {
        console.log(error)
        const errorResponse = error.response;
        setIsLoading(false);
        if (errorResponse.status === 400) {
          message.warn("User already registered");
          return;
        }
        message.warn("Server error")
      }
    }
  };

  const usernameLength = (username: string) => {
    if (username.length < 5) {
      return true;
    }
  };

  const getUsername = (e: { target: { value: string } }) => {
    setUsername(e.target.value);
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const getConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const comparePassword = () => {
    return password === confirmPassword;
  };

  const isValidPayload = (
    username: string,
    password: string,
    validPassword: boolean
  ) => {
    if (validPassword) {
      return username === "" && password === "";
    }
  };

  return (
    <div className="w-[90%] md:w-[500px] m-auto   ">
      <h2 className="font-medium dark:text-[#DCE0E8] text-xl lg:text-4xl text-center my-4 mb-10 py-2 ">
        Sign Up
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
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label
            htmlFor="username"
            className="dark:text-[#DCE0E8] font-medium text-base"
          >
            Comfirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={getConfirmPassword}
            className="h-[50px] bg-[#E9EBEC] dark:text-[#DCE0E8] dark:bg-[#41494D] px-4 rounded "
          />
        </div>
        <button
          className={
            isLoading
              ? "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
              : "h-[50px] flex items-center text-white hover:bg-[#AAE8DF] hover:text-gray-600 rounded text-base bg-[#52B1A4] cursor-pointer justify-center gap-2 rounded w-full py-2 mb-2 font-bold "
          }
          onClick={sendRequest}
        >
          Sign Up
          {isLoading && <Spinner />}
        </button>
        <div className="py-4 dark:text-[#DCE0E8] text-center">Or</div>
        <button className="w-full h-[50px] rounded bg-[#525765] text-[#D5D7DA] py-2 mb-4 font-bold ">
          Continue with Google
        </button>
      </form>
      <div className="text-[#1F2D2B] dark:text-[#DCE0E8] text-center">
        Already have an account? {""}
        <Link href="/login">
          <span className="text-[#52B1A4] cursor-pointer hover:text-gray-600">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
