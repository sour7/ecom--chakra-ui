import React from "react";
import { Button, ButtonGroup, Select , Text} from '@chakra-ui/react'
const Pagination = ({limit, setLimit}) => {
 console.log(limit)

  return (
    <ButtonGroup marginBottom={100}>
      <Button data-cy="pagination-first-button"></Button>
      <Button data-cy="pagination-previous-button"></Button>
      <Text>Product per page</Text>
      <Select data-cy="pagination-limit-select" onChange={(e)=>setLimit(e.target.value)}>
        <option data-cy="pagination-limit-3" value={3} >3</option>
        <option data-cy="pagination-limit-6" value={6} >6</option>
        <option data-cy="pagination-limit-9" value={9} >9</option>
      </Select>
      <Button data-cy="pagination-next-button"></Button>
      <Button data-cy="pagination-last-button"></Button>
    </ButtonGroup>
  );
};

export default Pagination;
