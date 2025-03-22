import React from 'react';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet,useLocation } from 'react-router';
import {useState,useEffect} from 'react'
import { ToastContainer } from 'react-toastify';

const Root = () => {

    let location = useLocation();
    const [isHomePage, setIsHomePage] = useState(false);
    const [isPDetailsPage, setPDetailsPage] = useState(false);
  

   

    useEffect(() => {
        
    switch(location.pathname){
      case '/home':
        document.title = 'Home | Gadget Heaven'
        break;
      case '/dashboard':
        document.title = 'Dashboard | Gadget Heaven'
        break;
      case '/stats':
        document.title = 'Statistics | Gadget Heaven'
        break;
      case '/account':
        document.title = 'Account | Gadget Heaven'
        break;
        default:
          document.title ="Gadget Heaven";
   
    }
    },[location.pathname]);



    useEffect(() => {
      if(location.pathname === '/home'){
          console.log('yes');
          setIsHomePage(true);
      } else {
          setIsHomePage(false);
      }
    }, [location]);
  
    useEffect(() => {
      if((location.pathname === '/stats') || ( location.pathname === '/dashboard')){
          
        setPDetailsPage(true);
      } else {
        setPDetailsPage(false);
      }
    }, [location]);

  
    const backgroundClass = isHomePage 
      ? "min-h-screen bg-purple-500 mx-auto mt-4 ml-10 mr-10 border-purple-500 border-5 rounded-xl max-h-[200px] "
      : " bg-purple-500 mx-auto max-h-[500px]";

    const navigationClass = isHomePage ? "max-w-6xl mx-auto relative" : " mx-auto relative justify center ";

    const PDetailsClass = isPDetailsPage ? " bg-purple-500 mx-auto max-h-[350px] " : " bg-purple-500 mx-auto max-h-[500px]";

    return (
       
        <div className={isPDetailsPage? PDetailsClass : backgroundClass}>
        {/* Container for all content including navbar */}
        <div className={navigationClass}>
            <NavBar isHomePage={isHomePage}></NavBar>
            <div className="mt-12">
                <Outlet isPDetailsPage={isPDetailsPage} className="absolute max-w-6xl"></Outlet>
                <Footer className="mt-12"></Footer>
                <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false} // Ensure consistent behavior
          draggable
          theme="dark"
        />
                
            </div>
            
        </div>
        
    </div>
       
    );
};

export default Root;