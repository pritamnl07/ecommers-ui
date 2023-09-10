import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useState,useEffect } from "react"
import axios from "axios";


const Countainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() =>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat 
          ? `http://localhost:5000/api/product/find?category=${cat}` 
          : "http://localhost:5000/api/product");
        setProducts(res.data)
        //console.log(res);
      }catch(err){

      }
    }
    getProducts()
  },[cat])
  //console.log(cat);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    }else if(sort === "asc"){
      setFilteredProducts((prev) =>
      [...prev].sort((a,b) => a.price - b.price)
      );
    }else{
      setFilteredProducts((prev) =>
      [...prev].sort((a,b) => b.price - a.price)
      );
    }
  },[sort])

  return (
    // <Countainer>
    //     {filteredProducts.map( (item) => <Product item= {item} key={item._id}/> )};
    // </Countainer>

    <Countainer>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Countainer>
  )
}

export default Products