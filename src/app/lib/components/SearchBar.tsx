import { AlignJustify, Grid, List } from "lucide-react";
import { Button } from "./Button";
import { ListViewMode } from "../types/ListViewMode";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
  viewMode: ListViewMode;
  setViewMode: (viewMode: ListViewMode) => void;
}

export default function SearchBar({
  search,
  setSearch,
  viewMode,
  setViewMode,
}: SearchBarProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md"
      />
      
      <div className="flex gap-2">
        <Button
          variant={viewMode === ListViewMode.VERBOSE ? "default" : "outline"}
          onClick={() => setViewMode(ListViewMode.VERBOSE)}
        >
          <AlignJustify size={18} />
        </Button>
        <Button
          variant={viewMode === ListViewMode.STANDARD ? "default" : "outline"}
          onClick={() => setViewMode(ListViewMode.STANDARD)}
        >
          <Grid size={18} />
        </Button>
        <Button
          variant={viewMode === ListViewMode.CONDENSED ? "default" : "outline"}
          onClick={() => setViewMode(ListViewMode.CONDENSED)}
        >
          <List size={18} />
        </Button>
      </div>
    </div>
  );
}
