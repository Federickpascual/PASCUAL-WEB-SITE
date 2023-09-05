import React from 'react';
import Product from '../product/Product';
import './Products.css';
import johnPeaky from '../../assets/john-peaky.jpg';
import artPic from '../../assets/art-pic.jpg';
import thomPic from '../../assets/thomas-pic.jpg';
import trioBlinder from '../../assets/trio-blinder.jpg';

const products = [
  {
    id: 1,
    image: thomPic,
    title: 'Thomas Shelby',
    description: 'Peaky Blinders',
    price: 15.3,
  },
  {
    id: 2,
    image: artPic,
    title: 'Arthur Shelby',
    description: 'Peaky Blinders',
    price: 15.2,
  },
  {
    id: 3,
    image: johnPeaky,
    title: 'John Shelby',
    description: 'Peaky Blinders',
    price: 14.2,
  },

  {
    id: 4,
    image: trioBlinder,
    title: 'Peaky Blinders',
    description: 'Thom, Arthur and John',
    price: 19.99,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
