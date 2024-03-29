import Header from "@/components/Header";
import Imgcontainer from "@/components/Imgcontainer";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const page = parseInt(searchParams["page"] || "1");
  const query = searchParams["query"] ?? "all";
  const per_page = parseInt(searchParams["per_page"] || "10");

  return (
    <main className="grid items-center min-h-screen">
      <div className=" overflow-hidden relative  h-full bg-black">
        <div className="px-10  flex flex-col justify-center items-center  ">
          <Header />
          <Imgcontainer page={page} query={query} per_page={per_page} />
        </div>
      </div>
    </main>
  );
}
