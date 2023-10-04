import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useProductActions } from './ProductActionsContext';

const Cart = () => {
    const { productActions } = useProductActions();
    const [productsInCart, setProductsInCart] = useState([]);
    const [globalCount, setGlobalCount] = useState(0);
    
    const divStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
    };

    const handleProductAction = (productId, actionType) => {
        setProductActions(prevActions => {
            let count = prevActions[productId] || 0;
            
            if (actionType === 'increase') {
                count += 1;
            } else if (actionType === 'decrease' && count > 0) {
                count -= 1;
            }
    
            const updatedActions = { ...prevActions, [productId]: count };
            
            // Derive the global count from updated product actions
            const updatedGlobalCount = Object.values(updatedActions).reduce((acc, curr) => acc + curr, 0);
            setGlobalCount(updatedGlobalCount);
            
            return updatedActions;
        });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            // Filter product IDs to only include those with counts greater than 0
            const productIds = Object.keys(productActions).filter(id => productActions[id] > 0);
            const fetchedProducts = [];
    
            for (let id of productIds) {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const productData = await response.json();
                fetchedProducts.push(productData);
            }
    
            setProductsInCart(fetchedProducts);
        };
    
        fetchProducts();
    }, [productActions]);
    

    return (
        <div style={divStyle}>
            {productsInCart.length === 0 ? (
                <p>Empty</p>
            ) : (
                productsInCart.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={{ id: product.id, name: product.title, imageURL: product.image }}
                        onProductAction={handleProductAction} 
                    />
                ))
            )}
        </div>
    );    
};

export default Cart;
