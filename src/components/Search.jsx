import { useState } from "react";

function Search({ onSearch, quantityFound, ...props }) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event) {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div className="max-w-[624px] mx-auto mt-16">
      <input
        {...props}
        onChange={handleSearch}
        value={searchValue}
        className="w-full border border-gray-100 shadow-md px-6 py-auto h-16 placeholder:font-headings placeholder:font-bold placeholder:text-2xl placeholder:text-[#656EC2]"
      />
      <div className="font-primary mx-8 mt-4">
        Found characters: {quantityFound}
      </div>
    </div>
  );
}

export default Search;
