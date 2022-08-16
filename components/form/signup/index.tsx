import React from "react";
import { Input } from "antd";
import Link from "next/link";

const SignupForm = () => {
  return (
    <div className=" md:w-[500px] m-auto   ">
      <h2 className="font-medium text-4xl text-center my-4 mb-14 py-2 ">
        Sign Up
      </h2>
      <form action="" className="mt-6  p-2 ">
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label htmlFor="username" className=" font-medium text-base">
            Username
          </label>
          <Input
            placeholder="Username"
            size="large"
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
            style={{ background: "#E9EBEC", height: "50px", border: "none" }}
          />
        </div>
        <div className="flex flex-col gap-0.5 py-2 mb-4">
          <label htmlFor="username" className=" font-medium text-base">
            Comfirm Password
          </label>
          <Input.Password
            placeholder="Repeat password"
            size="large"
            style={{ background: "#E9EBEC", height: "50px", border: "none" }}
          />
        </div>
        <button className="h-[50px] rounded-lg bg-[#AAE8DF] text-[#1F2D2B] w-full py-2 mb-2 font-bold ">
          Sign Up
        </button>
        <div className="py-4 text-center">Or</div>
        <button className="w-full h-[50px] rounded-lg bg-[#525765] text-[#D5D7DA] py-2 mb-4 font-bold ">
          Continue with Google
        </button>
      </form>
      <div className="text-[#1F2D2B] text-center">
        Already have an account? {""}
        <span className="text-[#99E3D9] ">
          <Link href="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignupForm;
