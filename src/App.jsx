import './App.css'
import Navbar from './Components/Layout/Navbar'
import HeroSection from './Components/Section/HeroSection'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Footer from './Components/Layout/Footer'
import About from './Components/Section/About'
// import Signup from './Components/Signup'
function App() {

  return (
    <>
      <Navbar/>
      {/* <Signup/> */}
      <HeroSection/>
      <About/>
      <Menu/>
      <Gallery/>
      <Footer/>


    </>
    
    
  )
}

export default App
