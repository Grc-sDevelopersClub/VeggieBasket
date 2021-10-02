import React from "react";
import styled from "styled-components";
import { Scrollbars } from 'react-custom-scrollbars';
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
  {
    id: 4,
    name: "fortnite",
    price: 51,
  },
  {
    id: 5,
    name: "fortnite",
    price: 51,
  },
  {
    id: 6,
    name: "fortnite",
    price: 51,
  },
];

const CartView = styled.section`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    text-transform: capitalize;
    color: rgba(41, 41, 41, 1);
    margin-bottom: 1rem;
  }
`;

const CartItems = styled.div`
  width: 100%;
  height: 62rem;
  background: linear-gradient(
    103.49deg,
    #ffffff -28.13%,
    rgba(242, 247, 255, 0.5) 116.84%
  );
  box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.4rem 1.2rem;
  border-radius: 2rem;
  margin: auto;
  margin: auto;
  display: grid;
  place-items: center;

  hr {
    margin: 2rem auto;
    overflow-y: scroll;
  }
`;

const CartItemsContainer = styled.div`
  width: 90%;
  height: 56rem;
  ${'' /* overflow-y: scroll; */}
  @media (max-width: 768px) {

  }
`;

const ItemInfo = styled.div`
  width: 100%;
  height: 11rem;
  /* background-color: lavender; */
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr;
  }
  .product-img img {
    width: 16rem;
    height: 11rem;
    filter: drop-shadow(0rem 0.4rem 1rem #f1f7ff);
    border-radius: 1rem;
  }
  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
      padding-left: 2rem;
    }
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 2.2rem;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: var(--main-color);
      @media (max-width: 768px) {
      justify-content: center; }
    }
    p {
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      text-align: left;
      color: var(--primary-color);
      @media (max-width: 768px) {
      justify-content: center; }
    }
  }
  .add-minus-quantity {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: 768px) {
      padding-left: 2rem;
      margin: 2rem 0 2rem 0;
      justify-content: flex-start;
      @media (max-width: 768px) {
      justify-content: center; }
    }
    button {
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }
    input {
      width: 6rem;
      height: 3rem;
      border: 0.141rem solid var(--primary-color);
      box-sizing: border-box;
      font-style: normal;
      font-weight: normal;
      font-size: 1.6rem;
      text-align: center;
      text-transform: capitalize;
      color: var(--primary-color);
      margin: 0 1rem;
      border-radius: 0.5rem;
      outline: none;
      background-color: transparent;
    }
    input:focus {
      outline: none;
    }
    .fa-trash-alt {
      color: #ed4848;
    }

    .fa-plus:hover {
      color: #42c157;
    }

    .fa-minus:hover {
      color: #ffb800;
    }

    .fa-plus,
    .fa-minus {
      color: var(--icon-color);
    }
  }
  .price {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    h3 {
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      text-transform: capitalize;
      color: var(--main-color);
    }
    @media (max-width: 768px) {
      justify-content: center;
      margin-bottom: 2rem;
      h3::before {
        content: "Price: ";
      }
    }
  }

  .remove-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5rem;
    @media (max-width: 768px) {
      justify-content: flex-end;
    }
    button {
      border: none;
      background-color: transparent;
    }
  }
  .card-total button:hover {
    background-color: #0077dc;
  }

  .card-total .clear-cart {
    margin-left: 3rem;
    background-color: rgb(209, 61, 61);
  }

  .card-total .clear-cart:hover {
    background-color: rgb(197, 5, 5);
  }
`;

const Cart = () => {
  return (
    <CartView>
      <h1>Cart</h1>
      <p>
        you have <span>0</span> items in shopping cart
      </p>
      <CartItems>
        <CartItemsContainer>
        <Scrollbars>
        {items.map(item => <div key={item.id}><ItemInfo >
            <div className="product-img">
              <img
                src="https://m.media-amazon.com/images/I/71YxgZu73mL._SL1500_.jpg"
                alt="ipad"
              />
            </div>
            <div className="title">
              <h2>Ipad Air</h2>
              <p>Space Gray</p>
            </div>
            <div className="add-minus-quantity">
              <i className="fas fa-minus minus"></i>
              <input type="text" placeholder="2" />
              <i className="fas fa-plus plus"></i>
            </div>
            <div className="price">
              <h3>45000rs</h3>
            </div>
            <div className="remove-item">
              <i className="fas fa-trash-alt remove"></i>
            </div>
          </ItemInfo><hr/></div>)}
          </Scrollbars>
        </CartItemsContainer>
      </CartItems>
    </CartView>
  );
};

export default Cart;
