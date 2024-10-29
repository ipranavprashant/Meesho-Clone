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
    "New Arrivals": [],
    "Price (High to Low)": [],
    "Price (Low to High)": [],
    Ratings: [],
    Discount: [],
  };

  return (
    <div className="bg-gray-100 h-auto w-full flex flex-col p-4 items-center">
      <p>Jeans Men</p>
      <p>Showing 1-20 out of 8802 products</p>
      <div className="flex flex-col">
        <label htmlFor="sortBy">Sort by : Relevance</label>
        <select id="sortBy">
          {sortBy.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        {label.map((item, index) => (
          <div key={index} className="flex flex-col">
            <label htmlFor={item}>{item}</label>
            <select id={item}>
              {itemsSpecificToLabel[item].map((element, idx) => (
                <option key={idx}>{element}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
