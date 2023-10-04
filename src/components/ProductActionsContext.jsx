import React, { createContext, useContext } from 'react';

export const ProductActionsContext = createContext();

export const useProductActions = () => {
    return useContext(ProductActionsContext);
};
