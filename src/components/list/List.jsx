import { useNavigate } from "react-router-dom";

import ListItem from "./ListItem";
import "../../css/List.css";

const List = ({ comics, setSelected }) => {
  const navigate = useNavigate();

  const handleSelect = (comic) => {
    setSelected(comic);
    navigate("/issue");
  };

  return (
    <div className="list">
      {comics.map((comic) => (
        <ListItem
          comic={comic}
          key={`${comic.title}${comic.issue}`}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default List;
