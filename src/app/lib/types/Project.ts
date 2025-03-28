import { Item } from "./Item";

export interface Project extends Item {
  demoLink?: string;
  sourceLinks: string[];
}
