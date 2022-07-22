import React from 'react'
import Herocomp from '../../components/hero-comp/Herocomp'
import './index.css'

const index = () => {
  return (
    <div>
      <section id='hero-section'>
        <div className="container">
          <div className="row hero__section__row">
            <div className="col-lg-6">
    <Herocomp/>
            </div>
            <div className="col-lg-6">
              <img className='hero__section__image' src="http://gigaland.on3-step.com/img/misc/nft.png" alt="nft jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default index