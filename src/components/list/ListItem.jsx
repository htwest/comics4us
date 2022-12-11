const ListItem = ({ comic, handleSelect }) => {
  return (
    <div className="list-item" onClick={() => handleSelect(comic)}>
      <img src={comic.cover} alt={comic.title} />
      <h4>{comic.title}</h4>
    </div>
  );
};

export default ListItem;
