import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './views/Home';
import Profile from './Pages/Profile';
import { AuthProvider } from './auth/AuthContext';
import DashboardLayout from './layout/dashboard-layout';
import Dashboard from './Pages/dashboard';
import Tickets from './Pages/tickets';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}


          <Route path='/' element={<DashboardLayout />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
