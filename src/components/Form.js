import React, {useRef} from 'react';
import Select from 'react-select';

function Form({ income, setIncome }) {

  const desc = useRef(null);
  const price = useRef(null);
  const position = useRef(null);

  const options = [
    { value: 'podzespoly-komputera', label:'Podzespoły komputera'},
    { value: 'urzadzenia-peryferyjne', label:'Urządzenia peryferyjne'},
    { value: 'oprogramowanie', label:'Oprogramowanie'},
    { value: 'inne', label:'Inne'}
  ];

  
  const AddIncome = e => {
    e.preventDefault();

    
    
    setIncome([...income, {
      "desc": desc.current.value,
      "price": price.current.value,
      "position": position.current.value
    }]);

    desc.current.value = "";
    price.current.value = null;
    position.current.value = "";
  }

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner">
        <input type="text" name="position" id="position" placeholder="Nazwa pozycji.." ref={position} />
        <input type="text" name="desc" id="desc" placeholder="Opis.." ref={desc} /> 
        <input type="number" name="price" id="price" placeholder="Cena.." ref={price}/>
        <input type="submit" value="+"  />
      </div>
    </form>
  )
}

export default Form;