import { FollowingPointerCarousel} from '@/components/Carousel'
import { CompareDemo } from '@/components/Comparator'
import { BentoGridThirdDemo } from '@/components/Grid'
import { MacbookScrollDemo } from '@/components/Hero'
import { NavbarDemo } from '@/components/navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <NavbarDemo />
      <MacbookScrollDemo />
      <BentoGridThirdDemo />
      <CompareDemo />
      <FollowingPointerCarousel />
    </div>
  )
}

export default Home
