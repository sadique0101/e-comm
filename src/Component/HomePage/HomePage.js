import React from 'react'
import Herosection from './Herosection'
import OfferSection from './OfferSection'
import Trending from './Trending'
import Latest from './Latest'
import NewArrival from './NewArrival'
import CompanyDescription from './CompanyDescription'
import TopSeller from './TopSeller'
const HomePage = () => {
  return (
    <div>
      <Herosection />
      {/* <OfferSection /> */}
      <TopSeller />
      <Trending />
      <Latest />
      <CompanyDescription />
      <NewArrival />
    </div>
  )
}

export default HomePage
