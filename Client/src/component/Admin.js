import React, { useState } from "react";
import AddItem from "./AddItem";

const Admin = () => {
  const [items, setItems] = useState([]);

  const onAddingItemHandler = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <AddItem onAddingItem={onAddingItemHandler} />
    </div>
  );
};

export default Admin;
