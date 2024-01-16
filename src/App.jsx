import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"


import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="Gallery" element={<Gallery /> } />
      <Route path="AboutUs" element={<AboutUs /> } />
      <Route path="ContactUs" element={<ContactUs /> } />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
