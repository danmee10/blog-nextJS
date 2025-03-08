interface TagDisplayProps {
  tags: string[];
}

export function TagDisplay({ tags }: TagDisplayProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition-all duration-300 ease-in-out"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
