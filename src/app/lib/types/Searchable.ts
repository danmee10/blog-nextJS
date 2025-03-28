import { Item } from "./Item";

export type Searchable = Pick<Item, "name" | "description" | "tags">;
