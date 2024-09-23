import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import ProductDesign from "./components/Products"
import PictureCards from "./components/PictureCards"

function App() {

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Card />
        <ProductDesign />
        <PictureCards/>
        <Testimonial />
        <Footer />
      </main>
    </>
  )
}

export default App
