import React, {useState} from 'react';
import ContactComponent from '../components/ContactPage';
import ScrollToTop from '../components/ContactPage/ScrollToTop';
import { contactData } from '../components/InfoSection/Data';
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';



function ContactPage() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <>
    <NavbarPage toggle={toggle}/>
    <ScrollToTop/>
    <ContactComponent {...contactData}/> 
    <FooterPage/>
    </>
  )
}

export default ContactPage;
