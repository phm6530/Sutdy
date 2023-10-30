import { useState ,useEffect } from 'react';

export default function useProducts({salesOnly}){
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`data/${salesOnly  ? 'sale_' : ''}products.json`)
          .then((response) => {
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error('에러');
            }
            })
          .then((data) => {
            console.log('호출 성공');
            setProducts(data);
          })
          .catch((x) => {
            // console.log('Error: ', x.message);
            setError(true); 
          })
          .finally(() => setloading(false) );
        return () => {
          console.log('😎 청소함');
          
        };
      }, [salesOnly]);
      console.log('헬로우 ');
      return [loading,  products , error];
}