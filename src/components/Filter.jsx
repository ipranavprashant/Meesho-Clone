import IndividualFilterElements from "./IndividualFilterElements";

const Filter = () => {
  const sortBy = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High), Ratings, Discount",
  ];

  const label = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High)",
    "Ratings",
    "Discount",
  ];

  const itemsSpecificToLabel = {
    Relevance: [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
    "New Arrivals": [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
    "Price (High to Low)": [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
    "Price (Low to High)": [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
    Ratings: [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
    Discount: [
      "New Arrivals",
      "Price (High to Low)",
      "Price (Low to High), Ratings, Discount",
    ],
  };

  return (
    <>
      <p className="font-bold text-2xl p-4">Jeans Men</p>
      <b className="p-4">Showing 1-20 out of 8802 products</b>
      <div className="flex flex-col p-4 border h-14 mt-8 mb-8 justify-center items-center">
        <IndividualFilterElements
          label="Sort by: Relevance"
          filterElements={sortBy}
        />
      </div>
      <div className="bg-white h-auto lg:w-80 flex flex-col p-4 border-2 items-center">
        <b>FILTERS </b>
        <p className="text-slate-500">1000+ Products</p>
        <div className="w-72 ml-auto mr-auto mt-3 h-0.25 bg-slate-300"></div>
        <div className="flex flex-col">
          {label.map((item, index) => (
            <>
              <IndividualFilterElements
                key={index}
                label={item}
                filterElements={itemsSpecificToLabel[item]}
              />
              {index !== label.length - 1 && (
                <div className="w-72 ml-auto mr-auto h-0.25 bg-slate-300"></div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
