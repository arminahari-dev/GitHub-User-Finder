import React from "react";
import searchIcon from "../assets/icons/search.png";

interface SearchInputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  input: string;
  fetchUserData: (username: string) => void;
  isloading: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  input,
  setInput,
  fetchUserData,
  isloading,
}) => {
  return (
    <div className="flex items-center bg-card-light dark:bg-card-dark shadow-2xl rounded-lg w-full h-[60px]">
      <img src={searchIcon} alt="Search Icon" className="ml-4 w-5 h-5" />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent px-4 py-2 outline-none placeholder-gray-500"
        placeholder="Search GitHub Username..."
      />
      <button
        className="bg-primary mr-4 max-[375px]:ml-[-3rem] px-3 py-2 rounded-md font-medium text-white cursor-pointer"
        onClick={() => fetchUserData(input)}
      >
        {isloading ? "loading ..." : "Search"}
      </button>
    </div>
  );
};

export default SearchInput;
