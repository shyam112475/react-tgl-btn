import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Ghar';
import Dashboard from './components/Deshboard';
import './App.css'
import Form from './components/Form';
import Footer from './components/Footer'
import Todo from './components/Todo';
import Toggle from './components/Togglebtn';
import User from './components/User';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Form/>}/>
        <Route path='/todo' element={<Todo/>}/>
         <Route path='/toggle' element={<Toggle/>}/>
         <Route path='/user' element={<User/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
