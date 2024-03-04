
import  {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { Home } from "./pages/home/Home"
import About from "./pages/about/About"
import { Gallery } from "./pages/gallery/Gallery"
import { Services } from "./pages/services/Services"
import { Contact } from "./pages/contact/Contact"
import { Error } from "./pages/error/Error"
import'./global.css'
import { Nav } from "./components/nav/Nav"
import { Details } from "./pages/home/PHOTOS/Details"
import { Loader } from "./components/loader/Loader"



function App() {
  return (
    <>
     <Router>
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
     </Router>


    </>
  )
}

export default App
