import React, { useContext, useEffect, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    if (cartItems[id]) {
      setItemCount(cartItems[id]);
    } else {
      setItemCount(0);
    }
  }, [cartItems, id]);

  const handleAddItem = () => {
    setItemCount(prev => prev + 1);
    addToCart(id);
  };

  const handleRemoveItem = () => {
    if (itemCount > 0) {
      setItemCount(prev => prev - 1);
      removeFromCart(id);
    }
  };

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={`${url}/images/${image}`} alt='' />
        {itemCount === 0 ? (
          <img
            className='add'
            onClick={handleAddItem}
            src={assets.add_icon_white}
            alt='Add'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={handleRemoveItem}
              src={assets.remove_icon_red}
              alt='Remove'
            />
            <p>{itemCount}</p>
            <img
              onClick={handleAddItem}
              src={assets.add_icon_green}
              alt='Add'
            />
          </div>
        )}
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='Rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
