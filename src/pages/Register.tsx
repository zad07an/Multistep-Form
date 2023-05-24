import React from "react";
import useMultistepForm from "../hooks/useMultistepForm";
import UserForm from "../components/forms/UserForm";
import AddressForm from "../components/forms/AddressForm";
import AccountCreation from "../components/forms/AccountCreation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, contactSchema } from "../utils/schemas";
import registerSVG from "../assets/images/register/bg-19.svg";

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const {
    steps,
    step,
    currentStepIndex,
    isFirstIndex,
    isLastIndex,
    nextStep,
    prevStep,
  } = useMultistepForm([
    <UserForm register={register} />,
    <AddressForm register={register} />,
    <AccountCreation register={register} />,
  ]);

  const handleSubmitRegister = (values: FormValues) => {
    if (values && !isLastIndex) {
      reset();
      return nextStep();
    } else {
      console.log(values);
    }
  };

  return (
    <section className=" flex h-full w-full items-center justify-center bg-blue-600">
      <div className=" grid aspect-video w-[60%] grid-cols-[1fr_2fr] overflow-hidden rounded-lg bg-white">
        <div
          className=" relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden bg-blue-500 px-4 text-center uppercase"
          style={{
            background: `linear-gradient(rgba(0, 0, 220, 0.6), rgba(0, 0, 220, 0.6)), url("${registerSVG}") no-repeat center / cover`,
          }}
        >
          <p className=" text-xl font-thin text-white">Join us!</p>
          <p className=" text-2xl font-semibold text-white">
            Start your journey today!
          </p>
        </div>
        <form
          className=" relative flex h-full flex-col items-center px-6 pb-4 pt-20"
          onSubmit={handleSubmit(handleSubmitRegister)}
          autoComplete="off"
        >
          <div className=" absolute right-4 top-4">
            <p className=" text-lg font-semibold text-gray-500">
              {currentStepIndex + 1}/{steps?.length}
            </p>
          </div>
          {step}
          <div className=" absolute bottom-0 flex w-full items-center justify-between gap-6 px-4 py-4">
            <div>
              <p className=" text-primary-blue underline">Have an account?</p>
            </div>
            <div className=" flex items-center gap-4">
              {!isFirstIndex && (
                <button
                  type="button"
                  className=" rounded-sm bg-secondary-blue px-10 py-2 text-white"
                  onClick={prevStep}
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={` rounded-sm ${
                  isLastIndex ? "bg-primary-green" : "bg-secondary-blue"
                } px-10 py-2 text-white`}
                onClick={nextStep}
              >
                {isLastIndex ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
