import MyForm from "./MyForm";
import { getData } from "@/actions/action";

export default async function Imgcontainer({
  page,
  per_page,
  query,
}: {
  page: number;
  query: string;
  per_page: number;
}) {
  console.log("Imgcontainer .....First Appel .....");
  const { tados, total_pages } = await getData(query, page, per_page);
  return (
    <div className="flex-1  w-full h-full  py-4 mb-4 ">
      <MyForm
        mydata={tados}
        total_pages={total_pages}
        page={page}
        per_page={per_page}
        query={query}
      />
    </div>
  );
}
