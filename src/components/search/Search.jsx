import List from "../list/List";
import "../../css/Search.css";

const Search = ({ search, setSelected }) => {
  console.log(search);
  return (
    <div id="search-page">
      <div className="search-container">
        <List comics={search} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Search;
