import React, {useState} from 'react';
import AutomatismPage from '../components/AutomatismPage';
import { automatismData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';


const Atomatism = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <>
      <NavbarPage toggle={toggle}/>
      <ScrollToTop/>
      <AutomatismPage {...automatismData} />
      <FooterPage/>
    </>
  );
};

export default Atomatism;