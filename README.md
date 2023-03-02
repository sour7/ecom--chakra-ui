# React-Ecommerce-ChakraUI

## Submission Instructions [Please note]

## Maximum Marks - 17

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ checking Basic Structure -  2 marks
 ✅ first and previous button should be disabled on page 1 - 2 marks
✅ last and next button should be disabled on last page - 2marks
✅ should be able to make a request and get the data successfully on load  - 2marks
 ✅ Should be able to do pagination and first ,previous ,next and last buttons should work - 4 marks
 ✅ page limit drop down should work and get the data as per the limit - 4 marks
```

## Installation

- you can use any node version that works for you ( 16+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- `npm install`
- `npm start`

## Problem

Create a product e commerce app using the given boilerplate.

## Understanding Component Structure

- App
  - Products
    - Product
    - Pagination

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Requirements

- API details( use `Axios`)
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`
- query params:
  - `page`: a number representing the page number(default page 1)
  - `limit`: a number representing total number of results per page(default 3 per page)
  - `data`: array of products
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products?page=1&limit=3`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 3 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

## Features to build

1. App should fetch `products` using axios as soon as Page Loads
   - Default Page Limit is `3`, can be changed from `Pagination` Component.
   - Default Page Number is `1`, changable from `Pagination` Component as per the button name.
2. App should fetch results when the limit changed from the dropdown
   and disable the pagination buttons accordingly.

### Products when limit is 3

![](https://i.imgur.com/BFZGeec.png)

### Products when limit is 6

![](https://i.imgur.com/XepQ2To.png)

### Products when limit is 9

![](https://i.imgur.com/PTyACHQ.png)

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

## Knowledge Required

1. [React](https://reactjs.org/)
   - useEffect
   - useState
2. [axios](https://axios-http.com/)
   - GET
3. [Chakra-UI](https://chakra-ui.com/)
   - Container
   - Stack
   - Button
     - ButtonGroup

**Note** - This might not be all the things, you are free to use other components.

#### Submission

**Note:- Do not use any other names for the Ids, Classes and local storage key other than those mentioned.**

####

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not submit it last minute
- try to keep one submission at a time
