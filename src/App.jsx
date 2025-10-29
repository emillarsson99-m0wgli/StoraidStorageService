import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './Pages/HomePage'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import OurServices from "./Components/OurServices"
import AboutUsPage from "./Pages/AboutUsPage"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
