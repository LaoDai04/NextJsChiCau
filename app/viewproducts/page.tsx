'use client';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../api/products');
      const data = await response.json();
      console.log(data, "data")
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
        {products.map((product, index) => {
          return <p key={index}> {product.images[0].alt} </p>} )}
        welcome to our products
    </>
  )
}

