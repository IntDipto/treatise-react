import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="">
        <div className="flex flex-col lg:flex-row justify-between items-center mx-8 py-6 border-0 lg:border-b relative">
            <Link href="index.html">
                <svg width="141" height="40" viewBox="0 0 141 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4639 22.7036C12.3479 18.1372 16.8576 13.1441 18.2326 11.6841V10.1209L17.8288 10.5293C17.5383 10.8226 12.2464 16.2103 9.77139 21.5433C9.56856 21.9809 9.38492 22.4176 9.22412 22.8516C8.78191 24.0448 8.51147 25.2143 8.51147 26.2997C8.51147 33.7788 16.9956 35.173 17.0814 35.1858L17.7283 35.2853L16.5917 33.9944C14.7215 33.5339 9.6252 31.777 9.6252 26.2988C9.6252 25.5277 9.7787 24.7026 10.0464 23.8484C10.104 23.6611 10.4173 22.8543 10.4639 22.7036Z" fill="url(#paint0_linear_339_1181)"/>
                    <path d="M4.72983 23.7259C4.72983 21.4537 5.14097 18.9247 6.92806 16.0751C7.06327 14.9879 7.32549 13.9226 7.76678 12.9176C4.36529 16.7832 3.56311 20.9494 3.56311 23.725C3.56311 33.6234 12.1541 38.0756 18.2545 38.0756V36.96C12.6383 36.961 4.72983 32.855 4.72983 23.7259Z" fill="url(#paint1_linear_339_1181)"/>
                    <path d="M18.2324 3.40197V2.00136L17.8752 2.28733C17.7747 2.36773 15.3755 4.29643 12.9379 7.0876C9.62226 10.8847 7.94116 14.288 7.94116 17.2034C7.94116 17.8119 7.964 18.4213 8.02522 19.0271C8.07821 19.5506 8.15952 20.0714 8.28469 20.5839C8.39524 21.038 8.54051 21.4839 8.72872 21.9142C8.85663 22.2056 8.99459 22.488 9.17001 22.7547C9.33355 23.0042 9.51537 23.2426 9.71272 23.4674C10.133 23.947 10.6264 24.3335 11.1435 24.7127C11.4084 24.9073 11.6825 25.1083 11.9338 25.3193C14.7926 27.724 16.3924 30.7071 16.5906 33.9825L17.7272 35.2735L17.7254 34.6467C17.7162 30.7957 15.9675 27.2946 12.6693 24.5199C12.3897 24.2851 12.101 24.0722 11.8205 23.8676C11.5711 23.6839 11.3198 23.5012 11.0823 23.3038C10.9662 23.207 10.8539 23.1074 10.746 23.0023C10.6931 22.9503 10.641 22.8973 10.5916 22.8424C10.4162 22.6506 10.2609 22.4423 10.122 22.2248C9.98041 22.0028 9.87534 21.7707 9.76845 21.5314C9.27782 20.4295 9.05307 19.0454 9.05307 17.2034C9.05489 11.527 16.4974 4.87476 18.2324 3.40197Z" fill="url(#paint2_linear_339_1181)"/>
                    <path d="M25.9613 22.7036C24.0774 18.1372 19.5677 13.1441 18.1926 11.6841V10.1209L18.5965 10.5293C18.887 10.8226 24.1788 16.2103 26.6539 21.5433C26.8567 21.9809 27.0403 22.4176 27.2011 22.8516C27.6433 24.0448 27.9138 25.2143 27.9138 26.2997C27.9138 33.7788 19.4297 35.173 19.3438 35.1858L18.697 35.2853L19.8335 33.9944C21.7038 33.5339 26.8 31.777 26.8 26.2988C26.8 25.5277 26.6466 24.7026 26.3789 23.8484C26.3213 23.6611 26.0079 22.8543 25.9613 22.7036Z" fill="url(#paint3_linear_339_1181)"/>
                    <path d="M31.7373 23.7259C31.7373 21.4537 31.3261 18.9247 29.5391 16.0751C29.4038 14.9879 29.1416 13.9226 28.7003 12.9176C32.1018 16.7832 32.904 20.9494 32.904 23.725C32.904 33.6234 24.313 38.0756 18.2126 38.0756V36.96C23.8288 36.961 31.7373 32.855 31.7373 23.7259Z" fill="url(#paint4_linear_339_1181)"/>
                    <path d="M18.1926 3.40197V2.00136L18.5499 2.28733C18.6504 2.36773 21.0496 4.29643 23.4872 7.0876C26.8028 10.8847 28.4839 14.288 28.4839 17.2034C28.4839 17.8119 28.4611 18.4213 28.3998 19.0271C28.3468 19.5506 28.2655 20.0714 28.1404 20.5839C28.0298 21.038 27.8845 21.4839 27.6963 21.9142C27.5684 22.2056 27.4305 22.488 27.255 22.7547C27.0915 23.0042 26.9097 23.2426 26.7123 23.4674C26.2921 23.947 25.7987 24.3335 25.2816 24.7127C25.0166 24.9073 24.7425 25.1083 24.4913 25.3193C21.6325 27.724 20.0327 30.7071 19.8344 33.9825L18.6979 35.2735L18.6997 34.6467C18.7088 30.7957 20.4575 27.2946 23.7558 24.5199C24.0354 24.2851 24.3241 24.0722 24.6046 23.8676C24.854 23.6839 25.1052 23.5012 25.3428 23.3038C25.4588 23.207 25.5712 23.1074 25.679 23.0023C25.732 22.9503 25.7841 22.8973 25.8334 22.8424C26.0088 22.6506 26.1642 22.4423 26.303 22.2248C26.4446 22.0028 26.5497 21.7707 26.6566 21.5314C27.1472 20.4295 27.3729 19.0454 27.3729 17.2034C27.3702 11.527 19.9276 4.87476 18.1926 3.40197Z" fill="url(#paint5_linear_339_1181)"/>
                    <path d="M51.6257 12.248L47.0657 12.392L46.2977 17.264H44.9777L45.3857 11.168H60.0017L60.2657 17.264H58.9937L58.3217 12.392L53.6897 12.248V27.752L57.1217 27.968V29H48.4817V27.968L51.6257 27.752V12.248ZM62.0107 27.992L63.9307 27.848V17.264L62.0827 16.856V15.776L65.1307 15.392H65.1787L65.6347 15.776V16.16L65.5867 17.984H65.6347C65.6667 17.952 65.8747 17.712 66.2587 17.264C66.6587 16.8 67.2427 16.36 68.0107 15.944C68.7947 15.528 69.5787 15.32 70.3627 15.32C70.6187 15.32 70.8587 15.352 71.0827 15.416V17.528C71.0187 17.48 70.8747 17.432 70.6507 17.384C70.4427 17.336 70.2187 17.312 69.9787 17.312C69.0667 17.312 68.2907 17.448 67.6507 17.72C67.0107 17.992 66.4187 18.328 65.8747 18.728V27.824L69.0667 28.016V29H62.0107V27.992ZM78.5514 29.264C76.6954 29.264 75.2634 28.632 74.2554 27.368C73.2634 26.088 72.7674 24.392 72.7674 22.28C72.7674 20.92 73.0314 19.712 73.5594 18.656C74.0874 17.6 74.8154 16.784 75.7434 16.208C76.6874 15.616 77.7434 15.32 78.9114 15.32C80.3354 15.32 81.4394 15.728 82.2234 16.544C83.0234 17.36 83.4554 18.536 83.5194 20.072C83.5194 21.064 83.4714 21.768 83.3754 22.184H74.8314C74.8314 23.864 75.2074 25.24 75.9594 26.312C76.7274 27.368 77.7994 27.896 79.1754 27.896C79.8474 27.896 80.5354 27.776 81.2394 27.536C81.9434 27.296 82.4874 27.008 82.8714 26.672L83.2554 27.56C82.7914 28.04 82.1114 28.448 81.2154 28.784C80.3354 29.104 79.4474 29.264 78.5514 29.264ZM81.3594 21.056C81.4074 20.72 81.4314 20.368 81.4314 20C81.4154 18.944 81.1594 18.104 80.6634 17.48C80.1834 16.856 79.4394 16.544 78.4314 16.544C76.2394 16.544 75.0474 18.048 74.8554 21.056H81.3594ZM85.8243 25.496C85.8243 23.944 86.5923 22.824 88.1283 22.136C89.6643 21.432 91.5763 21.056 93.8643 21.008V20.264C93.8643 19.448 93.7763 18.808 93.6003 18.344C93.4403 17.864 93.1523 17.52 92.7363 17.312C92.3203 17.088 91.7363 16.976 90.9843 16.976C90.1683 16.976 89.4243 17.104 88.7523 17.36C88.0963 17.6 87.4563 17.896 86.8323 18.248L86.3043 17.192C86.4803 17.032 86.8483 16.808 87.4083 16.52C87.9683 16.232 88.6083 15.976 89.3283 15.752C90.0483 15.528 90.7443 15.416 91.4163 15.416C92.5043 15.416 93.3603 15.568 93.9843 15.872C94.6243 16.176 95.0803 16.664 95.3523 17.336C95.6403 18.008 95.7843 18.912 95.7843 20.048V27.968H97.2723V28.856C96.3923 29.096 95.6483 29.216 95.0403 29.216C94.6563 29.216 94.3923 29.152 94.2483 29.024C94.1043 28.912 94.0323 28.64 94.0323 28.208V27.32C93.4563 27.832 92.8243 28.288 92.1363 28.688C91.4643 29.072 90.6963 29.264 89.8323 29.264C88.6803 29.264 87.7203 28.944 86.9523 28.304C86.2003 27.664 85.8243 26.728 85.8243 25.496ZM90.5523 27.848C91.0003 27.848 91.5363 27.704 92.1603 27.416C92.7843 27.128 93.3523 26.784 93.8643 26.384V22.136C91.9283 22.152 90.4563 22.44 89.4483 23C88.4563 23.56 87.9603 24.312 87.9603 25.256C87.9603 26.168 88.1923 26.832 88.6563 27.248C89.1203 27.648 89.7523 27.848 90.5523 27.848ZM103.192 29.264C102.344 29.264 101.704 29.072 101.272 28.688C100.84 28.288 100.624 27.584 100.624 26.576V17.096H98.7997V16.16C99.5997 15.984 100.064 15.856 100.192 15.776C100.432 15.648 100.608 15.4 100.72 15.032C100.816 14.792 100.944 14.36 101.104 13.736C101.264 13.112 101.384 12.624 101.464 12.272H102.568V15.68H106.816V17.096H102.568V24.872C102.568 25.8 102.6 26.456 102.664 26.84C102.728 27.208 102.856 27.448 103.048 27.56C103.24 27.672 103.576 27.728 104.056 27.728C104.52 27.728 105.04 27.664 105.616 27.536C106.192 27.408 106.624 27.272 106.912 27.128L107.224 28.04C106.856 28.328 106.248 28.608 105.4 28.88C104.552 29.136 103.816 29.264 103.192 29.264ZM111.598 13.16C110.734 13.16 110.302 12.704 110.302 11.792C110.302 11.328 110.438 10.952 110.71 10.664C110.982 10.36 111.35 10.208 111.814 10.208C112.294 10.208 112.638 10.344 112.846 10.616C113.054 10.872 113.158 11.192 113.158 11.576C113.158 12.072 113.022 12.464 112.75 12.752C112.494 13.024 112.118 13.16 111.622 13.16H111.598ZM110.83 17.264L108.958 16.856V15.776L112.246 15.392H112.294L112.774 15.776V27.8L114.862 27.968V29H108.718V27.968L110.83 27.776V17.264ZM118.539 27.104C118.715 27.376 119.083 27.616 119.643 27.824C120.203 28.032 120.803 28.136 121.443 28.136C123.395 28.136 124.371 27.416 124.371 25.976C124.371 25.32 124.099 24.792 123.555 24.392C123.011 23.976 122.083 23.52 120.771 23.024C119.475 22.56 118.531 22.008 117.939 21.368C117.347 20.728 117.051 19.872 117.051 18.8C117.051 18.112 117.259 17.512 117.675 17C118.107 16.488 118.675 16.096 119.379 15.824C120.099 15.536 120.875 15.392 121.707 15.392C122.523 15.392 123.203 15.464 123.747 15.608C124.307 15.752 124.859 15.928 125.403 16.136V18.992H124.227L123.795 17.24C123.683 17.032 123.395 16.856 122.931 16.712C122.483 16.568 121.987 16.496 121.443 16.496C120.675 16.496 120.051 16.672 119.571 17.024C119.091 17.36 118.851 17.816 118.851 18.392C118.851 18.904 118.971 19.328 119.211 19.664C119.451 20 119.747 20.272 120.099 20.48C120.451 20.672 120.939 20.896 121.563 21.152L122.019 21.344C122.931 21.696 123.667 22.032 124.227 22.352C124.787 22.656 125.251 23.064 125.619 23.576C125.987 24.072 126.171 24.696 126.171 25.448C126.171 26.632 125.715 27.568 124.803 28.256C123.907 28.928 122.707 29.264 121.203 29.264C120.515 29.264 119.731 29.152 118.851 28.928C117.971 28.704 117.315 28.48 116.883 28.256V25.232H118.179L118.539 27.104ZM134.309 29.264C132.453 29.264 131.021 28.632 130.013 27.368C129.021 26.088 128.525 24.392 128.525 22.28C128.525 20.92 128.789 19.712 129.317 18.656C129.845 17.6 130.573 16.784 131.501 16.208C132.445 15.616 133.501 15.32 134.669 15.32C136.093 15.32 137.197 15.728 137.981 16.544C138.781 17.36 139.213 18.536 139.277 20.072C139.277 21.064 139.229 21.768 139.133 22.184H130.589C130.589 23.864 130.965 25.24 131.717 26.312C132.485 27.368 133.557 27.896 134.933 27.896C135.605 27.896 136.293 27.776 136.997 27.536C137.701 27.296 138.245 27.008 138.629 26.672L139.013 27.56C138.549 28.04 137.869 28.448 136.973 28.784C136.093 29.104 135.205 29.264 134.309 29.264ZM137.117 21.056C137.165 20.72 137.189 20.368 137.189 20C137.173 18.944 136.917 18.104 136.421 17.48C135.941 16.856 135.197 16.544 134.189 16.544C131.997 16.544 130.805 18.048 130.613 21.056H137.117Z" fill="url(#paint6_linear_339_1181)"/>
                    <defs>
                    <linearGradient id="paint0_linear_339_1181" x1="13.3721" y1="10.1209" x2="13.3721" y2="35.2853" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_339_1181" x1="10.9088" y1="12.9176" x2="10.9088" y2="38.0756" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_339_1181" x1="13.0868" y1="2.00136" x2="13.0868" y2="35.2735" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_339_1181" x1="23.0532" y1="10.1209" x2="23.0532" y2="35.2853" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_339_1181" x1="25.5583" y1="12.9176" x2="25.5583" y2="38.0756" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_339_1181" x1="23.3383" y1="2.00136" x2="23.3383" y2="35.2735" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_339_1181" x1="92.5457" y1="2" x2="92.5457" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#283683"/>
                    <stop offset="1" stopColor="#3F1CA3"/>
                    </linearGradient>
                    </defs>
                </svg>
            </Link>
            <div className="lg:block hidden absolute left-1/2 -translate-x-1/2">
                <ul className="flex gap-x-8 text-text">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to=" ">Membership</Link></li>
                    <li><Link to="/author">Author</Link></li>
                    <li><Link to="/*">404 page</Link></li>
                </ul>
            </div>
            <div className="mt-4 lg:mt-0">
                <ul className="flex gap-x-8 lg:gap-x-4">
                    <li>
                        <button>
                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.49231 19.9999V10.8769H9.4413L9.88281 7.32157H6.49231V5.05157C6.49231 4.02223 6.76761 3.32068 8.18923 3.32068L10.0023 3.31981V0.139943C9.68861 0.0967723 8.61242 0 7.36035 0C4.74627 0 2.95662 1.65682 2.95662 4.69964V7.32167H0V10.877H2.95653V20L6.49231 19.9999Z" fill="#060B25"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 2.2201C0 1.57659 0.225232 1.0457 0.675676 0.627436C1.12612 0.209154 1.71172 2.28882e-05 2.43243 2.28882e-05C3.14029 2.28882e-05 3.71299 0.20593 4.15058 0.617784C4.60102 1.04249 4.82625 1.59589 4.82625 2.27802C4.82625 2.89578 4.60747 3.41056 4.16988 3.82242C3.71944 4.24713 3.12741 4.45948 2.39382 4.45948H2.37452C1.66666 4.45948 1.09396 4.24713 0.656371 3.82242C0.218784 3.39771 0 2.86359 0 2.2201ZM0.250965 19.112V6.21624H4.53668V19.112H0.250965ZM6.9112 19.112H11.1969V11.9112C11.1969 11.4608 11.2484 11.1133 11.3514 10.8687C11.5315 10.4312 11.805 10.0611 12.1718 9.75871C12.5386 9.45626 12.9987 9.30504 13.5521 9.30504C14.9936 9.30504 15.7143 10.2767 15.7143 12.2201V19.112H20V11.7182C20 9.8134 19.5496 8.36875 18.6486 7.38419C17.7477 6.39964 16.5573 5.90736 15.0772 5.90736C13.417 5.90736 12.1236 6.62164 11.1969 8.05022V8.08883H11.1776L11.1969 8.05022V6.21624H6.9112C6.93693 6.62807 6.94981 7.90863 6.94981 10.0579C6.94981 12.2072 6.93693 15.2252 6.9112 19.112Z" fill="#060B25"/>
                            </svg>   
                        </button>  
                    </li>
                    <li>
                        <button>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3634 0.00365V-4.95911e-05H14.3012L14.6438 0.0702427C14.8723 0.115877 15.0797 0.175681 15.266 0.249673C15.4524 0.323665 15.6327 0.409995 15.807 0.508644C15.9814 0.607294 16.1395 0.707812 16.2814 0.810161C16.422 0.91129 16.5483 1.01858 16.6601 1.13203C16.7707 1.24671 16.9432 1.27631 17.1776 1.22082C17.4121 1.16532 17.6646 1.08824 17.9351 0.989591C18.2056 0.890942 18.4731 0.779954 18.7376 0.656628C19.0021 0.533302 19.1632 0.455 19.2209 0.421704C19.2774 0.387187 19.3075 0.368689 19.3111 0.36621L19.3147 0.360661L19.3327 0.351412L19.3508 0.342163L19.3688 0.332914L19.3868 0.323665L19.3904 0.318115L19.3959 0.314416L19.4013 0.310716L19.4049 0.305167L19.4229 0.299617L19.4409 0.295918L19.4373 0.323665L19.4319 0.351412L19.4229 0.379159L19.4139 0.406906L19.4049 0.425404L19.3959 0.443902L19.3868 0.471649C19.3808 0.490146 19.3748 0.514804 19.3688 0.54564C19.3628 0.576476 19.3057 0.699784 19.1975 0.9156C19.0893 1.13142 18.954 1.3503 18.7917 1.57228C18.6294 1.79425 18.4839 1.96196 18.3553 2.07542C18.2254 2.19011 18.1395 2.27026 18.0974 2.3159C18.0553 2.36275 18.0042 2.40591 17.9441 2.44538L17.8539 2.50642L17.8359 2.51567L17.8179 2.52492L17.8143 2.53047L17.8088 2.53417L17.8034 2.53787L17.7998 2.54342L17.7818 2.55267L17.7638 2.56192L17.7602 2.56747L17.7547 2.57117L17.7493 2.57487L17.7457 2.58042L17.7421 2.58597L17.7367 2.58967L17.7313 2.59336L17.7277 2.59891H17.8179L18.3228 2.48793C18.6595 2.41393 18.9811 2.32453 19.2876 2.21971L19.7746 2.05322L19.8287 2.03473L19.8557 2.02548L19.8738 2.01623L19.8918 2.00698L19.9098 1.99773L19.9279 1.98848L19.9639 1.98293L20 1.97923V2.01623L19.991 2.01993L19.982 2.02548L19.9784 2.03103L19.9729 2.03473L19.9675 2.03843L19.9639 2.04398L19.9603 2.04953L19.9549 2.05322L19.9495 2.05692L19.9459 2.06247L19.9423 2.06802L19.9369 2.07172L19.9279 2.09022L19.9188 2.10872L19.9134 2.11242C19.911 2.11612 19.8347 2.22093 19.6844 2.42688C19.5341 2.63406 19.453 2.73887 19.4409 2.74135C19.4289 2.74505 19.4121 2.76355 19.3904 2.79684C19.37 2.83136 19.2426 2.96887 19.0081 3.20935C18.7737 3.44982 18.5441 3.66377 18.3192 3.85123C18.0932 4.03991 17.979 4.27174 17.9766 4.54675C17.973 4.82052 17.9591 5.13006 17.9351 5.47535C17.911 5.82065 17.866 6.19368 17.7998 6.59447C17.7337 6.99527 17.6315 7.44847 17.4932 7.95407C17.355 8.45968 17.1867 8.95296 16.9883 9.43391C16.7899 9.91486 16.5825 10.3465 16.3661 10.7288C16.1497 11.1111 15.9513 11.4348 15.771 11.6999C15.5906 11.965 15.4073 12.2148 15.2209 12.4491C15.0346 12.6834 14.7989 12.9473 14.514 13.2408C14.2278 13.5331 14.0716 13.6934 14.0451 13.7217C14.0175 13.7489 13.8996 13.85 13.6916 14.0251C13.4848 14.2014 13.2624 14.3778 13.0243 14.5541C12.7875 14.7293 12.5699 14.8754 12.3715 14.9926C12.1731 15.1097 11.9339 15.2435 11.6537 15.394C11.3748 15.5456 11.073 15.6862 10.7484 15.8157C10.4238 15.9452 10.0812 16.0654 9.72047 16.1764C9.35978 16.2874 9.01113 16.3737 8.67448 16.4354C8.33785 16.497 7.95612 16.5495 7.52931 16.5926L6.88909 16.6574V16.6666H5.71686V16.6574L5.56357 16.6481C5.46139 16.642 5.37722 16.6358 5.31109 16.6296C5.24498 16.6235 4.99549 16.5895 4.56267 16.5279C4.12985 16.4662 3.79021 16.4046 3.54373 16.3429C3.29728 16.2812 2.93057 16.1641 2.44364 15.9914C1.95672 15.8188 1.54013 15.6443 1.19387 15.4679C0.848819 15.2928 0.632408 15.1818 0.544635 15.135C0.45807 15.0894 0.360685 15.0326 0.25248 14.9648L0.0901713 14.8631L0.0865825 14.8575L0.0811542 14.8538L0.0757439 14.8501L0.0721371 14.8446L0.0541028 14.8353L0.0360685 14.8261L0.0324797 14.8205L0.0270514 14.8168L0.0216411 14.8131L0.0180343 14.8076L0.0144454 14.802L0.00901713 14.7983H0V14.7613L0.0180343 14.765L0.0360685 14.7706L0.117223 14.7798C0.171326 14.786 0.318611 14.7952 0.559062 14.8076C0.799531 14.8199 1.055 14.8199 1.32552 14.8076C1.59603 14.7952 1.87257 14.7675 2.15509 14.7243C2.43764 14.6812 2.77127 14.6072 3.156 14.5024C3.54074 14.3975 3.89421 14.273 4.21643 14.1287C4.53744 13.9832 4.76586 13.8747 4.90173 13.8031C5.03638 13.7328 5.24197 13.6021 5.51849 13.411L5.93327 13.1243L5.93688 13.1187L5.94229 13.115L5.94772 13.1113L5.95131 13.1058L5.95491 13.1002L5.96032 13.0965L5.96575 13.0928L5.96934 13.0873L5.98738 13.0817L6.00541 13.078L6.00902 13.0595L6.01443 13.041L6.01986 13.0373L6.02344 13.0318L5.87917 13.0225C5.78299 13.0164 5.68981 13.0102 5.59964 13.004C5.50947 12.9979 5.36821 12.9701 5.17583 12.9208C4.98348 12.8714 4.77609 12.7975 4.55365 12.6988C4.33124 12.6002 4.11482 12.483 3.90442 12.3473C3.69403 12.2117 3.54193 12.0988 3.44815 12.0088C3.35558 11.92 3.23535 11.7943 3.08747 11.6315C2.94079 11.4675 2.81335 11.2991 2.70514 11.1265C2.59693 10.9538 2.49354 10.7546 2.39497 10.529L2.24527 10.1923L2.23625 10.1646L2.22723 10.1368L2.22182 10.1183L2.21821 10.0998L2.24527 10.1035L2.27232 10.1091L2.47069 10.1368C2.60296 10.1553 2.81035 10.1615 3.09288 10.1553C3.37542 10.1492 3.57078 10.1368 3.67899 10.1183C3.7872 10.0998 3.85333 10.0875 3.87737 10.0813L3.91344 10.0721L3.95852 10.0628L4.00361 10.0536L4.00721 10.048L4.01262 10.0443L4.01805 10.0406L4.02164 10.0351L3.98557 10.0258L3.9495 10.0166L3.91344 10.0073L3.87737 9.9981L3.8413 9.98885C3.81726 9.98269 3.77518 9.97035 3.71506 9.95186C3.65495 9.93336 3.49264 9.86553 3.22813 9.74838C2.96364 9.63123 2.75324 9.51715 2.59693 9.40617C2.44024 9.29486 2.29084 9.17312 2.14968 9.04175C2.00902 8.90857 1.85454 8.73715 1.6862 8.52751C1.51789 8.31787 1.36761 8.07431 1.23535 7.79684C1.1031 7.51937 1.00391 7.25424 0.937782 7.00143C0.871916 6.75011 0.828461 6.49316 0.807953 6.23376L0.775473 5.84531L0.793508 5.84901L0.811542 5.85456L0.829576 5.86381L0.84761 5.87305L0.865645 5.8823L0.883679 5.89155L1.16321 6.02104C1.34958 6.10737 1.58101 6.18136 1.85753 6.24301C2.13407 6.30467 2.29937 6.33859 2.35347 6.34475L2.43463 6.354H2.59693L2.59335 6.34845L2.58792 6.34475L2.58251 6.34105L2.5789 6.3355L2.57531 6.32995L2.56988 6.32625L2.56447 6.32255L2.56087 6.31701L2.54283 6.30776L2.5248 6.29851L2.52121 6.29296L2.51578 6.28926L2.51037 6.28556L2.50676 6.28001L2.48873 6.27076L2.47069 6.26151L2.46711 6.25596C2.4635 6.25348 2.41179 6.21403 2.31199 6.13757C2.2134 6.05988 2.11001 5.95938 2.0018 5.83606C1.8936 5.71273 1.78539 5.58325 1.67719 5.4476C1.56878 5.31164 1.47223 5.16618 1.38864 5.0129C1.30449 4.85876 1.21551 4.66266 1.12173 4.42466C1.02916 4.18789 0.958828 3.94927 0.91073 3.70879C0.862651 3.46832 0.8356 3.23093 0.829576 2.99662C0.823571 2.76231 0.829576 2.56192 0.84761 2.39544C0.865645 2.22896 0.901713 2.04089 0.955816 1.83125C1.00992 1.62161 1.08808 1.39964 1.19026 1.16532L1.34355 0.813861L1.35257 0.786114L1.36159 0.758367L1.36702 0.754667L1.3706 0.749118L1.37421 0.743569L1.37962 0.739869L1.38505 0.743569L1.38864 0.749118L1.39225 0.754667L1.39766 0.758367L1.40308 0.762067L1.40667 0.767616L1.41028 0.773165L1.41569 0.776865L1.42471 0.795363L1.43372 0.813861L1.43915 0.81756L1.44274 0.82311L1.6862 1.10058C1.84851 1.28556 2.04088 1.49213 2.2633 1.72026C2.48573 1.9484 2.60896 2.06678 2.633 2.07542C2.65706 2.08528 2.68711 2.11364 2.72317 2.16051C2.75924 2.20615 2.87948 2.31529 3.08386 2.48793C3.28826 2.66057 3.55576 2.86098 3.88638 3.08911C4.21702 3.31725 4.58371 3.54231 4.98647 3.76429C5.38925 3.98626 5.82207 4.18665 6.28494 4.36547C6.74783 4.54429 7.07244 4.66144 7.25879 4.71693C7.44516 4.77243 7.76375 4.84333 8.21461 4.92966C8.66546 5.01599 9.00512 5.07148 9.23354 5.09614C9.46198 5.1208 9.61829 5.13498 9.70243 5.13868L9.82867 5.14238L9.82509 5.11464L9.81966 5.08689L9.78359 4.85567C9.75955 4.70152 9.74752 4.48571 9.74752 4.20824C9.74752 3.93077 9.76857 3.67489 9.81064 3.44057C9.85273 3.20626 9.91585 2.96887 10 2.7284C10.0842 2.48793 10.1665 2.29492 10.2471 2.14941C10.3288 2.00513 10.4358 1.8405 10.5681 1.65552C10.7003 1.47054 10.8717 1.2794 11.0821 1.08208C11.2925 0.884764 11.5329 0.709033 11.8034 0.554889C12.0739 0.400746 12.3234 0.28358 12.5518 0.203428C12.7803 0.123276 12.9727 0.0708531 13.1289 0.0461953C13.2852 0.0215375 13.3634 0.00734959 13.3634 0.00365Z" fill="#060B25"/>
                            </svg> 
                        </button>       
                    </li>
                </ul>
            </div>   
        </div>

        <div className="flex justify-between lg:justify-center mt-6 mx-[6%] lg:mx-0 border-b lg:border-0 pb-10 lg:pb-0">
            <ul className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 text-text lg:hidden h-fit text-sm md:text-base">
                <li><Link to='/'>Home</Link></li>
                <li><Link >Membership</Link></li>
                <li><Link to="/author">Author</Link></li>
                <li><Link to="/*">404 page</Link></li>
            </ul>
   
            <ul className="text-text flex flex-col lg:flex-row justify-between gap-y-6 lg:gap-x-8 h-fit text-sm md:text-base text-right">
                <li><Link to='/terms-conditions'>Terms & Conditions</Link></li>
                <li><Link to='/terms-conditions'>Privacy Policy</Link></li>
                <li><Link to='/terms-conditions'>Payment method</Link></li>
            </ul>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between mx-8 pb-6 mt-5 lg:mt-8">
            <p className="text-sm text-text text-center">© Treatise- Copyright & reserved by Intelli Digital</p>
            <p className="text-sm text-text mt-4 lg:mt-0">Powerd by Intelli Digital</p>
        </div>
    </footer>
  )
}

export default Footer