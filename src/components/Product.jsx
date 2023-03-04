import React, { useEffect, useState } from "react";
import { Text, Image, Box, Stack,Heading, Tag, TagLabel } from '@chakra-ui/react'
import axios from 'axios';

const Product = ({item}) => {


 
  return (

    <Stack data-cy="product" boxShadow= {"rgba(0, 0, 0, 0.1) 0px 4px 12px"} padding={10}>
     
           <Image data-cy="product-image" src={item.img} alt={item.category} maxWidth={80}/>
      <Tag display={"flex"} justifyContent={"space-between"} margin={0}>
      <Text data-cy="product-category"color={"blue"}> {item.category.toUpperCase()}</Text>
        <TagLabel data-cy= "product-brand"color={"blue"} background={"aqua"} >{item.brand.toUpperCase()}</TagLabel>
      </Tag>
      <Heading data-cy="product-details" textAlign={"center"} color={"aqua"}>{item.details}</Heading>
      <Box data-cy="product-price"  textAlign={"center"}>RS.{item.price} <span>/unit</span></Box>
       
      
     
    </Stack>
  );
};

export default Product;
