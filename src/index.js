import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// impoart App from './App';
// import App from './Day 2/App'
import App from './Day 3/App'
import ErrorBoundary from './Day 3/ErrorBoundary';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
   {/* Day - 1 */}
  {/*  <App></App> */}
   
  {/*   Day - 2 */}
  {/*    <App  
         firstName="Yash"
         lastName="Panchal"
         city="Ahmedabad"
         state="Gujarat"
         country="India" 
       /> */}
       
  {/* Day - 3 */}
    <ErrorBoundary>
      <App/>
    </ErrorBoundary>
  </React.StrictMode>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
