import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
      <h1>Koszt stanowiska komputerowego</h1>
      <div className="total-income">{totalIncome} PLN</div>
    </header>
  );
}

export default Header;