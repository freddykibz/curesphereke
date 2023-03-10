/* eslint-disable-next-line @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <h2 className="text-lg">
          <Link href={`/product/${product.slug}`}>
            <h2 className="text-lg">{product.name}</h2>
          </Link>
        </h2>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type-button="true">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
