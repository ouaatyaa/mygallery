"use server";
import type { Photo } from "@/models/type";
import env from "@/lib/env";
const API_KEY = env.API_ACCESSKEY;

export async function getData(search: string, page: number, per_page: number) {
  const searchValue = search || "All";
  const Npage = page || 1;
  const Nper_page = per_page || 10;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=${Npage}&per_page=${Nper_page}&query=${searchValue}&client_id=${API_KEY}`
  ).then((res) => res.json());
  if (!res.ok) {
    console.error("Failed to......");
  }

  const tados: Photo[] = res.results;
  const total: number = res.total;
  const total_pages: number = res.total_pages;
  console.log(" total - total_pages:", total, total_pages);
  return { tados, total, total_pages };
}
