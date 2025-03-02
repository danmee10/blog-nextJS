interface TagDisplayProps {
  tags: string[];
}

export default function TagDisplay({ tags }: TagDisplayProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-lg"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
