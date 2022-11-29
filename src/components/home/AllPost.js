import React, { useEffect, useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Link } from 'react-router-dom'

function AllPost() {

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch("./data/home/posts.json")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    console.log(posts);
    // const images = [
    //     "https://picsum.photos/200/300?image=1050",
    //     "https://picsum.photos/300/300?image=206",
    // ]
  return (
    <div id="all-post" className="mt-20 mb-20">
    <h2 className="text-primary font-bold text-base sm:text-[24px] text-center sm:text-left mx-6 leading-[150%]">All Posts</h2>
        <div className="catagories mx-6 mt-6 items-menu">
            <ul className="flex gap-x-6 text-text  whitespace-nowrap overflow-x-scroll text-sm sm:text-base scroll-bar">
                <li className="px-7 py-3 btn-active cursor-pointer">All</li>
                <li className="px-7 py-3 cursor-pointer">Career & Growth</li>
                <li className="px-7 py-3 cursor-pointer">Process</li>
                <li className="px-7 py-3 cursor-pointer">Product</li>
                <li className="px-7 py-3 cursor-pointer">Design System</li>
            </ul>
        </div>
        <div className="mt-10  mx-6">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200:4}}
            >
                <Masonry>
                    {
                        posts.map(post =>
                            <Link key={post.id} href="" className="items Product m-[10px]">
                                <div className="border rounded-[10px] h-fit">
                                    <img className="w-full" src={require(`./../../assests/images/home/all-posts/${post.img}.webp`)} alt=""/>
                                    <div className="p-4">
                                        <p className="flex gap-x-2 text-xs md:text-sm">
                                            <span className="text-primary">#Career & Growth</span>
                                            <span className="text-text">|</span>
                                            <span className="text-text-60">22 June, 2022</span>
                                        </p>
                                        <p className="text-base md:text-[18px] text-text font-bold mt-4">10 things nobody told your about Being a web designer!</p>
                                        <p className="flex justify-between text-xs sm:text-sm mt-4">
                                            <span className="text-text">by James Frankline</span>
                                            <span className="text-text-60">5 mins to read</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>    
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </div>
  )
}

export default AllPost