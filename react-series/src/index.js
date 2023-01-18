import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const name="Garv Garg";

const date=new Date();
let day=date.getDate();
let month=date.getMonth()+1;
let year=date.getYear();
const todayDate=`${day}/${month}/${year}`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>

     <h1>My name is {name}</h1>
     <p>Today's Date is{todayDate}</p>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
