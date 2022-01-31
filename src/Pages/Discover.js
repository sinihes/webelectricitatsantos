import React, {useState} from 'react';
import DiscoverPage from '../components/DiscoverPage';
import { discoverData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';
const Discover = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  
    return (
  <>
    <NavbarPage toggle={toggle}/>
    <ScrollToTop/>
    <DiscoverPage {...discoverData}/>
    <FooterPage/>
  </>
  );
};

export default Discover;