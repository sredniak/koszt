import React from 'react';

function Item({income, index, removeIncome}) {
  

  const removeHandle = i => {
    removeIncome(i);
  }

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>x</button>
      <div className="position"> {income.position} </div>
      <div className="desc">{income.desc}</div>
      <div className="price">{income.price} PLN</div>
    </div>
  )
}

export default Item;