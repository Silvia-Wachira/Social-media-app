import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
      } />

      <Route path="/register/" element={<Registration />} />
      <Route path="/login/" element={<Login />} /> 
      
      </Routes>
  );
}

export default App;
