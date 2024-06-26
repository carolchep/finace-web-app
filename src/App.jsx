import './App.css'
import Blog from './pages/Blogs'
 import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />

    </Routes>
  </div>
  )
}

export default App
