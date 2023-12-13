import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import getProductData from "../../util/getProductData";
const ProductContextProvider = ({ children }) => {
  //All the state and data will be shared among components
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const result = await getProductData();
    setProductData(result);
  };

  useEffect(() => {
    setIsLoading(true)
    fetchData();
    setIsLoading(false)
  }, []);


  return (
    <>
      <ProductContext.Provider value={{productData, isLoading}}>
      {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductContextProvider;
