import { FollowingPointerCarousel} from '@/components/Carousel'
import { CompareDemo } from '@/components/Comparator'
import { BentoGridThirdDemo } from '@/components/Grid'
import { MacbookScrollDemo } from '@/components/Hero'
import { FloatingDockDemo } from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <MacbookScrollDemo />
      <BentoGridThirdDemo />
      <CompareDemo />
      <FollowingPointerCarousel />
      <FloatingDockDemo />
    </div>
  )
}

export default Home
