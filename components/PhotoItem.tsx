import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/models/type";

type Probs = { photo: Photo };

export default function PhotoItem({ photo }: Probs) {
  const widthHeightRatio = photo.height / photo.width;
  const photoHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(photoHeight / 10) + 1;

  return (
    <div
      className={`overflow-hidden`}
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link
        href={photo.urls.regular}
        target="_blank"
        className="grid place-content-center"
      >
        <div className="group rounded-xl overflow-hidden">
          <Image
            width={photo.width}
            height={photo.height}
            sizes="250px"
            src={photo.urls.regular}
            alt={photo.alt_description}
            className=" group-hover:opacity-75
             cursor-pointer"
          />
        </div>
      </Link>
    </div>
  );
}
