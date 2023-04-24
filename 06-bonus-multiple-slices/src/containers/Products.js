import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';

const Products = (props) => {
  const state = useStore()[0];
  const content = [];
  for (const prod in state) {
    content.push(
      <ProductItem
        key={state[prod].id}
        id={state[prod].id}
        title={state[prod].title}
        description={state[prod].description}
        isFav={state[prod].isFavorite}
      />
    );
  }
  return <ul className='products-list'>{content}</ul>;
};

export default Products;
