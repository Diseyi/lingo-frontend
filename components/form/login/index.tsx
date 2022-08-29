import React, { useContext, useState } from "react";
import { Input } from "antd";
import { useRouter } from "next/router";
import { AuthContext } from "../../../store/auth";
import { Authentication } from "../../../common/api/auth.api";
import Link from "next/link";
import Spinner from "../../spinner";

const Login = () => {
  const router = useRouter();

  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUsername, setToken } = useContext(AuthContext);

  const handleLogin = (e: any) => {
    e.preventDefault();

    // const userInSession = sessionStorage.getItem("auth") || "";
    // const parsed = userInSession ? JSON.parse(userInSession) : "";
    // console.log(parsed);

    sendRequest();
  };

  const sendRequest = async () => {
    setIsLoading(true);

    const payload = {
      username: firstname,
      password,
    };

    const isValid = validateValue(firstname, password);

    if (isValid) {
      setIsLoading(false);
      return alert("Please enter a valid email and password");
    } else {
      const { data, error } = await Authentication.login(payload);
      setIsLoading(false);
      if (error) {
        error;
      }
      console.log(data);
      setToken(data.token);
      setUsername(data.username);
      sessionStorage.setItem("auth", JSON.stringify(data));
      setPassword("");
      setFirstName("");
    }
  };

  const validateValue = (firstname: string, password: string) => {
    return firstname === undefined || password === undefined;
  };

  const getPassword = (e: any) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const getFirstname = (e: any) => {
    setFirstName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className=" w-[90%] md:w-[500px] m-auto   ">
      <h2 className="font-medium text-4xl text-center my-4 mb-14 py-2 ">
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
            value={firstname}
            onChange={getFirstname}
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

        <button
          className="h-[50px] flex items-center justify-center gap-2 rounded-lg bg-[#AAE8DF] text-[#1F2D2B] w-full py-2 mb-2 font-bold "
          onClick={handleLogin}
        >
          Login
          {isLoading && <Spinner />}
        </button>
        <div className="py-4 text-center">Or</div>
        <button className="w-full h-[50px] rounded-lg bg-[#525765] text-[#D5D7DA] py-2 mb-4 font-bold ">
          Continue with Google
        </button>
      </form>
      <div className="text-[#1F2D2B] text-center">
        Dont have an account? {""}
        <span className="text-[#99E3D9] ">
          <Link href="/signup"> Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
