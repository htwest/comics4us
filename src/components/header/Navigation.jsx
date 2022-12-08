import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <p>Profile</p>
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li>
          <p>Cart</p>
          <FontAwesomeIcon icon={faCartShopping} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
