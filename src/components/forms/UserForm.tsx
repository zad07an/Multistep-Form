import React from "react";
import FormWrapper from "../ui/FormWrapper";
import { AiOutlineUser } from "react-icons/ai";
import { FormValuesProps } from "../../utils/interfaces";

const UserForm: React.FC<FormValuesProps> = ({ register }) => {
  return (
    <FormWrapper title="User Details">
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <AiOutlineUser />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="Name"
          required
          {...register("user_name")}
        />
      </div>
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <AiOutlineUser />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="Surname"
          required
          {...register("user_surname")}
        />
      </div>
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <AiOutlineUser />
        </div>
        <input
          type="number"
          className=" h-full px-2 outline-0"
          placeholder="Age"
          required
          {...register("user_age")}
        />
      </div>
    </FormWrapper>
  );
};

export default UserForm;
