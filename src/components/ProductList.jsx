import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const divStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between', // This ensures even spacing between the product cards
        width: '70vw',
        maxWidth: '100%',
        margin: '0 auto' // This centers the container
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
                <ProductCard key={product.id} product={{name: product.title, imageURL: product.image}} />
            ))}
        </div>
    );
};

export default ProductList;
