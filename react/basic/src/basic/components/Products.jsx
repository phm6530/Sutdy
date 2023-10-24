import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked , setchecked] = useState(false);
  const handleChange = () => {setchecked((check) => !check)};
  useEffect(()=>{
    fetch(`data/${checked ===true ? 'sale_' : ''}products.json`)
    .then(response => response.json())
    .then(data => {
      console.log('호출 성공');
      setProducts(data);
    });
    return () => { console.log('😎 청소함');}
  },[checked])

  return (
    <>
    <input id="checkbox" type="checkbox" value={checked} onChange={handleChange}/>
    <label htmlFor="checkbox">Show only Hot Sale 😉</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>/ */}
    </>
  );
}
