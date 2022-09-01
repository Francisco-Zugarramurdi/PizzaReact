import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import Title from '../Title/Title'
import { motion } from 'framer-motion'
import { MdHealthAndSafety } from 'react-icons/md'
import {IoDiamond} from 'react-icons/io5'
import {Ri24HoursFill} from 'react-icons/ri'

import { FeaturesStyled, FeatureStyled, HorizontalLineStyled, } from './FeaturesStyled'
const Features = () => {
  return (
    <FeaturesStyled>
      <HorizontalLineStyled/>
        <Title secondary size='3em'>What defines us</Title>
        <Carrousel secondary>
          <FeatureStyled>
            <span>
              <MdHealthAndSafety/>
            </span>
            <h3>Maximum hygiene</h3>
            <p>We are compromised into keeping our products <span>safe from hazardous contaminants.</span></p>
          </FeatureStyled>
          <FeatureStyled>
            <motion.span>
              <IoDiamond/>
            </motion.span>
            <h3>High Quality materials</h3>
            <p>We choose only the finest materials regarding our products that includes: Ecology, ethics, <span>no GMO</span> and quality.</p>
          </FeatureStyled>
          <FeatureStyled>
            <span>
              <Ri24HoursFill/>
            </span>
            <h3>Trustworthy service</h3>
            <p>We make orders <span>24</span> hours <span>7</span> days of the week</p>
          </FeatureStyled>
        </Carrousel>
      </FeaturesStyled>
  )
}

export default Features