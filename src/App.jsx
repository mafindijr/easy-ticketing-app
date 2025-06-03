import './App.css'
import LandingPage from "./components/landing-page";
import Card from "./components/Cards";
import Categories from './components/categories';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <LandingPage />
      <h1 className='ml-30'>Explore top categories</h1>
      <Categories />

        <h1 className='ml-30'>Top Events</h1>
      <div className='grid grid-cols-4 gap-4 w-full px-30'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )
}

export default App
