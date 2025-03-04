export function cn(...classes: (string | Record<string, boolean> | undefined)[]) {
  return classes
    .flatMap((cls) =>
      typeof cls === "string"
        ? cls
        : typeof cls === "object" && cls !== null
        ? Object.keys(cls).filter((key) => cls[key])
        : []
    )
    .join(" ");
}