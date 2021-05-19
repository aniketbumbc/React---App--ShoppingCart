import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

// initial State

const initialState = {
  products: [
    {
      id: 1,
      productName: 'Laptop',
      companyName: 'Dell',
      Qunity: 23,
      Address: 'MD',
    },
    {
      id: 2,
      productName: 'Headphone',
      companyName: 'Apple',
      Qunity: 30,
      Address: 'NYK',
    },
    {
      id: 3,
      productName: 'Mouse',
      companyName: 'HP',
      Qunity: 100,
      Address: 'CL',
    },
  ],
};

//create Contex

export const GlobalContext = createContext(initialState);

//
