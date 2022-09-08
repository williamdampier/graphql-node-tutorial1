import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Register, Error, ProtectedRoute } from './pages';
import {
  SharedLayout,
  UserBoxes,
  Profile,
  AddBox,
  PublicBoxes,
} from './pages/Dashboard';

function App() {
  return (
    <div>
      <ToastContainer position='top-center' />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<UserBoxes />} />
            <Route path='public' element={<PublicBoxes />} />
            <Route path='addbox' element={<AddBox />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='landing' element={<Landing />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Error />} />{' '}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
