import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchComics from "../../hooks/searchComics";

const SearchBox = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const result = searchComics(searchTerm);

    setSearch(result);
    navigate("/search");
  };

  return (
    <div id="searchbox">
      <input
        type="text"
        placeholder="Search By Series Or Title. (Ex: Batman)"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
