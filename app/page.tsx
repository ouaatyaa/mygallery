import Image from "next/image";

export default function Home() {
  console.log(process.env.API_ACCESSKEY);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}