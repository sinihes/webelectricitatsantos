import React, {useState} from 'react';
import BusinessPage from '../components/BusinessPage';
import { bussinesData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';


const Business = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <>
      <NavbarPage toggle={toggle}/>
      <ScrollToTop/>
      <BusinessPage {...bussinesData} />
      <FooterPage/>
    </>
  );
};

export default Business;
