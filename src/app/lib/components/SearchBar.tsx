interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
  placeholder: string;
}

export const SearchBar = ({
  search,
  setSearch,
  placeholder,
}: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
