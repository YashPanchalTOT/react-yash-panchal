import './App.css';
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import LaptopIcon from '@material-ui/icons/Laptop';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


const App = () => {
  const [ Count, setCount] = useState(window.innerWidth)
  useEffect(() => {
    console.log("Mounted")
    
    function windowSizeInfo() {
      const currentWidth = window.innerWidth
      setCount(currentWidth);
    }
    
    window.addEventListener("resize", windowSizeInfo)

    return () => {
      console.log("Unmounted")
      window.removeEventListener("resize", windowSizeInfo)
    }  

  }, []);
  
  return (
    <div>
      <Container mx="auto">
        <h2 component="span"color="text.primary">Current Window Width: {Count}</h2>
        {
          window.innerWidth >= 1200 &&
          <h2>Current Device:&nbsp;&nbsp;
            <span style={{verticalAlign: "middle"}}>
              <LaptopIcon fontSize="large"/>
            </span> &nbsp; (Laptop)
          </h2>
        }
        {
          window.innerWidth >= 768 && window.innerWidth < 1200 &&
          <h2>Current Device:&nbsp;&nbsp; 
            <span style={{verticalAlign: "middle"}}>
              <TabletAndroidIcon fontSize="large"/>
            </span> &nbsp; (Tablet)
          </h2>
        }
        {
          window.innerWidth < 768 &&
          <h2>Current Device:&nbsp;&nbsp; 
            <span style={{verticalAlign: "middle"}}>
              <PhoneAndroidIcon fontSize="large"/>
            </span> &nbsp;(Smart Phone)
          </h2>
        }
      </Container>
    </div>
  );
};

export default App;