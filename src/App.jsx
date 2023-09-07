import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Themes from './components/Themes'
/* import { ToastContainer } from 'react-toastify' */

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Themes></Themes>
      <Routes>
        <Route index exact path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        {/* create error page and - <Route path='*' element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

/* react router dom -> npm i react-router-dom & i html-react-parser */
