import './App.css'
import Body from './Components/Body'
import Head from './Components/Head'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Maincontainer from './Components/Maincontainer'
import Watchpage from './Components/Watchpage'

function App() {
  const appRouter = createBrowserRouter([
    {
     path: '/',
     element: <Body />,
     children: [
      {
        path: '/',
        element: <Maincontainer />
      },
      {
        path: '/watch',
        element: <Watchpage />
      }
     ]
    }
  ])
  return (
    <>
      <Head />
      <RouterProvider router={appRouter} />
      
    </>
  )
}

export default App
