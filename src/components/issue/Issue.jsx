import "../../css/Issue.css";

import IssueTable from "./IssueTable";
import profile from "../../images/profile.png";
import ad from "../../images/ad.jpeg";

const issue = ({ selected, setCart, cart }) => {
  const handleAdd = () => {
    if (cart.length < 1) {
      setCart([selected]);
    } else {
      cart.push(selected);
      setCart(cart);
    }
  };

  return (
    <div id="issue-page">
      <div className="issue-container">
        <img src={selected.cover} alt={selected.title} />
        <div className="issue-info">
          <IssueTable selected={selected} />
          <button className="cart-button" onClick={() => handleAdd()}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="vendor-container">
        <div className="seller-info">
          <h3>Seller Information</h3>
          <img src={profile} alt="profile-pic" />
          <div className="seller-container">
            <h4>SellerMan123</h4>
            <p>Rating 100%</p>
            <div className="approval-container">
              <button>Like</button>
              <button>Dislike</button>
            </div>
          </div>
        </div>
        <img src={ad} alt="ad" className="advertisment" />
      </div>
    </div>
  );
};

export default issue;
