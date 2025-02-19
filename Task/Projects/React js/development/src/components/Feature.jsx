import React from 'react'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
import Featurebox from './Featurebox'

const Feature = () => {
  return (
    <div>
      <div id="features">
        <h1>FEATURES</h1>
        <div className="a-container">
            <Featurebox image={fimage1} title="weightLifting"/>
            <Featurebox image={fimage2} title="Specific Muscle"/>
            <Featurebox image={fimage3} title="Flex Your Muscle"/>
            <Featurebox image={fimage4} title="Cardio Exercise"/>
        </div>
      </div>
    </div>
  )
}

export default Feature