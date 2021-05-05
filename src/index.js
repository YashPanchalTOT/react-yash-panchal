import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
    
    // Day - 1 
// impoart App from './App';
    
    // Day - 2
// import App from './Day 2/App'
    
    // Day - 3
// import App from './Day 3/App'
// import ErrorBoundary from './Day 3/ErrorBoundary';
    
    // Day - 4
import App from './Day 4/App'
import ErrorBoundary from './Day 4/ErrorBoundary';

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
    {/* <ErrorBoundary>
      <App/>
    </ErrorBoundary> */}

  {/* Day - 4 */}
    <ErrorBoundary>
      <App name="Yash"/>
    </ErrorBoundary>
  </React.StrictMode>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
