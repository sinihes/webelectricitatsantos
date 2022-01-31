import React, {useState} from 'react';
import DomesticPage from '../components/DomesticPage';
import { domesticData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';


const Domestic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <>
      <NavbarPage toggle={toggle}/>
      <ScrollToTop/>
      <DomesticPage {...domesticData} />
      <FooterPage/>
    </>
  );
};

export default Domestic;