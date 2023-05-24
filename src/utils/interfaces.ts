import { UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";
import { FormValues } from "./schemas";

export interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

export interface FormData {
  name: string;
  surname: string;
  age: string;
  country: string;
  city: string;
  address: string;
  email: string;
  password: string;
}

export interface FormValuesProps {
  register: UseFormRegister<FormValues>;
}

export interface NavbarDataProps {
  path: string;
  pathname: string;
  icon: string;
}
