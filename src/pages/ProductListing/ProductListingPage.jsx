import { useState, useContext } from "react";
import Filter from "../../components/Filter/Filter";
import ProductList from "../../components/ProductList/ProductList";
import "./productListingPage.css";
import { ProductContext } from "../../context/productContext/ProductContext";
const ProductListingPage = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { isLoading } = useContext(ProductContext);
  const handleFilterChange = (selected) => {
    setSelectedFilters(selected);
  };
  //console.log("page", selectedFilters);
  return (
    <div className="product__wrapper">
      <div className="left__side-filter">
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div className="productlist">
        <ProductList filters={selectedFilters} />
      </div>
    </div>
  );
};

export default ProductListingPage;
