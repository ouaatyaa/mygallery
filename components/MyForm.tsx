"use client";
import type { Photo } from "@/models/type";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { getData } from "@/actions/action";
import { useRouter } from "next/navigation";
import Gallery from "./Gallery";
import Link from "next/link";

function MyForm({
  page,
  per_page,
  mydata,
  total_pages,
}: {
  page: number;
  per_page: number;
  mydata: Photo[];
  total_pages: number;
}) {
  const [mysearch, setMysearch] = useState("");
  const [listes, setListes] = useState(mydata);
  const [queryValue, setQueryValue] = useState("all");
  const router = useRouter();
  const [active_page, setActivePage] = useState(1);
  const [totalpg, setTotalpg] = useState(total_pages);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (mysearch === "") return;
    const { tados, total_pages } = await getData(
      mysearch,
      Number(page),
      Number(per_page)
    );
    setListes(tados);
    setTotalpg(total_pages);
    setQueryValue(mysearch);
    setMysearch("");
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 px-10 mb-4">
        <Input
          name="search"
          type="text"
          value={mysearch}
          onChange={(e) => setMysearch(e.target.value)}
          placeholder="Enter you Search ...."
        />
        <Button>Search</Button>
      </form>
      <Gallery listes={listes} />

      {/*  Pagination ( if total pages = 1 hide Pagination) */}

      <div className=" w-full flex justify-center items-center gap-2 mt-2">
        {/* //Prev page */}
        {page !== 1 && (
          <Link
            href={`http://localhost:3000/?page=${page - 1}&query=${queryValue}`}
            className=" text-white font-bold"
            onClick={() => {
              setActivePage((prev) => prev - 1);
            }}
          >
            {"<<"}
          </Link>
        )}
        {/*   // Active page */}

        <span className=" text-white font-bold">
          {" "}
          {page}/{totalpg}{" "}
        </span>

        {/*    //Next page */}
        {page !== total_pages && (
          <Link
            href={`http://localhost:3000/?page=${page + 1}&query=${queryValue}`}
            className=" text-white font-bold"
            onClick={() => {
              setActivePage((prev) => prev + 1);
            }}
          >
            {">>"}
          </Link>
        )}
      </div>
    </>
  );
}

export default MyForm;
