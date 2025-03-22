import React from 'react';
const Footer = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-4xl font-bold text-center ">Gadget Heaven</h2>
            <h2 className="text-xl mt-4 text-center">Leading the way in cutting-edge technology and innovation.</h2>
            <footer className="flex flex-col justify-between text-center">
                <div className='footer sm:footer-horizontal justify-center lg:gap-68 sm:gap-36 p-10'>
                <nav>
    <h6 className="footer-title font-extrabold">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title font-extrabold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title font-extrabold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
                </div>
                <div className='mb-8'>
2025 @Copyright all Rights Reserved
</div>
  
</footer>

          
        </div>
    );
};

export default Footer;