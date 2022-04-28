const ItemCard = ({ item }) => (
  <div className="mb-3">
    <div>
      <div className="flex items-center align-center justify-center">
        <h2 className="font-bold uppercase">
          {item.name} <span className="font-semibold">${item.price}</span>
        </h2>
        {item.spicy === true ? (
          <img
            src={`./spicy.svg`}
            alt={`spicy logo`}
            title={'spicy'}
            className="h-8 w-8"
          />
        ) : null}
      </div>
      <p className="w-3/4 mx-auto">{item.description}</p>
    </div>
  </div>
);

export default ItemCard;
