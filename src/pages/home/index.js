import React, {useState} from 'react'
import Nav from '../../components/nav'
import Header from '../../components/header'
import Section from '../../components/section'
import Banner from '../../components/banner'
import Footer from '../../components/footer'

const Home = () => {
  const [navSize, setNavSize] = useState('')
  return (
    <>
      <Nav setNavSize={setNavSize}/>
      <Header navHeight={navSize}/>
      <Section/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default Home