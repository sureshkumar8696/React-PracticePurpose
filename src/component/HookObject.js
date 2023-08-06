import React, { useState } from "react";

const HookObject = () => {
  //     const [name,setName] = useState({firstName:'',lastName:''});
  //   return (
  //     <div>
  //       <form>
  //         <input value={name.firstName} onChange={e=>(setName({...name,firstName:e.target.value}))}></input>
  //         <input value={name.lastName} onChange={e=>(setName({...name,lastName:e.target.value}))}></input>
  //         {name.firstName}
  //         {name.lastName}
  //       </form>
  //     </div>
  const [items, setItems] = useState([]);
  const addToItem = () => {
    setItems([...items,{
      id: items.length,
      value: Math.floor(Math.random() * 10),
    }]);
  };
  return (
    <div>
      <button onClick={addToItem}>add a random number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookObject;
