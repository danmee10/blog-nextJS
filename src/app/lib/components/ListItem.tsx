import Link from "next/link";
import { Card } from "./Card";
import { ListViewMode } from "../types/ListViewMode";
import Image from "next/image";
import { TagDisplay } from "./TagDisplay";
import { useState } from "react";
import { Item } from "../types/Item";

interface ListItemProps {
  item: Item;
  viewMode: ListViewMode;
}

export const ListItem = ({ item, viewMode }: ListItemProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="p-4 relative">
      <Link key={item.id} href={`/${item.bucket}/${item.slug}`}>
        {viewMode === ListViewMode.VERBOSE && (
          <div className="relative mb-4">
            <Image
              src={
                imageError || !item.image ? "/fallback-image.jpg" : item.image
              }
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
              width={200}
              height={120}
              onError={() => setImageError(true)}
            />
            <h2 className="absolute bottom-4 left-4 text-white text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-md">
              {item.name}
            </h2>
          </div>
        )}

        {viewMode !== ListViewMode.VERBOSE && (
          <h2 className="text-lg font-semibold">{item.name}</h2>
        )}

        {viewMode === ListViewMode.VERBOSE && (
          <p className="text-gray-600">{item.description}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          <TagDisplay tags={item.tags} />
        </div>
      </Link>
    </Card>
  );
};