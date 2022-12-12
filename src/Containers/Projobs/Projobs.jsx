import React from 'react'
import Carousel from '../../Components/Carousel/Carousel';
import Guidance from '../../Components/Guidance/Guidance';
import Welcome from '../../Components/Welcome/Welcome';
import {Styled} from "./styles.js"

export const Projobs = () => {
  return (
    <Styled.GridContainer>
      <Welcome />
      <Guidance />
      <Carousel />
    </Styled.GridContainer>
  )
}

export default Projobs;