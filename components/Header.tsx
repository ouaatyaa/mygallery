import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="border-b w-full flex justify-between items-center h-[90px]">
      <span className="uppercase text-lg font-medium text-white">
        Photography Portfolio
      </span>
      <Button variant={"ghost"} className=" text-white">
        Get in touch &rarr;
      </Button>
    </header>
  );
}

export default Header;
