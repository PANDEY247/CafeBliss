import './App.css'
import { AuthProvider } from './context/AuthContext'
import Navbar from './Components/Layout/Navbar'
import HeroSection from './Components/Section/HeroSection'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Footer from './Components/Layout/Footer'
import About from './Components/Section/About'

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Menu/>
      <Gallery/>
      <Footer/>
    </AuthProvider>
  )
}

export default App
