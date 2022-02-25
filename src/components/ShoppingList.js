import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onNewItemSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  let itemsToDisplay = items.filter((item) => {
    const searchedTruth = search.length === 0 ? true : item.name.toLowerCase().includes(search.toLowerCase());
    if (selectedCategory === "All") {
      return searchedTruth;
    }
    else {
      return ((item.category === selectedCategory) && searchedTruth);
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onNewItemSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
