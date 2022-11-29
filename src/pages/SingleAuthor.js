import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Subscribe from '../components/home/Subscribe'

function SingleAuthor() {
    const {id} = useParams()

    const [authors, allsetAuthor] = useState([])
    // const [auhtor, setAuthor] = useState([])

    useEffect(()=>{
        axios.get('../data/author/authorPosts.json').then((response) =>{
            allsetAuthor(response.data)
        })
    },[])

    // console.log(authors);
    const author = authors.find(author => author.id === id)
    console.log(author?.Post);
  return (
    <div className='mt-[170px]'>
         {/* <!-- author info --> */}
         {
            author && 
            <div className="mx-auto w-full lg:w-[924px]">
               <div className="flex flex-col items-center">
                    <img className="rounded-full border-[6px] lg:border-[8px] xl:border-[10px] border-primary-20 w-[128px] lg:w-[150px] xl:w-[200px] h-[128px] lg:h-[150px] xl:h-[200px]" src={require(`../assests/images/Author/${author.contentimg}.webp`)} alt="" srcSet=""/>
                    <p className="text-[24px] sm:text-[32px] lg:text-[48px] xl:text-[64px] text-text font-bold mt-10">{author.authorName}</p>
                    <p className="text-base lg:text-xl text-text-40 font-normal mx-4 text-center">{author.description}</p>
                    <div className="flex  gap-6 sm:gap-8 mt-12 flex-wrap justify-center">
                        <button className="flex gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4923 21.9999V12.8769H16.4413L16.8828 9.32157H13.4923V7.05157C13.4923 6.02223 13.7676 5.32068 15.1892 5.32068L17.0023 5.31981V2.13994C16.6886 2.09677 15.6124 2 14.3603 2C11.7463 2 9.95662 3.65682 9.95662 6.69964V9.32167H7V12.877H9.95653V22L13.4923 21.9999Z" fill="#283683"/>
                            </svg>
                            <span className="text-base font-light text-text-40">Facebook</span>
                        </button>
                        <button className="flex gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 4.22008C2 3.57656 2.22523 3.04568 2.67568 2.62741C3.12612 2.20913 3.71172 2 4.43243 2C5.14029 2 5.71299 2.20591 6.15058 2.61776C6.60102 3.04247 6.82626 3.59587 6.82626 4.27799C6.82626 4.89575 6.60747 5.41054 6.16988 5.82239C5.71944 6.2471 5.12741 6.45946 4.39382 6.45946H4.37452C3.66666 6.45946 3.09396 6.2471 2.65637 5.82239C2.21878 5.39768 2 4.86357 2 4.22008ZM2.25097 21.112V8.21622H6.53668V21.112H2.25097ZM8.9112 21.112H13.1969V13.9112C13.1969 13.4607 13.2484 13.1132 13.3514 12.8687C13.5315 12.4311 13.805 12.0611 14.1718 11.7587C14.5386 11.4562 14.9987 11.305 15.5521 11.305C16.9936 11.305 17.7143 12.2767 17.7143 14.2201V21.112H22V13.7181C22 11.8134 21.5496 10.3687 20.6486 9.38417C19.7477 8.39961 18.5573 7.90734 17.0772 7.90734C15.417 7.90734 14.1236 8.62162 13.1969 10.0502V10.0888H13.1776L13.1969 10.0502V8.21622H8.9112C8.93693 8.62805 8.94981 9.90861 8.94981 12.0579C8.94981 14.2072 8.93693 17.2252 8.9112 21.112Z" fill="#283683"/>
                            </svg>                             
                            <span className="text-base font-light text-text-40">Linkedin</span>
                        </button>
                        <button className="flex gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3634 3.0037V3H16.3012L16.6438 3.07029C16.8723 3.11593 17.0797 3.17573 17.266 3.24972C17.4524 3.32371 17.6327 3.41004 17.807 3.50869C17.9814 3.60734 18.1395 3.70786 18.2814 3.81021C18.422 3.91134 18.5483 4.01863 18.6601 4.13208C18.7707 4.24676 18.9432 4.27636 19.1776 4.22087C19.4121 4.16537 19.6646 4.08829 19.9351 3.98964C20.2056 3.89099 20.4731 3.78 20.7376 3.65668C21.0021 3.53335 21.1632 3.45505 21.2209 3.42175C21.2774 3.38724 21.3075 3.36874 21.3111 3.36626L21.3147 3.36071L21.3327 3.35146L21.3508 3.34221L21.3688 3.33296L21.3868 3.32371L21.3904 3.31817L21.3959 3.31447L21.4013 3.31077L21.4049 3.30522L21.4229 3.29967L21.4409 3.29597L21.4373 3.32371L21.4319 3.35146L21.4229 3.37921L21.4139 3.40696L21.4049 3.42545L21.3959 3.44395L21.3868 3.4717C21.3808 3.4902 21.3748 3.51485 21.3688 3.54569C21.3628 3.57653 21.3057 3.69983 21.1975 3.91565C21.0893 4.13146 20.954 4.35035 20.7917 4.57233C20.6294 4.7943 20.4839 4.96201 20.3553 5.07547C20.2254 5.19016 20.1395 5.27031 20.0974 5.31595C20.0553 5.3628 20.0042 5.40596 19.9441 5.44543L19.8539 5.50647L19.8359 5.51572L19.8179 5.52497L19.8143 5.53052L19.8088 5.53422L19.8034 5.53792L19.7998 5.54347L19.7818 5.55272L19.7638 5.56197L19.7602 5.56752L19.7547 5.57122L19.7493 5.57492L19.7457 5.58047L19.7421 5.58602L19.7367 5.58972L19.7313 5.59341L19.7277 5.59896H19.8179L20.3228 5.48798C20.6595 5.41398 20.9811 5.32458 21.2876 5.21976L21.7746 5.05327L21.8287 5.03478L21.8557 5.02553L21.8738 5.01628L21.8918 5.00703L21.9098 4.99778L21.9279 4.98853L21.9639 4.98298L22 4.97928V5.01628L21.991 5.01998L21.982 5.02553L21.9784 5.03108L21.9729 5.03478L21.9675 5.03848L21.9639 5.04403L21.9603 5.04957L21.9549 5.05327L21.9495 5.05697L21.9459 5.06252L21.9423 5.06807L21.9369 5.07177L21.9279 5.09027L21.9188 5.10877L21.9134 5.11247C21.911 5.11617 21.8347 5.22098 21.6844 5.42693C21.5341 5.63411 21.453 5.73892 21.4409 5.7414C21.4289 5.7451 21.4121 5.7636 21.3904 5.79689C21.37 5.83141 21.2426 5.96892 21.0081 6.2094C20.7737 6.44987 20.5441 6.66382 20.3192 6.85128C20.0932 7.03996 19.979 7.27179 19.9766 7.5468C19.973 7.82057 19.9591 8.13011 19.9351 8.4754C19.911 8.8207 19.866 9.19373 19.7998 9.59452C19.7337 9.99532 19.6315 10.4485 19.4932 10.9541C19.355 11.4597 19.1867 11.953 18.9883 12.434C18.7899 12.9149 18.5825 13.3465 18.3661 13.7288C18.1497 14.1111 17.9513 14.4348 17.771 14.7C17.5906 14.9651 17.4073 15.2148 17.2209 15.4491C17.0346 15.6834 16.7989 15.9474 16.514 16.2408C16.2278 16.5331 16.0716 16.6934 16.0451 16.7218C16.0175 16.7489 15.8996 16.8501 15.6916 17.0252C15.4848 17.2015 15.2624 17.3778 15.0243 17.5542C14.7875 17.7293 14.5699 17.8755 14.3715 17.9926C14.1731 18.1097 13.9339 18.2435 13.6537 18.394C13.3748 18.5457 13.073 18.6863 12.7484 18.8158C12.4238 18.9452 12.0812 19.0655 11.7205 19.1765C11.3598 19.2875 11.0111 19.3738 10.6745 19.4354C10.3379 19.4971 9.95612 19.5495 9.52931 19.5927L8.88909 19.6574V19.6667H7.71686V19.6574L7.56357 19.6482C7.46139 19.642 7.37722 19.6358 7.31109 19.6297C7.24498 19.6235 6.99549 19.5896 6.56267 19.5279C6.12985 19.4663 5.79021 19.4046 5.54373 19.343C5.29728 19.2813 4.93057 19.1641 4.44364 18.9915C3.95672 18.8188 3.54013 18.6443 3.19387 18.468C2.84882 18.2929 2.63241 18.1819 2.54463 18.135C2.45807 18.0894 2.36069 18.0327 2.25248 17.9649L2.09017 17.8631L2.08658 17.8576L2.08115 17.8539L2.07574 17.8502L2.07214 17.8446L2.0541 17.8354L2.03607 17.8261L2.03248 17.8206L2.02705 17.8169L2.02164 17.8132L2.01803 17.8076L2.01445 17.8021L2.00902 17.7984H2V17.7614L2.01803 17.7651L2.03607 17.7706L2.11722 17.7799C2.17133 17.786 2.31861 17.7953 2.55906 17.8076C2.79953 17.82 3.055 17.82 3.32552 17.8076C3.59603 17.7953 3.87257 17.7675 4.15509 17.7244C4.43764 17.6812 4.77127 17.6072 5.156 17.5024C5.54074 17.3976 5.89421 17.273 6.21643 17.1287C6.53744 16.9832 6.76586 16.8747 6.90173 16.8032C7.03637 16.7329 7.24197 16.6022 7.51848 16.411L7.93327 16.1243L7.93688 16.1188L7.94229 16.1151L7.94772 16.1114L7.95131 16.1058L7.95491 16.1003L7.96032 16.0966L7.96575 16.0929L7.96934 16.0873L7.98738 16.0818L8.00541 16.0781L8.00902 16.0596L8.01443 16.0411L8.01986 16.0374L8.02344 16.0318L7.87917 16.0226C7.78299 16.0164 7.68981 16.0102 7.59964 16.0041C7.50947 15.9979 7.36821 15.9702 7.17583 15.9208C6.98348 15.8715 6.77609 15.7975 6.55365 15.6989C6.33124 15.6002 6.11482 15.483 5.90442 15.3474C5.69403 15.2117 5.54193 15.0989 5.44815 15.0089C5.35558 14.9201 5.23535 14.7943 5.08747 14.6315C4.94079 14.4675 4.81335 14.2992 4.70514 14.1265C4.59693 13.9539 4.49354 13.7547 4.39497 13.529L4.24527 13.1924L4.23625 13.1646L4.22723 13.1369L4.22182 13.1184L4.21821 13.0999L4.24527 13.1036L4.27232 13.1091L4.47069 13.1369C4.60296 13.1554 4.81035 13.1615 5.09288 13.1554C5.37542 13.1492 5.57078 13.1369 5.67899 13.1184C5.7872 13.0999 5.85333 13.0876 5.87737 13.0814L5.91344 13.0721L5.95852 13.0629L6.00361 13.0536L6.00721 13.0481L6.01262 13.0444L6.01805 13.0407L6.02164 13.0351L5.98557 13.0259L5.9495 13.0166L5.91344 13.0074L5.87737 12.9981L5.8413 12.9889C5.81726 12.9827 5.77518 12.9704 5.71506 12.9519C5.65495 12.9334 5.49264 12.8656 5.22813 12.7484C4.96364 12.6313 4.75324 12.5172 4.59693 12.4062C4.44024 12.2949 4.29084 12.1732 4.14968 12.0418C4.00902 11.9086 3.85454 11.7372 3.6862 11.5276C3.51789 11.3179 3.36761 11.0744 3.23535 10.7969C3.1031 10.5194 3.00391 10.2543 2.93778 10.0015C2.87192 9.75015 2.82846 9.49321 2.80795 9.23381L2.77547 8.84536L2.79351 8.84906L2.81154 8.85461L2.82958 8.86385L2.84761 8.8731L2.86564 8.88235L2.88368 8.8916L3.16321 9.02109C3.34958 9.10742 3.58101 9.18141 3.85753 9.24306C4.13407 9.30472 4.29937 9.33864 4.35347 9.3448L4.43463 9.35405H4.59693L4.59335 9.3485L4.58792 9.3448L4.58251 9.3411L4.5789 9.33555L4.57531 9.33L4.56988 9.3263L4.56447 9.3226L4.56087 9.31705L4.54283 9.30781L4.5248 9.29856L4.52121 9.29301L4.51578 9.28931L4.51037 9.28561L4.50676 9.28006L4.48873 9.27081L4.47069 9.26156L4.46711 9.25601C4.4635 9.25353 4.41179 9.21408 4.31199 9.13762C4.2134 9.05993 4.11001 8.95943 4.0018 8.83611C3.8936 8.71278 3.78539 8.5833 3.67719 8.44765C3.56878 8.31169 3.47223 8.16623 3.38864 8.01295C3.30449 7.8588 3.21551 7.66271 3.12173 7.42471C3.02916 7.18794 2.95883 6.94932 2.91073 6.70884C2.86265 6.46837 2.8356 6.23098 2.82958 5.99667C2.82357 5.76236 2.82958 5.56197 2.84761 5.39549C2.86564 5.229 2.90171 5.04094 2.95582 4.8313C3.00992 4.62166 3.08808 4.39969 3.19026 4.16537L3.34355 3.81391L3.35257 3.78616L3.36159 3.75842L3.36702 3.75472L3.3706 3.74917L3.37421 3.74362L3.37962 3.73992L3.38505 3.74362L3.38864 3.74917L3.39225 3.75472L3.39766 3.75842L3.40308 3.76212L3.40667 3.76767L3.41028 3.77321L3.41569 3.77691L3.42471 3.79541L3.43372 3.81391L3.43915 3.81761L3.44274 3.82316L3.6862 4.10063C3.84851 4.28561 4.04088 4.49218 4.2633 4.72031C4.48573 4.94845 4.60896 5.06683 4.633 5.07547C4.65706 5.08533 4.68711 5.11369 4.72317 5.16056C4.75924 5.2062 4.87948 5.31533 5.08386 5.48798C5.28826 5.66062 5.55576 5.86102 5.88638 6.08916C6.21702 6.3173 6.58371 6.54236 6.98647 6.76434C7.38925 6.98631 7.82207 7.1867 8.28494 7.36552C8.74783 7.54434 9.07244 7.66149 9.25879 7.71698C9.44516 7.77247 9.76375 7.84338 10.2146 7.92971C10.6655 8.01604 11.0051 8.07153 11.2335 8.09619C11.462 8.12085 11.6183 8.13503 11.7024 8.13873L11.8287 8.14243L11.8251 8.11469L11.8197 8.08694L11.7836 7.85572C11.7595 7.70157 11.7475 7.48576 11.7475 7.20829C11.7475 6.93082 11.7686 6.67494 11.8106 6.44062C11.8527 6.20631 11.9159 5.96892 12 5.72845C12.0842 5.48798 12.1665 5.29497 12.2471 5.14946C12.3288 5.00518 12.4358 4.84055 12.5681 4.65557C12.7003 4.47059 12.8717 4.27945 13.0821 4.08213C13.2925 3.88481 13.5329 3.70908 13.8034 3.55494C14.0739 3.4008 14.3234 3.28363 14.5518 3.20348C14.7803 3.12333 14.9727 3.0709 15.1289 3.04624C15.2852 3.02159 15.3634 3.0074 15.3634 3.0037V3.0037Z" fill="#283683"/>
                            </svg>
                            <span className="text-base font-light text-text-40">Twitter</span>
                        </button>
                        <button className="flex gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" fill="#283683"/>
                                <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" fill="white"/>
                            </svg>    
                            <span className="text-base font-light text-text-40">Chicago</span>
                        </button>
                    </div>
                </div>
            </div>
         }

         <div className="mx-6 mt-[115px]">
            <h2 className="text-base sm:text-lg lg:text-xl xl:text-[24px] font-bold text-primary ml-2 text-center lg:text-left">Check out the latest posts</h2>
            <div className="mt-10 mb-7 flex gap-6 justify-center flex-wrap">
                {
                    author?.Post.map(post =>
                        <div key={post.id} className="border rounded-[10px] w-[440px]">
                            <img className="rounded-t-[10px] w-full" src={require(`../assests/images/AuthorPost/${post.img}.webp`)} alt="" srcSet=""/>
                            <div className="p-4">
                                <p className="flex text-xs md:text-sm justify-between md:justify-start md:gap-x-2">
                                    <span className="text-primary">#Career & Growth</span>
                                    <span className="text-text hidden md:block">|</span>
                                    <span className="text-text-60">22 June, 2022</span>
                                </p>
                                <p className="text-[18px] text-text font-bold mt-4 text-base">10 things nobody told your about Being a web designer!</p>
                                <p className="flex justify-between text-sm mt-4">
                                    <span className="text-text">by James Frankline</span>
                                    <span className="text-text-60">5 mins to read</span>
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

         </div>


         <div className="mt-10">
            <Subscribe></Subscribe>
         </div>

    </div>
  )
}

export default SingleAuthor