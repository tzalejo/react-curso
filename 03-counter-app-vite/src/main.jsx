import React from 'react';
import ReactDOM from 'react-dom/client'; // llamada al React DOM para renderizar componentes
import { HelloWordApp } from './HelloWordApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelloWordApp /> */}
    <FirstApp title="Hola, Soy Goku!!" subTitle={123} name="Goku" />
    {/* <FirstApp /> */}
    {/* <CounterApp value={56} /> */}
  </React.StrictMode>,
);
