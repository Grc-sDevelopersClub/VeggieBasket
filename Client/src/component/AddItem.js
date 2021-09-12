import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddItem = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const addItemSubmitHandler = (event) => {
    event.preventDefault();
    const item = {
      name: name,
      price: price,
      quantity: quantity,
      id: Math.random(),
    };
    setQuantity("");
    setPrice("");
    setName("");
    props.onAddingItem(item);
  };

  return (
    <FormContainer>
      <div>
        <h3>Add Items</h3>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={addItemSubmitHandler}
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue=" "
              variant="outlined"
              onChange={nameChangeHandler}
            />
            <TextField
              required
              id="outlined-number"
              label="Price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={priceChangeHandler}
            />
            <TextField
              required
              id="outlined-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={quantityChangeHandler}
            />
          </div>
          <Button
              type="submit"
              variant="outlined"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              Submit
            </Button>
        </form>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.div`
padding:5% 7%;

h3{
    margin:8px;
}
form {
    display: grid;
    grid-template-column: 200px 200px;
    div {

    }
    Button {
        justify-self: start;
        align-self: center;
        margin:8px;
    }
}
`;
export default AddItem;
