import { ItemBucket } from "../constants/ItemBucket";

export interface Item {
  id: number | string;
  name: string;
  description: string;
  slug: string;
  tags: string[];
  image: string;
  bucket: ItemBucket;
}
