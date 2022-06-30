import React from 'react'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import Row from '../components/row/Row'
import requests from '../Request'

function Home() {
  return (
    <div>
        <Main />
        <Row fetchURL={requests.requestUpcoming}/>
        <Footer />
    </div>
  )
}

export default Home