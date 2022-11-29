import React from 'react'
import Card from '../components/memberShip/Card'
import Table from '../components/memberShip/Table'

function Membership() {

  

  return (
    <div className='mt-28 sm:mt-32'>
        <div className="membership-plan mx-6 hidden 2xl:block">
            <h2 className="sm:base sm:text-[24px] md:text-[32px] font-bold leading-[150%] text-primary text-center md:text-left">Membership</h2>
            <p className="mt-2 sm:mt-4 text-primary-60 text-base leading-[150%] text-center md:text-left">Pick a plan based on your needs</p>
            <div className="overflow-x-auto w-full mt-6 md:mt-0">
              <Table></Table>
            </div>
        </div>

        <div class="mx-4 block 2xl:hidden">
            <h2 class="sm:base sm:text-[24px] md:text-[32px] font-bold leading-[150%] text-primary text-center md:text-left">Membership</h2>
            <p class="mt-2 sm:mt-4 text-primary-60 text-base leading-[150%] text-center md:text-left">Pick a plan based on your needs</p>
            <div className="">
              <Card></Card>
            </div>
           
        </div>
    </div>
  )
}

export default Membership