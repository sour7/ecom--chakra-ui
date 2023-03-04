import React from "react";
import { Button, ButtonGroup, Select , Text} from '@chakra-ui/react'
const Pagination = ({page, setPage, setLimit, allpage}) => {
//  console.log(totalprod)

const handlePrev=()=>{
  if(page!=1){
setPage(page-1)
  }
}
console.log("first", page)
  return (
    <ButtonGroup marginBottom={100}>
      <button data-cy="pagination-first-button" onClick={()=>setPage(1)} disabled={page===1?true:false} >first</button>
      <button data-cy="pagination-previous-button" cursor={"pointer"} onClick={handlePrev} disabled={page===1?true:false} >prev</button>
     
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(e.target.value)}>
        <option data-cy="pagination-limit-3" value={3} >3</option>
        <option data-cy="pagination-limit-6" value={6} >6</option>
        <option data-cy="pagination-limit-9" value={9} >9</option>
      </Select>
      
      <button data-cy="pagination-next-button"onClick={()=>setPage(page+1)}disabled={page===allpage?true:false}>next</button>
      <button data-cy="pagination-last-button" onClick={()=>setPage(Math.floor(allpage))} disabled={page===allpage?true:false}>last</button>
    </ButtonGroup>
  );
};

export default Pagination;
