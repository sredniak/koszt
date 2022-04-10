import React from 'react';
import Item from './Item';

function List({ income, setIncome }) {

  const removeIncome = i => {
    let temp = income.filter((v, index) => index != i);
    setIncome(temp);
  }

  const sortByPrice = (a, b) => {
    return a.price - b.price;
  }

  return (
    <div className="income-list">
      {
        income.sort(sortByPrice).map((value, index) => (
          <Item 
            key={index} 
            income={value} 
            index={index} 
            removeIncome={removeIncome}
          />
        ))
      }
    </div>
  )
}

export default List;