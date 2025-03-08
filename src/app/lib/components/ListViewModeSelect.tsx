import { AlignJustify, Grid, List } from "lucide-react";
import { Button } from "./Button";
import { ListViewMode } from "../types/ListViewMode";

interface ListViewModeSelectProps {
  viewMode: ListViewMode;
  setViewMode: (viewMode: ListViewMode) => void;
}

export const ListViewModeSelect = ({
  viewMode,
  setViewMode,
}: ListViewModeSelectProps) => {
  return (
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
  );
};
