import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Portfolio from './components/Portfolio/Portfolio'
import Review from './components/Review/Review'
import Destination from './components/Destination/Destination'
import Questions from './components/Questions/Questions'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'
function App() {
  
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Middle/>
        <Destination/>
        <Portfolio/>
        <Review/>
        <Questions/>
        <Subscribe/>
        <Footer/>
        </div>
    </>
  )
}

export default App
