import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useState, useEffect } from "react";
import "./filter.css";

const Filter = ({
  handelChange,
  handelRating,
  selectedCategory,
  selectedRating,
}) => {
  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  const ratings = ["1", "2", "3", "4"];
  const [showDiv, setShowDiv] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      if (width >= 1145) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }

    // Check on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDiv = () => {
    if (width <= 1145) {
      setShowDiv(!showDiv);
    }
  };

  return (
    <div className="filter__section">
      <div className="filter">
        <FilterAltOutlinedIcon
          style={{ fontSize: "20px" }}
          onClick={toggleDiv}
        />
        <h4 onClick={toggleDiv}>Filters</h4>
      </div>

      {showDiv && (
        <div className="categories__wrapper">
          <section className="categories">
            <span className="categories__span">Categories</span>
            <div className="categories__form">
              <form action="">
                <div className="input__wrapper">
                  {categories.map((val, index) => (
                    <div key={index} className="input_div">
                      <input
                        type="checkbox"
                        name=""
                        value={val}
                        onChange={handelChange}
                        checked={selectedCategory.includes(val)}
                      />
                      &nbsp;&nbsp;
                      <label htmlFor="">{val}</label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </section>

          {/* Rating */}
          <section className="customer__form">
            <span className="categories__span custm-span">
              CUSTOMER RATINGS
            </span>
            {ratings.map((rating, index) => (
              <div key={index} className="input_div">
                <input
                  type="checkbox"
                  name="name"
                  value={rating}
                  onChange={handelRating}
                  checked={selectedRating.includes(rating)}
                />
                &nbsp;&nbsp;
                <label>
                  {rating} <StarRateIcon fontSize="16px" />{" "}
                  <span style={{ textTransform: "none" }}>& Above</span>
                </label>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default Filter;
