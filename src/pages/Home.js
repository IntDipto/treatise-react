import React, { useEffect, useState } from 'react'
import AllPost from '../components/home/AllPost'
import BestStories from '../components/home/BestStories'
import EditorsChoice from '../components/home/EditorsChoice'
import HeroSection from '../components/home/HeroSection'
import Subscribe from '../components/home/Subscribe'
import Loader from '../components/shared-components/loader/Loader'
import useTitleHook from '../Hooks/useTitleHook'

function Home() {
  useTitleHook('Home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  }, [])

  return (
    <>
      {
        isLoading ? <Loader /> : <div className="mt-20 sm:mt-[120px] md:[120px] lg:mt-[140px] xl:mt-[160px]">
          <HeroSection></HeroSection>
          <BestStories></BestStories>
          <EditorsChoice></EditorsChoice>
          <AllPost></AllPost>
          <Subscribe></Subscribe>
        </div>
      }
    </>

  )
}

export default Home