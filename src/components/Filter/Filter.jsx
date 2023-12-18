import { useState } from 'react';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import './filter.css'; 
import StarRateIcon from '@mui/icons-material/StarRate';


const Filter = ({ onFilterChange }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"];
  const ratings = [1, 2, 3, 4];

  const handelChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedItem([...selectedItem, value]);
    } else {
      const newArray = selectedItem.filter((item) => item !== value);
      setSelectedItem(newArray);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange(selectedItem);
  };

  const toggleDropdown = () => {
    const isMoblieSccreen = window.matchMedia('(max-width: 1145px)').matches;  //check screen-width 1145px; 
    if(isMoblieSccreen)  setIsOpen(!isOpen);
    else setIsOpen(true)
  };

  return (
    <div className="filter__section">
      <div className="filter" >
      <FilterAltOutlinedIcon  onClick={toggleDropdown}style={{fontSize:"20px", }}/>
        <h4 onClick={toggleDropdown}>Filters</h4>
       
      </div>

      {isOpen && (
        <>
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
                      />
                      &nbsp;&nbsp;
                      <label htmlFor="">{val}</label>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </section>

          <section className="apply-filters">
           <button onClick={handleApplyFilters} className='filter__btn'> Apply Filters</button>
          </section>

          <section className="filter-price">
            <span className="categories__span">Price Range</span>
            <input type="range" min="0" max="100" />
          </section>

          <section className="customer__form">
            <span className="categories__span">CUSTOMER RATINGS</span>
            {ratings.map((rating, index) => (
              <div key={index} className="input_div">
                <input
                  type="checkbox"
                  name=""
                  value={rating}
                  onChange={handelChange}
                />
                &nbsp;&nbsp;
                <label htmlFor="">
                  {rating} <StarRateIcon fontSize="16px" />{' '}
                  <span style={{ textTransform: 'none' }}>& Above</span>
                </label>
              </div>
            ))}

            <section className="apply-filters">
            <button onClick={handleApplyFilters} className='filter__btn'> Apply Filters</button>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default Filter;
