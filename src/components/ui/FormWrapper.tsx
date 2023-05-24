import React from "react";
import { FormWrapperProps } from "../../utils/interfaces";
import { motion } from "framer-motion";

const FormWrapper: React.FC<FormWrapperProps> = ({ title, children }) => {
  return (
    <motion.div
      className=" flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h2 className=" text-2xl font-semibold text-gray-500">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
};

export default FormWrapper;
