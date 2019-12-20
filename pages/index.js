import React from 'react'
import Head from 'next/head'
import Card from '../components/card'

import '../styles/tailwind.css'
import data from '../data/country_data.json'

const Home = () => (
  <div>
    <div className="h-32 bgimage">
    </div>
    <div className="flex flex-wrap justify-center w-full">
      {
        data.filter(x => x.OC == "IN").map((el, key) => {
          return <Card key={key} info={el}></Card>
        })
      }
    </div>
    <style jsx>{`
    .bgimage {
      background-image: url('../images/flags/india.svg');
         background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
    }
    `}</style>
  </div>
)

export default Home
