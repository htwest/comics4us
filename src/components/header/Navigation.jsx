import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ cartAmount }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <p>Profile</p>
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li onClick={() => navigate("/cart")}>
          <p>Cart</p>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>{cartAmount}</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
