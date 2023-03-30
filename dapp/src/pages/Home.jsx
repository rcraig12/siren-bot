import React from 'react'

import Foot from '../components/Foot'

import Logo from '../logo.png'

const Home = () => {
  return (
    <div className='application'>

      <div className='content home'>
        <h1>Siren Bot</h1>
        <img className='homelogo' src={Logo} alt="Siren Business Logo"/>
        <div>
          <a className='homelink' href="/login">LOGIN</a>
          <a className='homelink' href="/register">REGISTER</a> 
        </div>
      </div>
      <Foot />
    </div>
  )
}

export default Home
