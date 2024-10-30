/* eslint-disable react/prop-types */
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IndividualFilterElements = ({ label, filterElements }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex justify-between w-72 h-12 items-center cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p className="flex items-center text-lg font-bold">{label}</p>
        {
          <FontAwesomeIcon
            className="cursor-pointer flex justify-center items-center"
            icon={isOpen ? faChevronUp : faChevronDown}
          />
        }
      </div>
      {filterElements.map((element, index) => {
        return (
          <>
            {isOpen && (
              <div
                key={index}
                className="flex justify-between text-slate-600 hover:bg-slate-100 rounded-lg p-2 h-auto cursor-pointer"
              >
                <div>{element}</div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default IndividualFilterElements;
