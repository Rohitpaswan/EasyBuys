import { useContext,  useState } from "react";
import Filter from "../../components/Filter/Filter";
import "./productListingPage.css";
import { ProductContext } from "../../context/productContext/ProductContext";
import ProductCard from "../../components/card/ProductCard";

const ProductListingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedRating, setSelectedRating] = useState([]);  
  const { productData } = useContext(ProductContext);

  // Category input filter
  const handelChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) setSelectedCategory([...selectedCategory, value]);
    else {
      const remainSelected = selectedCategory.filter((item) => item != value);
      setSelectedCategory(remainSelected);
    }
  };

 // Rating input filter
  const handelRating = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) setSelectedRating([...selectedRating, value]);
    else {
      const remainSelected = selectedRating.filter((item) => item != value);
      setSelectedRating(remainSelected);
    }
  };

  // Select product based on filter
  const filteredProducts = productData.filter((product) => {
    const categoryLen = selectedCategory.length;
    const ratingLen = selectedRating.length;

    if (categoryLen === 0 && ratingLen === 0) return true;

    else if (categoryLen === 0 && ratingLen != 0) {
      for (const rate of selectedRating) {
        const productRate = product.rating;
        if (rate <= productRate.rate) return true;
      }
      return false;
    } 
    
    else if (categoryLen != 0 && ratingLen == 0) {
      if (selectedCategory.includes(product.category)) return true;
      else return false;
    }
    
    else if (categoryLen != 0 && ratingLen != 0) {
      const categoryCritiriya = selectedCategory.includes(product.category);
      let ratingCriteriya = false;
      for (const rate of selectedRating) {
        const productRate = product.rating;
        if (rate <= productRate.rate) {
          ratingCriteriya = true;
          break;
        }
      }
      return categoryCritiriya && ratingCriteriya;
    }
  });





  return (
    <div className="product__wrapper">
      <div className="left__side-filter">
        <Filter
          handelChange={handelChange}
          handelRating={handelRating}
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
        />
      </div>

      {/*.................. Right-side ProductListing ......................*/}
      <div className="productlist">
        <div className="container">
          <div className="sorting__div">
            <span className="sort-span"></span>
          </div>
          {/* ......................... */}

          <div className="product__box">
            {filteredProducts.map((item, index) => {
              const rating = item.rating;
              return (
                <div className="row" key={index}>
                  <ProductCard
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={rating.rate}
                    description={""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
