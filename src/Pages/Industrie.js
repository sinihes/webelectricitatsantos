import React, {useState} from 'react';
import IndustriePage from '../components/IndustriePage';
import { industrieData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';



const Industrie = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
      <NavbarPage toggle={toggle}/>
      <ScrollToTop/>
      <IndustriePage {...industrieData} />
      <FooterPage/>
    </>
  );
};

export default Industrie;