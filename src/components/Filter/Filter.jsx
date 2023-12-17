import { useState } from "react";
import "./filter.css";
import CustomButton from "../button/CustomButton";
import StarRateIcon from "@mui/icons-material/StarRate";

// Filter component responsible for filtering products
// Props:
// - onFilterChange: Function to handle filter changes
const Filter = ({ onFilterChange }) => {
  // State to manage selected items for filtering
  const [selectedItem, setSelectedItem] = useState([]);

  // Categories available for filtering
  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  // Ratings available for filtering
  const ratings = [1, 2, 3, 4];

  // Handler for checkbox changes
  const handelChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    // If a category is selected, add it to selectedItem
    if (checked) {
      setSelectedItem([...selectedItem, value]);
    } else {
      // If a category is deselected, remove it from selectedItem
      const newArray = [];
      for (let i = 0; i < selectedItem.length; i++) {
        if (selectedItem[i] !== value) newArray.push(selectedItem[i]);
      }
      setSelectedItem(newArray);
    }
  };

  // Handler for applying filters
  const handleApplyFilters = () => {
    onFilterChange(selectedItem);
  };
  console.log(selectedItem);

  return (
    <div className="filter__section">
      <div className="filter">
        <h4>Filters</h4>
      </div>

      {/* Categories Section */}
      <section className="categories ">
        <span className="categories__span">Categories</span>
        <div className="categories__form">
          <form action="">
            <div className="input__wrapper">
              {categories.map((val, index) => {
                return (
                  <div key={index} className="input_div">
                    <input
                      type="checkbox"
                      name=""
                      value={val}
                      onChange={handelChange}
                    />
                    &nbsp;&nbsp;
                    <label htmlFor="">{val}</label>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </section>

      {/* Apply Filters Button */}
      <section className="apply-filters">
        <CustomButton
          onClick={handleApplyFilters}
          text="Apply Filters"
          style={{
            backgroundColor: "#1663b5",
            color: "white",
            width: "40%",
            fontSize: "14px",
          }}
        />
      </section>

      {/* Price Range Section */}
      <section className="filter-price">
        <span className="categories__span">Price Range</span>
        <input type="range" min="0" max="100" />
      </section>

      {/* Customer Rating Section */}
      <section className="customer__form">
        <span className="categories__span">CUSTOMER RATINGS</span>
        {ratings.map((rating, index) => {
          return (
            <div key={index} className="input_div">
              <input
                type="checkbox"
                name=""
                value={rating}
                onChange={handelChange}
              />
              &nbsp;&nbsp;
              <label htmlFor="">
                {rating} <StarRateIcon fontSize="16px" />{" "}
                <span style={{ textTransform: "none" }}>& Above</span>
              </label>
            </div>
          );
        })}

        {/* Apply Filters Button for Ratings */}
        <section className="apply-filters">
          <CustomButton
            onClick={handleApplyFilters}
            text="Apply Filters"
            style={{
              backgroundColor: "#1663b5",
              color: "white",
              width: "40%",
              fontSize: "14px",
            }}
          />
        </section>
      </section>
    </div>
  );
};

export default Filter;
