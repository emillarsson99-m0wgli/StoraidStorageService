import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './Pages/HomePage'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import AboutUsPage from "./Pages/AboutUsPage"
import ServicePage from "./Pages/ServicePage"
import ContactPage from "./Pages/ContactPage"
import NotFoundPage from "./Pages/NotFoundPage"
import BookingPage from "./Pages/BookingPage"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
          <Route path="/BookingPage" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
