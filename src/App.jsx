import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './Pages/HomePage'
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import OurServices from "./Components/OurServices"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <OurServices />
      <Footer />
    </BrowserRouter>
  )
}

export default App
