import { AlignJustify, Grid } from "lucide-react";
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
        <Grid size={18} />
      </Button>
      <Button
        variant={viewMode === ListViewMode.CONDENSED ? "default" : "outline"}
        onClick={() => setViewMode(ListViewMode.CONDENSED)}
      >
        <AlignJustify size={18} />
      </Button>
    </div>
  );
};
