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
  const { tados, total_pages } = await getData(
    query,
    Number(page),
    Number(per_page)
  );

  return (
    <div className="flex-1  w-full h-full  py-4 mb-4 ">
      <MyForm
        mydata={tados}
        total_pages={total_pages}
        page={page}
        per_page={per_page}
      />
    </div>
  );
}
