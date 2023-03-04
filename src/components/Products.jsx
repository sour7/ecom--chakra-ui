import React, { useEffect, useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import Product from "./Product";
import axios from 'axios';
import Pagination from "./Pagination";

const Products = () => {
  
  const [list, setList]= useState([])
  const [limit, setLimit]= useState("3")
  const [page, setPage] = useState(1)
  let [allpage, setAllpage]= useState()

  useEffect(()=>{
  const getProduct=async()=>{
    const products= await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=${page}&limit=${limit}`)
    setList(products.data.data)
    setAllpage(products.data.totalPages)
    // console.log(products.data )
  }
  getProduct()
  },[limit, page, allpage])
  // console.log("first", allpage)
 
  return (
    <Flex display={"flex"} flexDirection={"column"}>
      <Grid  templateColumns={'repeat(3, 1fr)'} gap={10} margin={"auto"} padding={"0"} >{
        list.map((item)=><Product item={item}/>)
}</Grid>
    
     <Pagination limit={limit} setLimit={setLimit} setPage={setPage} page={page} allpage= {allpage} />
    </Flex>
    
  );
};

export default Products;
