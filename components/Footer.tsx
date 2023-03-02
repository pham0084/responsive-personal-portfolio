import React from "react";
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'


function Footer() {
    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="text-gray-800 font-bold text-3xl pb-6">
                            PhamVietHung's <span className="text-[#5C9EAD]">Portfolio</span>
                        </p>
                        <div className="flex gap-6 pb-5">
                            <SocialIcon className="icon-hover" target="_blank" url='https://www.linkedin.com/in/vn-phamviethung/' fgColor='gray' bgColor='transparent' />
                            <SocialIcon className="icon-hover" url='https://github.com/pham0084' target="_blank" fgColor='gray' bgColor='transparent' />
                            <SocialIcon className="icon-hover" url='https://www.facebook.com/PhamVietHungHL' target="_blank" fgColor='gray' bgColor='transparent' />
                            <SocialIcon className="icon-hover" url='https://www.youtube.com/@hung.920' target="_blank" fgColor='gray' bgColor='transparent' />
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-800 font-bold text-2xl pb-4">Content</p>
                        <Link href="#about">
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#5C9EAD] cursor-pointer">
                                <a href="#about">About</a>
                            </li>
                        </Link>

                        <Link href="#experience">
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#5C9EAD] cursor-pointer">
                                <a href="#experience">Experience</a>
                            </li>
                        </Link>

                        <Link href="#skills">
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#5C9EAD] cursor-pointer">
                                <a href="#skills">Skills</a>
                            </li>
                        </Link>

                        <Link href="#projects">
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#5C9EAD]cursor-pointer">
                                <a href="#projects">Projects</a>
                            </li>
                        </Link>
                        <Link href="#contact">
                            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-[#5C9EAD] cursor-pointer">
                                <a href="#projects">Contact</a>
                            </li>
                        </Link>


                    </ul>
                </div>


            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    © 2022-2023 All rights reserved | Build by{" "}
                    <span className="hover:text-[#5C9EAD] font-semibold cursor-pointer">
                        
                        <Link href='https://www.youtube.com/watch?v=FvOpPeKSf_4&ab_channel=88rising'>Pham Viet Hung{" "}</Link>
                    </span>
                </h1>
            </div>
        </>
    );
}

export default Footer;