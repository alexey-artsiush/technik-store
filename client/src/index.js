import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';
import BasketStore from './store/BasketSore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore() ,
    device: new DeviceStore(), 
    basket: new BasketStore()
  }}>
      <App />
  </Context.Provider>
);
