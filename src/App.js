import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import Business from './Pages/Bussines';
import Discover from './Pages/Discover';
import Industrie from './Pages/Industrie';
import Domestic from './Pages/Domestic';
import Automatism from './Pages/Automatism';
import Blog from './Pages/Blog';





function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} exact/>
          <Route path="/about" element={<Business/>} exact/>
          <Route path="/discover" element={<Discover/>} exact/>
          <Route path="/industrie" element={<Industrie/>} exact/>
          <Route path="/domestic" element={<Domestic/>} exact/>
          <Route path="/automatism" element={<Automatism/>} exact/>
          <Route path="/blog" element={<Blog/>} exact/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
  );
}

export default App;
