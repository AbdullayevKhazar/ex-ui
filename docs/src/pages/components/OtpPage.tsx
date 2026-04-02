import { useState } from "react";
import { Otp } from "../../../../src/Otp/Otp";


export function OtpPage() {
  const [result, setResult] = useState<string>("");
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">OTP</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Bir dəfəlik parol daxil etmə. Avtomatik fokus, yapışdırma dəstəyi.
      </p>
        <Otp otpLength={4} onComplete={setResult} />
        {result && <p className="mt-4 text-sm text-primary">OTP: {result}</p>}
      <pre className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm">
        <code>{`<Otp otpLength={6} onComplete={(code) => console.log(code)} />`}</code>
      </pre>
    </div>
  );
}
