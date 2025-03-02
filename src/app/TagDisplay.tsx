interface TagDisplayProps {
  tags: string[];
}

export function TagDisplay({ tags }: TagDisplayProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-medium text-gray-900 px-2.5 py-1 rounded-md bg-gray-100"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
