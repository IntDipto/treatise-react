import React from 'react'
import bg from '../assests/images/bg.webp'

function SubscribeMemberShip() {
  return (
    <div style={{"backgroundImage":`url(${bg})`}} className="h-screen">
       <div class="flex justify-center py-[80px] sm:py-[160px] h-full w-full ">
            <div class="max-w-[450px] mx-4 sm:mx-0 py-6 sm:py-8 px-4 sm:px-6 bg-white rounded-[10px]  form-container">
                <h2 class="text-lg leading-[23px] sm:text-[32px] font-bold sm:leading-[40px]">Membership Subscribe </h2>

                <form class="mt-10" action="">
                    <div class="flex flex-col gap-y-2">
                        <label class="text-sm sm:text-base text-text leading-[17px] sm:leading-[21px]" for="name">Name</label>
                        <input id="name" class="text-sm outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Email"/>
                    </div>

                    <div class="flex flex-col gap-y-2 mt-6">
                        <label class="text-sm sm:text-base text-text leading-[17px] sm:leading-[21px]" for="">Email</label>
                        <input class="text-sm outline-none border-2 border-text-10 px-5 sm:px-7 py-2 sm:py-3 rounded-[10px] placeholder:text-sm placeholder:leading-[17px]" type="text" placeholder="Email"/>
                    </div>

                    <div class="flex items-start mt-6">
                        <label class="custom-input text-sm">
                            <span class="text-sm font-semibold leading-[18px] sm:leading-[21px]">I agree to the <span class="text-primary">Terms of Services</span> & <span class="text-primary">Privacy Policy</span></span>
                            <input type="checkbox" checked="checked"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="mt-7 flex justify-center">
                        <button class="px-6 py-3 text-sm bg-primary text-white rounded-[8px] font-bold">Create Account</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default SubscribeMemberShip