import './App.css'
import LandingPage from "./components/landing-page";
import CardsList from "./components/cardlist";
import Categories from './components/categories';

function App() {

  return (
    <>
      <LandingPage />
      <h1>Explore top categories</h1>
      <Categories />

        <h1>Top Events</h1>
      <div className='grid grid-cols-4 gap-4'>
        <CardsList />
        <CardsList />
        <CardsList />
      </div>
    </>
  )
}

export default App
