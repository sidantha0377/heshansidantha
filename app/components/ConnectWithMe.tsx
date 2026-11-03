import React from 'react'
import { Send } from 'lucide-react';

export default function ConnectWithMe() {
    return (
        <div>
            <h2 className='text-3xl font-bold'>
                Connect with me
            </h2>
            <p className="pt-[2%] pb-[2%] text-base   sm:text-xl" >
                I'm currently open to work and looking for new opportunities where I can
                grow and make an impact. Whether you have a role in mind or just want to
                say hello, my inbox is always open.
            </p>
            <button className='flex '>
                Connect <Send />
            </button>

        </div>
    )
}
