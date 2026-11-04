import React from 'react'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
export default function page() {
    return (
        <div className='flex flex-col justify-center text-white '>
            <Projects />
            <Footer />
        </div>
    )
}
