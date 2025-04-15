export function mergeClasses(
  ...classes: (string | Record<string, boolean> | undefined)[]
) {
  return classes
    .flatMap((klass) =>
      typeof klass === "string"
        ? klass
        : typeof klass === "object" && klass !== null
        ? Object.keys(klass).filter((key) => klass[key])
        : []
    )
    .join(" ");
}
