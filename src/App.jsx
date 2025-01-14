import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Ghar';
import Dashboard from './components/Deshboard';
import './App.css'
import Form from './components/Form';
import Footer from './components/Footer'
import Todo from './components/Todo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Form/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
