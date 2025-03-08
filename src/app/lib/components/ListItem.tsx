import Link from "next/link";
import { Card } from "./Card";
import { ListViewMode } from "../types/ListViewMode";
import Image from "next/image";
import { TagDisplay } from "../../TagDisplay";
import { useState } from "react";

export interface Item {
  id: number | string;
  heading: string;
  subHeading: string;
  name: string;
  tags: string[];
  image: string;
}

interface ListItemProps {
  item: Item;
  viewMode: ListViewMode;
}

export const ListItem = ({ item, viewMode }: ListItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="p-4 relative">
      <Link key={item.id} href={`/blog/${item.name}`}>
        {viewMode === ListViewMode.VERBOSE && (
          <div className="relative mb-4">
            <Image
              src={
                imageError || !item.image ? "/fallback-image.jpg" : item.image
              }
              alt={item.heading}
              className="w-full h-48 object-cover rounded-md"
              width={200}
              height={120}
              onError={() => setImageError(true)}
            />
            <h2 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-md">
              {item.heading}
            </h2>
          </div>
        )}

        {viewMode !== ListViewMode.VERBOSE && (
          <h2 className="text-lg font-semibold">{item.heading}</h2>
        )}

        {viewMode === ListViewMode.VERBOSE && (
          <p className="text-gray-600">{item.subHeading}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          <TagDisplay tags={item.tags} />
        </div>
      </Link>
    </Card>
  );
};