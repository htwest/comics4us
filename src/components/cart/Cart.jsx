import CartItem from "./CartItem";
import "../../css/Cart.css";

const Cart = ({ cart }) => {
  let total = 0;

  return (
    <div id="cart-page">
      <div className="cart-container">
        {cart.map((comic) => {
          total += comic.price;
          return <CartItem comic={comic} />;
        })}
        <div className="buy-container">
          <button>Checkout</button>
          <span>Total: ${total}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
