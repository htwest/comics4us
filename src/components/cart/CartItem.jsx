const CartItem = ({ comic }) => {
  return (
    <div className="cart-item">
      <img src={comic.cover} alt="cover" />
      <h4>{comic.title}</h4>
      <p>${comic.price}</p>
    </div>
  );
};

export default CartItem;
