import FeedCategories from "../utils/FeedCategories";

const Categories = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {FeedCategories.map((element) => {
          return (
            <div key={element.id}>
              <img src={element.image} className="h-20 w-20" />
              <div className="text-ellipsis overflow-hidden ... whitespace-nowrap">
                {element.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
