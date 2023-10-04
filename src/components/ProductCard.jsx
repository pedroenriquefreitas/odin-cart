import React from 'react';
import NumberIncreaser from './NumberIncreaser';

const ProductCard = ({ product, onProductAction }) => {
    const cardStyle = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#fff',
        textAlign: 'center',
        width: '200px',
        color: 'black',
        fontSize: '1vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const containerBaseStyle = {
        height: '150px',
        width: '150px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '20px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    };

    const nameStyle = {
        height: '60px',
        lineHeight: '30px',        // Ensure the text is vertically centered
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '180px',            // Adjust based on actual container width minus paddings
    };

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength - 3) + '...';  // subtract 3 for the '...'
    };

    // Dynamically create the container style for each product
    const containerStyle = {
        ...containerBaseStyle,
        backgroundImage: `url(${product.imageURL})`
    };

    const handleAction = (productName, actionType) => {
        console.log(`Action: ${actionType} was called on product: ${productName}`);
        onProductAction(product.id, actionType);  // Notify parent about the action and product id
    };


    return (
        <div style={cardStyle}>
            <div style={containerStyle}></div>
            <div style={nameStyle}>{truncateText(product.name, 40)}</div>
            <NumberIncreaser productName={product.name} onAction={handleAction} />
        </div>
    );
};

export default ProductCard;
