import { ReactElement, useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const nextStep = (): void =>
    setCurrentStepIndex((prev) =>
      prev >= steps?.length - 1 ? prev : prev + 1
    );
  const prevStep = (): void =>
    setCurrentStepIndex((prev) => (prev < 1 ? prev : prev - 1));

  return {
    steps,
    step: steps[currentStepIndex],
    isFirstIndex: currentStepIndex === 0,
    isLastIndex: currentStepIndex >= steps?.length - 1,
    currentStepIndex,
    nextStep,
    prevStep,
  };
};

export default useMultistepForm;
