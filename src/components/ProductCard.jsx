import React from 'react';

// Styling for the card
const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
    maxWidth: '200px',
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '8px',
};

const ProductCard = ({ product }) => {
    return (
        <div style={cardStyle}>
            <img src={product.imageURL} alt={product.name} style={imageStyle} />
            <div>{product.name}</div>
        </div>
    );
};

export default ProductCard;
