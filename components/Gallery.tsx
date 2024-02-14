import type { Photo } from "@/models/type";
import PhotoItem from "./PhotoItem";

type Probs = { listes: Photo[] | undefined };
export default function Gallery({ listes }: Probs) {
  return (
    <div className="h-full w-full grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 gap-1">
      {listes?.map((photo, i) => (
        <PhotoItem key={i} photo={photo} />
      ))}
    </div>
  );
}
