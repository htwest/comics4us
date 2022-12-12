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
      {comics.map((comic, index) => (
        <ListItem comic={comic} key={index} handleSelect={handleSelect} />
      ))}
    </div>
  );
};

export default List;
