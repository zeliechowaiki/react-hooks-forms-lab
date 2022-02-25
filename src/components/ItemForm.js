import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: '',
    category: 'Produce'
  })

  function handleItemChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    setNewItem({
      ...newItem,
      [name]: value
    });
  }

  return (
    <form className="NewItem" onSubmit={e => {
      e.preventDefault();
      onItemFormSubmit(newItem);
      setNewItem({
        id: uuid(),
        name: '',
        category: 'Produce'
      });
    }}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
