import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage.jsx';
import Register from './pages/RegisterPage.jsx';
import Home from './pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
