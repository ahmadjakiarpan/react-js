import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import Login from './pages/Login/Login'
import Detail from './pages/Detail'
import ProtectedRoutes from './hooks/ProtectedRoute'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Profile from './pages/Profile/Profile'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<App/>}/>
       <Route path='/login' element={<Login/>} />
       <Route path='/detail' element={
        <ProtectedRoutes>
          <Detail/>
        </ProtectedRoutes>
       } />
       <Route path='/profile' element={<Profile />} />
       <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
)
