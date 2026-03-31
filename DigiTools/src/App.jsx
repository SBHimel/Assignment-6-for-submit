
import './App.css'
import Banner from './Component/Banner'
import NavBar from './Component/NavBar'
import StatsSection from './Component/StatesSection'
import GetStartedSteps from './Component/GetStartedSteps'
import PricingCard from './Component/PricingCard'

function App() {

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <StatsSection></StatsSection>

      <GetStartedSteps></GetStartedSteps>

      <PricingCard></PricingCard>
    </>
  )
}

export default App
