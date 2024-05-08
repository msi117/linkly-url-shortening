import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import Dashboard from './pages/Dashboard'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App