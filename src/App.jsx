import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Profile from './components/Profile';
import { AuthProvider } from './auth/AuthContext';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
