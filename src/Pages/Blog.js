import React, {useState} from 'react';
import BlogPage from '../components/BlogPage';
import { blogData } from '../components/InfoSection/Data';
import ScrollToTop from '../components/ContactPage/ScrollToTop'; 
import NavbarPage from '../components/NavbarPage';
import FooterPage from '../components/FooterPage';


const Blog = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <>
      <NavbarPage toggle={toggle}/>
      <ScrollToTop/>
      <BlogPage {...blogData} />
      <FooterPage/>
    </>
  );
};

export default Blog;