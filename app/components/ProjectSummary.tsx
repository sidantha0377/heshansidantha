import React from 'react'
import { GraduationCap } from 'lucide-react';
import SpotlightCard from "./SpotlightCard";
import { projects } from "../data/projects";
export default function Project() {
    return (
        <div id="projects" className="scroll-mt-4 pt-4 sm:pt-8 lg:pt-30">
            <h2 className="text-3xl font-bold pb-2 ">Projects</h2>
            <div className='flex flex-col gap-8 pt-4 pb-4'>
                {projects.map((project) => (
                    <SpotlightCard key={project.name} className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#002d22]/60 hover:shadow-lg hover:shadow-emerald-950/50 sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="h-48 w-full flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-40">
                                <img
                                    src={project.imgsrc}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg font-bold sm:text-xl">{project.name}</h3>
                                <div className="gap-2 text-base sm:text-lg">
                                    <p>{project.summary}</p>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))
                }
            </div >

            <div className=' pt-2 flex justify-end w-full'>
                <a
                    href="/projects"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/40 active:scale-95"
                >
                    <span>Learn More</span>
                    <GraduationCap className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>



        </div>
    )
}
