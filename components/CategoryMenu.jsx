import ItemCard from './ItemCard';

const CategoryMenu = ({ categoryName, categoryList, spicy }) => (
  <div className="text-center mb-4">
    <div className="flex items-center mb-2">
      <div className="mr-4 w-full h-3 bg-red-400 rounded-full "></div>
      <h1 className="font-bold text-xl text-gray-800 uppercase">
        {categoryName}
      </h1>
      <div className="ml-4 w-full h-3 bg-red-400 rounded-full"></div>
    </div>
    {spicy === true
      ? categoryList.map((item) => <ItemCard item={item} key={item.name} />)
      : categoryList
          .filter((item) => item.spicy !== true)
          .map((item) => <ItemCard item={item} key={item.name} />)}
  </div>
);

export default CategoryMenu;
