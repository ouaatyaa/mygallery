import bgimg from "@/public/olff.jpg";
import Image from "next/image";
import Header from "@/components/Header";
import Imgcontainer from "@/components/Imgcontainer";

export default async function Home() {
  return (
    <main className="grid items-center min-h-screen">
      <div className=" overflow-hidden border-2 border-yellow-300  relative  h-full">
        <div className=" absolute -z-50  h-full w-full bg-black">
          <Image
            src={bgimg}
            /* src="/olff.jpg" */
            alt="Backround image"
            fill
            objectFit="contain"
            objectPosition="700px 200px"
            /*    layout="intrinsic"
            width={3635}
            height={4846} */
          />
        </div>

        <div className="px-10  flex flex-col justify-center items-center w-full h-full">
          <Header />
          <Imgcontainer />
        </div>
      </div>
    </main>
  );
}
