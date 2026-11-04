import React from 'react'
import { Send } from 'lucide-react';

export default function ConnectWithMe() {
    return (
        <div id="contact" className="scroll-mt-4 pt-4 sm:pt-8 lg:pt-30">
            <h2 className='text-3xl font-bold'>
                Connect With Me
            </h2>
            <p className="pt-[2%] pb-[2%] text-base   sm:text-xl" >
                I'm currently open to work and looking for new opportunities where I can
                grow and make an impact. Whether you have a role in mind or just want to
                say hello, my inbox is always open.
            </p>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=heshansidantha357@gmail.com&su=Hello%20Heshan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/40 active:scale-95"
            >
                <span>Connect</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

        </div>
    )
}
