import React from 'react'
import Herosection from './Herosection'
import OfferSection from './OfferSection'
import Trending from './Trending'
import Latest from './Latest'
import NewArrival from './NewArrival'
import CompanyDescription from './CompanyDescription'
const HomePage = () => {
  return (
    <div>
      <Herosection />
      <OfferSection />
      <Trending />
      <Latest />
      <CompanyDescription />
      <NewArrival />
    </div>
  )
}

export default HomePage
