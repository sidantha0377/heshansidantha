import React from 'react'
import { FaGithubSquare, FaMediumM, FaLinkedin } from "react-icons/fa"
export default function Fotter() {
    return (

        <div className='flex flex-col gap-3'>
            <div className="flex flex-row gap-4">
                <a href="https://github.com/sidantha0377">
                    <FaGithubSquare size={40} />
                </a>
                <a href="https://medium.com/@heshsid">
                    <FaMediumM size={40} />
                </a>
                <a href="https://www.linkedin.com/in/heshan-sidantha-5b9925296/">
                    <FaLinkedin size={40} />
                </a>
            </div>
            <div>
                <p >Designed & Built by Heshan Sidantha<br />2026 </p>
            </div>
        </div>
    )
}
