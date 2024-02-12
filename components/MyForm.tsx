"use client";
import type { Photo } from "@/models/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";
import { getData } from "@/actions/action";
import { useRouter } from "next/navigation";

function MyForm({
  mydata,
  total,
  total_pages,
}: {
  mydata: Photo[];
  total: number;
  total_pages: number;
}) {
  const [mysearch, setMysearch] = useState("");
  const [listes, setListes] = useState(mydata);
  const router = useRouter();
  const page = 2;
  const per_page = Math.ceil(total / total_pages);

  console.log("page: " + page, "per_page: " + per_page);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { tados, total, total_pages } = await getData(
      mysearch,
      page,
      per_page
    );
    setListes(tados);
    setMysearch("");
  };

  useEffect(() => {
    console.log("Inside UseEffect");
    router.push("/");
  }, [listes, router]);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row gap-2 px-10 py-4">
        <Input
          name="search"
          type="text"
          value={mysearch}
          onChange={(e) => setMysearch(e.target.value)}
          placeholder="Enter you Search ...."
        />
        <Button>Search</Button>
      </form>
      <div className="grid grid-cols-gallery gap-2 px-4 mb-4">
        {listes?.map((photo, i) => (
          <div
            key={i}
            className=" h-64 relative group border border-yellow-400 rounded-md"
          >
            <Image
              fill
              objectFit="cover"
              src={photo.urls.regular}
              alt={photo.alt_description}
              className=" group-hover:opacity-70 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default MyForm;