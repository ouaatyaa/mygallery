import { Button } from "@/components/ui/button";
import Link from "next/link";

function Header() {
  return (
    <header className="border-b w-full flex justify-between items-center h-[90px]">
      <Link href={"/"} className="uppercase text-lg font-medium text-white">
        Photography Portfolio
      </Link>
      <Button variant={"ghost"} className=" text-white">
        Get in touch &rarr;
      </Button>
    </header>
  );
}

export default Header;
