import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './pages/home/App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './pages/MainLayout.tsx';
import ArrayMapping from './components/ArrayMapping.tsx';
import SignInSignUp from './pages/SignInSignUp.tsx';
import SignUp from './pages/SignUp.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} >
      <Route path="/" element={<App />} />
      <Route path='/mapping' element={<ArrayMapping/>}/>
      <Route path='sign-up' element={<SignUp/>}/>
      {/* <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
