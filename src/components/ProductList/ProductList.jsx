import { useContext } from "react";
import { ProductContext } from "../../context/productContext/ProductContext";
import ProductCard from "../card/ProductCard";
import "./productlist.css";

const ProductList = ({ filters }) => {
  const arrayFilter = filters;
  const {productData, isLoading} = useContext(ProductContext);
 
  const filteredProducts = productData.filter((item) => {
   
    if (arrayFilter.length === 0) {
      return true; // If no filters are selected, show all products
    } else {
      // Check if item category is included in the selected filters
      return arrayFilter.includes(item.category);
    }
  });

  return (
    <div className="container">
      <div className="sorting__div">
        <span className="sort-span">Sort By</span>
        <span className="sort-span2">Price-Low to High</span>
        <span className="sort-span2">Price-High to Low</span>
      </div>
     {
      isLoading?( <div>Loading.........</div>): <div className="product__box">
        
      { filteredProducts.map((item, index) => {
         return (
           <div className="row" key={index}>
             <ProductCard
               title={item.title}
               price={item.price}
               image={item.image}
               rating={0}
               description={""}
             />
           </div>
         );
       })}
     </div>
     }
      
    </div>
  );
};

export default ProductList;
