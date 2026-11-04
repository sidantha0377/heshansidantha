import React from 'react'
import { FaGithubSquare, FaMediumM, FaLinkedin, FaInstagramSquare } from "react-icons/fa"
export default function Footer() {
    return (

        <div className='flex flex-col gap-3'>
            <div className="flex flex-row gap-4" >
                <a href="https://github.com/sidantha0377" className='transition-colors hover:text-emerald-300  focus-visible:text-emerald-300'>
                    <FaGithubSquare size={40} />
                </a>
                <a href="https://medium.com/@heshsid" className='transition-colors hover:text-emerald-300  focus-visible:text-emerald-300'>
                    <FaMediumM size={40} />
                </a>
                <a href="https://www.linkedin.com/in/heshan-sidantha-5b9925296/" className='transition-colors hover:text-emerald-300  focus-visible:text-emerald-300'>
                    <FaLinkedin size={40} />

                </a>
                <a href="https://www.instagram.com/heshan_sidantha" className='transition-colors hover:text-emerald-300  focus-visible:text-emerald-300'>
                    <FaInstagramSquare size={40} />
                </a>
            </div>
            <div>
                <p >Designed & Built by Heshan Sidantha<br />2026 </p>
            </div>
        </div>
    )
}
