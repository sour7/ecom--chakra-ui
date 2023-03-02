import React, { useEffect, useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import Product from "./Product";
import axios from 'axios';
import Pagination from "./Pagination";

const Products = () => {
  
  const [list, setList]= useState([])
  const [limit, setLimit]= useState("3")

  useEffect(()=>{
  const getProduct=async()=>{
    const products= await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=1&limit=${limit}`)
    setList(products.data.data)
    
  }
  getProduct()
  },[limit])
  console.log("first", limit)
  return (
    <Flex display={"flex"} flexDirection={"column"}>
      <Grid  templateColumns={'repeat(3, 1fr)'} gap={70} margin={"auto"} padding={"50"} >{
        list.map((item)=><Product item={item}/>)
}</Grid>
    
     <Pagination limit={limit} setLimit={setLimit}/>
    </Flex>
    
  );
};

export default Products;
