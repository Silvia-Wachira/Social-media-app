import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
      } />

      <Route path="/login/" element={<div>Login</div>} />
      </Routes>
  );
}

export default App;
