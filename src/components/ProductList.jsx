import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useProductActions } from './ProductActionsContext';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [globalCount, setGlobalCount] = useState(0);
    const { productActions, setProductActions } = useProductActions();


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
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={divStyle}>
            {products.map(product => (
                <ProductCard 
                key={product.id} 
                product={{ id: product.id, name: product.title, imageURL: product.image }} 
                onProductAction={handleProductAction} 
                />
            ))}
        </div>
    );
};

export default ProductList;
