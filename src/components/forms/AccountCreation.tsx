import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import FormWrapper from "../ui/FormWrapper";
import { FormValuesProps } from "../../utils/interfaces";

const AccountCreation: React.FC<FormValuesProps> = ({ register }) => {
  return (
    <FormWrapper title="Account Creation">
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <HiOutlineMail />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="Email"
          required
          {...register("user_email")}
        />
      </div>
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <RiLockPasswordLine />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="Password"
          required
          {...register("user_password")}
        />
      </div>
    </FormWrapper>
  );
};

export default AccountCreation;
