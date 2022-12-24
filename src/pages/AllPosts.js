import React from 'react'
import bg from './../assests/images/All-blog/all-blog-banner.webp'

function AllPosts() {
  return (
    <div className='mt-[56px] sm:mt-[87px]'>

        {/* <!-- banner part  --> */}
        <div style={{"backgroundImage":`url(${bg})`}} class="all-blog-banner flex justify-center">
            <div class="w-[1180px] py-[64px] text-center mx-5">
                <p class="text-text font-bold text-base sm:text-[24px] md:text-[48px] leading-[150%] md:leading-[60px]">“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
                <p class="italic text-xs md:text-base text-text-60 mt-2 md:mt-6">-George R.R. Martin</p>
            </div>
        </div>


        {/* <!-- all post  --> */}
        <div class="mx-4 md:mx-6 py-6">

            {/* filtering  */}
            <div class="flex items-center justify-between">
                <div class="">
                    <select class="border-2 h-[44px] text-text-60 font-bold rounded-[8px] outline-none" name="" id="">
                        <option value="sort">Sort</option>
                        <option value="New">New</option>
                        <option value="Popular">Popular</option>
                        <option value="Featured">Featured</option>
                    </select>
                </div>
                <div class="items-menu hidden lg:block">
                    <ul class="flex xl:gap-x-4 2xl:gap-x-6 text-text  whitespace-nowrap overflow-x-scroll text-sm 2xl:text-base scroll-bar">
                        <li data-filter="*" class="px-7 py-3 cursor-pointer blog-active-btn font-bold">All</li>
                        <li data-filter=".Career_growth" class="px-7 py-3 cursor-pointer font-bold">Career & Growth</li>
                        <li data-filter=".Process" class="px-7 py-3 cursor-pointer font-bold">Process</li>
                        <li data-filter=".Product" class="px-7 py-3 cursor-pointer font-bold">Product</li>
                        <li data-filter=".Design_system" class="px-7 py-3 cursor-pointer font-bold">Design System</li>
                    </ul>
                </div>
                <div id="click" class="px-4 md:px-7 py-3 border-2 rounded-[10px] cursor-pointer">
                    <span class="flex items-center gap-x-2">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                            <path d="M9.5625 12.0938H2.8125" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.1875 12.0938H11.8125" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.0625 5.90625H2.8125" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.1875 5.90625H7.3125" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.3125 4.21875V7.59375" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.8125 13.7812V10.4062" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <span class="text-text-60 font-bold text-sm">Filter</span>    
                    </span>
                </div>
            </div>

            {/* tabs  */}
            <div class="for-mobile lg:hidden mt-6 flex justify-center">
                <div class="items-menu overflow-x-scroll scroll-bar">
                    <ul class="flex gap-x-4 text-text  whitespace-nowrap text-sm">
                        <li data-filter="*" class="px-7 py-3 cursor-pointer blog-active-btn font-bold">All</li>
                        <li data-filter=".Career_growth" class="px-7 py-3 cursor-pointer font-bold">Career & Growth</li>
                        <li data-filter=".Process" class="px-7 py-3 cursor-pointer font-bold">Process</li>
                        <li data-filter=".Product" class="px-7 py-3 cursor-pointer font-bold">Product</li>
                        <li data-filter=".Design_system" class="px-7 py-3 cursor-pointer font-bold">Design System</li>
                    </ul>
                </div>
            </div>

            {/* <!-- filter on click  --> */}
            <div  id="post-filter"  class="w-full">
                <div class="mt-7 flex flex-col md:flex-row md:flex-wrap items-end gap-x-10 2xl:gap-x-6 gap-y-4 md:justify-center">
                    <div class="flex flex-col gap-y-2 w-full md:w-fit">
                        <label class="text-sm md:text-base" for="author_tag">Search By Tag,Topic or Author</label>
                        <input class="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="text" placeholder="search by author, tag, blog"/>
                    </div>

                    <div class="flex flex-col gap-y-2 w-full md:w-fit">
                        <label class="text-sm md:text-base" for="author_tag">Timeframe</label>
                        <input class="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="text" placeholder="Timeframe"/>
                    </div>

                    <div class="flex flex-col gap-y-2 w-full md:w-fit">
                        <label class="text-sm md:text-base" for="author_tag">Time</label>
                        <div class="relative">
                            <input id="flatpickr" class="w-full md:w-[480px] bg-[#F8F8F8] px-[18px] py-3 outline-none rounded-[8px] border-2 placeholder:text-text-40" type="date" placeholder="All Time"/>
                            {/* <span class="absolute right-4 top-1/2 -translate-y-1/2">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.4">
                                    <path d="M19.5 4.25H4.5C4.08579 4.25 3.75 4.58579 3.75 5V20C3.75 20.4142 4.08579 20.75 4.5 20.75H19.5C19.9142 20.75 20.25 20.4142 20.25 20V5C20.25 4.58579 19.9142 4.25 19.5 4.25Z" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.5 2.75V5.75" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.5 2.75V5.75" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M3.75 8.75H20.25" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.625 14.75H9.375" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 12.125V17.375" stroke="#060B25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg>
                            </span> */}
                        </div>
                    </div>

                   <div class="w-full 2xl:w-fit flex justify-center mt-4 2xl:mt-0">
                        <button class="w-[283px] py-[13.5px] bg-text-10 rounded-[5px] text-text-40">Clear</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllPosts