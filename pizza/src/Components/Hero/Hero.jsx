import React from 'react'
import { HeroStyled, BigPizzaStyled, SloganStyled } from './HeroStyled'
import PizzaBanner from "../../Assets/Pizza-Banner.png"

const Hero = () => {
  return (
    <HeroStyled>
          <SloganStyled>
              <h2>
                  Best <span>π</span>zza ever
              </h2>
          <p>Mathematically proven</p>
          </SloganStyled>
          <BigPizzaStyled src={PizzaBanner} animate= {{rotate:[null,360]}} transition ={{repeat: Infinity, duration:60, ease: 'linear'}}/>
      </HeroStyled>
  )
}

export default Hero