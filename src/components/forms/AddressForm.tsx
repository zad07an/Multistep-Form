import React from "react";
import FormWrapper from "../ui/FormWrapper";
import { FaRegAddressCard, FaCity, FaRegFlag } from "react-icons/fa";
import { FormValuesProps } from "../../utils/interfaces";

const AddressForm: React.FC<FormValuesProps> = ({ register }) => {
  return (
    <FormWrapper title="Address">
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <FaRegFlag />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="County"
          required
          {...register("user_country")}
        />
      </div>
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <FaCity />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="City"
          required
          {...register("user_city")}
        />
      </div>
      <div className=" grid h-10 w-full grid-cols-[40px_400px] overflow-hidden rounded-sm border-2 border-blue-500">
        <div className=" flex h-full items-center justify-center text-xl text-gray-500">
          <FaRegAddressCard />
        </div>
        <input
          type="text"
          className=" h-full px-2 outline-0"
          placeholder="Address"
          required
          {...register("user_address")}
        />
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
