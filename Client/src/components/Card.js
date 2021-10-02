import React from "react";
import styled from "styled-components";
import Cart from "../Controller/Cart";

const CardView = styled.div`
  width: min-content;
  border: 1px solid;
  border-radius: 10px;
`;

const items = [
  {
    id: 1,
    name: "overwatch",
    price: 20,
  },
  {
    id: 2,
    name: "minecraft",
    price: 32,
  },
  {
    id: 3,
    name: "fortnite",
    price: 51,
  },
];

export default function Card() {
  const addToCartHandler = (el) => {
    Cart.addToCart(el);
  };
  return items.map((item) => (
    <CardView key={item.id}>
       <h3>{item.name} : {item.price}</h3> 
      <button onClick={() => addToCartHandler(item)}>Add to cart</button>
    </CardView>
  ));
}
