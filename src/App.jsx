import './App.css'
import LandingPage from "./components/landing-page";
import Card from "./components/Cards";

function App() {

  return (
    <>
      <LandingPage />

        <h1>Top Events</h1>
      <div className='grid grid-cols-4 gap-4'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
