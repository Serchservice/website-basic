import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './newsroom.css'

const Newsroom = (props) => {
  return (
    <div className="newsroom-container">
      <Helmet>
        <title>Newsroom - Serch - Service made easy</title>
        <meta
          name="description"
          content="A requestSharing and provideSharing platform connecting users to artisans of these categories:\n1. Mechanics\n2. Plumbers\n3. Electricians\n4. Carpenters"
        />
        <meta
          property="og:title"
          content="Newsroom - Serch - Service made easy"
        />
        <meta
          property="og:description"
          content="We connect you to mechanics, electricians, plumbers and carpenters that are closer to you. Request, Provide, Earn."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/f39175c2-e559-4e7d-a107-d475736a4c55/7be9c128-dfa0-44f7-9412-c8610193beb1?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name21"></NavbarInteractive>
      <div className="newsroom-header">
        <span className="newsroom-text">Serch Newsroom</span>
      </div>
    </div>
  )
}

export default Newsroom
