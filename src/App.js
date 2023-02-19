import './App.css';
import Narbar from './Components/Narbar/Narbar';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from './Components/Products/Products';
function App(props) {
  let {valuInput}= props;
  const [dataProduct, setDataProduct] = useState([])
    // const [valuInput, setValuInput] = useState();
    const [contenCart, setContenCart] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/listproduct")
            .then((dataListProduct) => setDataProduct(dataListProduct.data))
            .catch((err) => console.log(err));
    },[])
   const handleSumbit = (e, $id) =>{
    e.preventDefault();

    console.log(e.target.name.value);
    const valuInput=e.target.name.value

    const list_id = e.target.id;
    const checker = contenCart.filter((item) => item.id == list_id);
    if(checker.length !==0){
      const list_quantity = checker[0].quantity + Number(valuInput)
      const list_price = checker[0].price;
      const list_subtotal = list_quantity * list_price;
      const list_cart_update = {
        ...checker[0],
        quantity: list_quantity,
        list_subtotal,
    };
     axios.patch(`http://localhost:3000/yourcart/${list_id}`, list_cart_update)
   }else {
    const list_quantity = Number(valuInput);
    const list_price = 12;
    const list_subtotal = list_quantity * list_price;
    console.log(list_subtotal);
    const list_cart = {
      ...dataProduct[list_id - 1],
      quantity: list_quantity,
      list_subtotal,
    };
    axios.post(`http://localhost:3000/yourcart`, list_cart);
  };
   }
  const handleClickDelete = (e, i) =>{
    let id = e.target.id;
    console.log(id);
    axios
      .delete(`http://localhost:3000/yourcart/${id}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/yourcart")
      .then((axiosDataCart) => setContenCart(axiosDataCart.data))
      .catch((err) => console.log(err));
  }, []);
  return ( 
    <>
    <Narbar/>
    <Products
    dataProduct={dataProduct}
    handleSumbit={handleSumbit}
    handleClickDelete={handleClickDelete}
    contenCart={contenCart}
    />
    </>
   );
}

export default App;
