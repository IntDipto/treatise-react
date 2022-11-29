import React, { useEffect, useState } from 'react'

function AuthorPost() {
  const [authors, setAuthors] = useState([])
  useEffect(()=>{
    fetch("./data/author/authorPosts.json")
    .then(res => res.json())
    .then(data => setAuthors(data))
  },[])
  // console.log(authors);
  return (
    <div>
         <div className="mx-6">
            <h2 className="text-base sm:text-[32px] leading-[150%] text-primary font-bold text-center sm:text-left">Authors</h2>
            <p className="mt-4 text-primary-60 text-sm sm:text-base leading-6 text-center sm:text-left">Proin nulla felis, pharetra sed scelerisque vel, imperdiet eget velit. Suspendisse eros purus, pretium semper placerat vitae.</p>
            <div className="flex justify-center">
                <div className="Author-article mt-10 flex justify-center flex-wrap gap-[24px] items-center mx-[5%] 2xl:[160px]">
                  {
                    authors.map (author => 
                      <div key={author.id} className="w-[280px] mb-[24px]">
                        <img className="w-full" src={require(`./../../assests/images/Author/${author.contentimg}.webp`)} alt=""/>
                        <h3 className="text-text font-bold text-lg sm:text-[24px] leading-[150%] mt-2">{author.authorName}</h3>
                        <p className="lol text-base text-text-60 font-normal leading-[24px]">{author.numberOfPost}</p>
                        <p className="text-text-40 text-base leading-[24px] mt-2 font-light">{author.description}</p>
                      </div>
                    )
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthorPost