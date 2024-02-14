import type { Photo } from "@/models/type";
import PhotoItem from "./PhotoItem";

type Probs = { listes: Photo[] | undefined };
export default function Gallery({ listes }: Probs) {
  return (
    <div className="h-full w-full grid grid-cols-4 gap-2 ">
      {listes?.map((photo, i) => (
        <PhotoItem key={i} photo={photo} />
      ))}
    </div>
  );
}
