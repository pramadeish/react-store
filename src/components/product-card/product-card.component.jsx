import { useContext } from 'react';
import React from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
  AlertInner,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {addItemToCart(product);
    setIsAlertVisible(true);
        setTimeout(() => {
  setIsAlertVisible(false); }, 500);}

 

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>₹{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
      {isAlertVisible && <div className='alert-container'>
               <AlertInner>ADDED TO CART!</AlertInner>
           </div>   
        }
      
    </ProductCartContainer>
  );
};

export default ProductCard;