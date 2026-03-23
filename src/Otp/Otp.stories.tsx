import { useState } from "react";
import { Otp } from "./Otp";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Otp> = {
  title: "Komponentlər/Otp",
  component: Otp,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Otp>;

export const Default: Story = {
  args: {
    otpLength: 4,
  },
  render: (args) => (
    <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-secondary/20">
      <h3 className="text-xl font-bold text-center mb-2 text-secondary/90">
        Təsdiq Kodu
      </h3>
      <p className="text-center text-sm text-secondary/70 mb-6">
        Telefonunuza göndərilən 4 rəqəmli kodu daxil edin
      </p>
      <Otp {...args} />
    </div>
  ),
};

export const SixDigit: Story = {
  args: {
    otpLength: 6,
  },
  render: (args) => (
    <div className="p-8 w-full min-w-xl rounded-2xl shadow-sm border border-secondary/20">
      <h3 className="text-xl font-bold text-center mb-2 text-secondary/90">
        2FA Təsdiqi
      </h3>
      <p className="text-center text-sm text-secondary/70 mb-6">
        Authenticator tətbiqindəki 6 rəqəmli kodu daxil edin
      </p>
      <Otp {...args} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [verifiedCode, setVerifiedCode] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleComplete = (code: string) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setVerifiedCode(code);
      }, 1000);
    };

    return (
      <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-secondary/20 flex flex-col items-center">
        <h3 className="text-xl font-bold text-center mb-2 text-secondary/90">
          Kodu Təsdiqləyin
        </h3>
        <p className="text-center text-sm text-secondary/70 mb-6">
          Zəhmət olmasa "1234" və ya hər hansı 4 rəqəmli kodu yazaraq və ya
          yapışdıraraq test edin.
        </p>

        <Otp otpLength={4} onComplete={handleComplete} />

        {/* Yüklənmə və Nəticə vəziyyətləri */}
        <div className="mt-8 h-12 flex items-center justify-center w-full">
          {isLoading ? (
            <div className="text-primary font-medium animate-pulse flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
              Yoxlanılır...
            </div>
          ) : verifiedCode ? (
            <div className="text-green-600 font-medium px-4 py-2 bg-green-50 rounded-lg flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Kod təsdiqləndi: {verifiedCode}
            </div>
          ) : null}
        </div>
      </div>
    );
  },
};
