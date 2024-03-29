import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AddItemPage from './pages/AddItems';

function App() {
  const userRole = localStorage.getItem('role');

  return (
    <Routes>
      {userRole === 'admin' && <Route path='/' element={<Admin />} />}
      {userRole === 'user' && <Route path='/' element={<Dashboard />} />}

      {/* For both admin and user should see this */}
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      {/* For admin */}
      <Route path='/additem' element={<AddItemPage />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
      {/* <Route path='/about' element={<Admin />} /> */}
      <Route path='/' element={<Navigate replace to='/login' />} />
    </Routes>
  );
}

export default App;
