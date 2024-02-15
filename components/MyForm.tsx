"use client";
import type { Photo } from "@/models/type";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { getData } from "@/actions/action";
import { useRouter } from "next/navigation";
import Gallery from "./Gallery";
import { Search } from "lucide-react";

function MyForm({
  page,
  per_page,
  mydata,
  total_pages,
  query,
}: {
  query: string;
  page: number;
  per_page: number;
  mydata: Photo[];
  total_pages: number;
}) {
  const [mysearch, setMysearch] = useState("");
  const [listes, setListes] = useState(mydata);
  const [queryValue, setQueryValue] = useState(query);
  const router = useRouter();
  const [active_page, setActivePage] = useState(1);
  const [totalpg, setTotalpg] = useState(total_pages);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (mysearch === "") return;
    const { tados, total_pages } = await getData(mysearch, 1, per_page);
    setListes(tados);
    setTotalpg(total_pages);
    setQueryValue(mysearch);
    setMysearch("");
    router.push(`/?page=1&query=${mysearch}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-end items-center gap-2  px-1 md:px-10 mb-4"
      >
        <Input
          name="search"
          className=" max-w-56"
          type="text"
          value={mysearch}
          onChange={(e) => setMysearch(e.target.value)}
          placeholder="Enter you Search ...."
        />
        <Button type="submit">
          <Search />
        </Button>
      </form>

      {total_pages === 0 && (
        <h1 className=" text-3xl font-bold text-white text-center">
          No Image Found !
        </h1>
      )}
      {total_pages !== 0 && <Gallery listes={listes} />}
      <div className=" w-full flex justify-center items-center gap-x-4 mt-2">
        {page !== 1 && (
          <a
            href={`/?page=${page - 1}&query=${queryValue}`}
            className=" text-white font-bold"
            onClick={() => {
              setActivePage((prev) => prev - 1);
            }}
          >
            {"<<"}
          </a>
        )}

        <span className=" text-white font-bold">
          {" "}
          {page}/{totalpg}{" "}
        </span>

        {page !== total_pages && total_pages !== 0 && (
          <a
            href={`/?page=${page + 1}&query=${queryValue}`}
            className=" text-white font-bold"
            onClick={() => {
              setActivePage((prev) => prev + 1);
            }}
          >
            {">>"}
          </a>
        )}
      </div>
    </>
  );
}

export default MyForm;
