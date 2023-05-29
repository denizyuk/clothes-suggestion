import React from 'react';
import PropTypes from 'prop-types';

const ClothingItem = ({ item }) => {
  return (
    <div className="clothing-item">
      <img src={item.imageUrl} alt={item.name} className="clothing-item__image" />
      <div className="clothing-item__details">
        <h3 className="clothing-item__name">{item.name}</h3>
        <p className="clothing-item__description">{item.description}</p>
      </div>
    </div>
  );
};

ClothingItem.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClothingItem;
