import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import ProductDesign from "./components/Products"
import PictureCards from "./components/PictureCards"
import Connect from "./components/Connect"
import Money from "./components/Money"
function App() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Card />
        <ProductDesign />
        <PictureCards/>
        <Connect/>
        <Money/>
        <Testimonial />
        <Footer />
      </main>
    </>
  )
}

export default App
