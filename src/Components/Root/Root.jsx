import React from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet,useLocation } from 'react-router';
import {useState,useEffect} from 'react'

const Root = () => {

    let location = useLocation();
    const [isHomePage, setIsHomePage] = useState(false);
  
    useEffect(() => {
      if(location.pathname === '/home'){
          console.log('yes');
          setIsHomePage(true);
      } else {
          setIsHomePage(false);
      }
    }, [location]);
  
    const backgroundClass = isHomePage 
      ? "min-h-screen bg-purple-500 mx-auto mt-4 ml-10 mr-10 border-purple-500 border-5 rounded-xl max-h-[800px] overflow-auto"
      : "min-h-screen max-w-6xl mx-auto mt-12";
    return (
       
        <div className={backgroundClass}>
        {/* Container for all content including navbar */}
        <div className="max-w-6xl mx-auto">
            <NavBar isHomePage={isHomePage}></NavBar>
            <div className="mt-12">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    </div>
       
    );
};

export default Root;