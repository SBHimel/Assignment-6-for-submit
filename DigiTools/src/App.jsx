
import './App.css'
import Banner from './Component/Banner'
import NavBar from './Component/NavBar'
import StatsSection from './Component/StatesSection'
import GetStartedSteps from './Component/GetStartedSteps'
import PricingCard from './Component/PricingCard'
import Footer from './Component/Footer'
import Products from './Component/Products'
import Card from './Component/Card'
import { useState } from 'react'
import Premium from './Component/Premium'

const fetchCard = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

const cardsPromise = fetchCard()


function App() {

  const[activeTab, setActiveTab] = useState("products")
  // console.log(activeTab)
  const [carts, setCarts] = useState([])
  console.log(carts)

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <StatsSection></StatsSection>

      <Premium></Premium>
      

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-full w-40" 
        aria-label="Products"
        defaultChecked
        onClick={()=> setActiveTab("products")}
         />

        <input type="radio"
         name="my_tabs_1"
          className="tab tab rounded-full w-40" 
          aria-label="Cart"
          onClick={()=> setActiveTab("cart")} 
           />

      </div>

      {activeTab === "products" ? <Products cardsPromise={cardsPromise}   carts={carts}  setCarts={setCarts}></Products>  : null}

      {activeTab=== "cart" ? <Card  carts={carts}></Card>  : null}

      <GetStartedSteps></GetStartedSteps>

      <PricingCard></PricingCard>

      <Footer></Footer>
    </>
  )
}

export default App
