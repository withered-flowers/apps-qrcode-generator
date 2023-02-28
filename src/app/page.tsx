import { Inter } from "next/font/google";
import RegisterForm from "@/components/RegisterForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} p-0 m-0 flex flex-col gap-2 items-center justify-center min-h-screen`}
    >
      {/* This is the main */}
      <h1 className="text-3xl font-semibold">QRCode Generator API</h1>

      {/* Login / Register */}
      <RegisterForm />
    </main>
  );
}
