import React, { useRef, useState } from "react";

interface OtpProps {
  otpLength?: number;
  onComplete: (otp: string) => void;
}
export const Otp = ({ otpLength = 4, onComplete }: OtpProps) => {
  const [otpValues, setOtpValues] = useState<string[]>(
    Array.from({ length: otpLength }, () => ""),
  );
  const otpFieldsRef = useRef<HTMLInputElement[]>([]);

  const handleInput = (value: string, index: number) => {
    const digit = value.replace(/\D/g, "");
    if (digit.length > 1) {
      return;
    }
    const newOtpValues = [...otpValues];
    newOtpValues[index] = digit;
    setOtpValues(newOtpValues);
    if (digit !== "" && index < otpValues.length - 1) {
      otpFieldsRef.current[index + 1].focus();
    }
    const finalOtp: string = newOtpValues.join("");

    if (newOtpValues.every((digit) => digit !== "")) {
      onComplete(finalOtp);
    }
  };
  const handleBackspace = (index: number) => {
    if (otpValues[index] !== "") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);
    } else if (index > 0) {
      otpFieldsRef.current[index - 1].focus();
    }
  };
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipBoardText = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, otpLength);
    if (!clipBoardText) return;
    const newOtpValues = [...otpValues];
    for (let i = 0; i < clipBoardText.length; i++) {
      newOtpValues[i] = clipBoardText[i];
    }
    const nextFocusIndex = Math.min(
      clipBoardText.length,
      otpLength - 1,
    );
    otpFieldsRef.current[nextFocusIndex]?.focus();
    setOtpValues(newOtpValues);

    if (newOtpValues.every((digit) => digit !== "")) {
      onComplete(newOtpValues.join(""));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-sm mx-auto">
        {otpValues.map((value, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={value}
            onChange={(e) => handleInput(e.target.value, index)}
            onPaste={handlePaste}
            onKeyDown={(e) => {
              if (e.key === "Backspace") {
                handleBackspace(index);
              }
            }}
            ref={(ref: HTMLInputElement | null) => {
              if (ref) {
                otpFieldsRef.current[index] = ref;
              }
            }}
            className="w-12 h-14 sm:w-16 sm:h-16 flex-1 text-center text-2xl sm:text-3xl font-bold text-secondary/90 dark:text-gray-100 bg-white dark:bg-gray-900 border-2 border-secondary/20 dark:border-secondary/40 rounded-xl outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm hover:border-secondary/40 dark:hover:border-secondary/60 caret-primary placeholder:text-secondary/30 dark:placeholder:text-gray-500"
          />
        ))}
      </div>
    </>
  );
};
