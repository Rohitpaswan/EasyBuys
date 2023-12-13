//function for fetching data from fake store api

const getProductData = async () => {
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url);
  try {
    if (response.ok) {
      //check the response from server
      const data =await response.json();
    //  console.log(data);
      return data;
    } else console.log("No response");
  } catch (error) {
    console.log(error);
  }



};

export default  getProductData;