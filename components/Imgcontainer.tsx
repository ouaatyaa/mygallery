import MyForm from "./MyForm";
import { getData } from "@/actions/action";

export default async function Page() {
  const { tados, total, total_pages } = await getData("All", 1, 12);
  //console.log(tados);
  return (
    <div className="flex-1 border border-green-500 w-full  py-4 mb-4">
      <MyForm mydata={tados} total={total} total_pages={total_pages} />
    </div>
  );
}
