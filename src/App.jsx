import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'

/* createBrowserRouter, RouterProvider */

/* error */
import { Link, useRouteError } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Themes from './components/Themes'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
import Error from './pages/error/Error'
import HomeLayout from './pages/HomeLayout'
/* import { ToastContainer } from 'react-toastify' */

////// QUERY
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
])

/* RENDER in app */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

///// APP BrowserRouter

/* function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Themes></Themes>
      <Routes>
        <Route
          index
          exact
          path='/'
          element={<Home />}
          errorElement={<Error />}
        ></Route>
        <Route
          path='about'
          element={<About />}
          errorElement={<Error />}
        ></Route>
        <Route
          path='portfolio'
          element={<Portfolio />}
          errorElement={<Error />}
        ></Route>
        <Route
          path='contact'
          element={<Contact />}
          errorElement={<Error />}
        ></Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
} */

/* function ErrorBoundary() {
  let error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <div>
        <h3>Ohh! </h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    )
  }
  return (
    <div>
      <h3>something went wrong</h3>
    </div>
  )
}
 */
export default App

/* react router dom -> npm i react-router-dom & i html-react-parser */
/* npm i react-query */
/* npm install styled-components */
