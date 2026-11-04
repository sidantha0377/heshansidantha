import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { projectsdeep } from "../data/projects";

export default function Projects() {
    return (

        <div>
            <div className="sticky top-0 z-10 flex min-h-[65svh] flex-col items-center justify-center px-5 py-10 text-center lg:static lg:min-h-0 lg:p-100">
                <h1 className="text-center text-4xl font-bold sm:text-9xl">PROJECTS</h1>
                <p className="mt-4 text-center text-base leading-relaxed text-emerald-50/80 sm:text-xl">
                    A selection of projects I have worked on, from intelligent sensing systems to
                    practical platforms for everyday problems.
                </p>
            </div>
            <div className="relative z-20 grid gap-5 bg-gradient-to-r from-[#001a13] to-[#004c39] p-4 sm:gap-6 sm:p-20 lg:z-auto lg:bg-none md:grid-cols-3">
                {projectsdeep.map((project, index) => (
                    <SpotlightCard
                        key={project.name}
                        className="overflow-hidden rounded-2xl border border-emerald-100/10 bg-[#002d22]/45 transition-colors hover:border-emerald-300/40"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={project.imgsrc}
                                alt={project.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {
                                project.ongoing ? <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-sm text-white backdrop-blur">
                                    On Going
                                </span> : <></>
                            }

                        </div>
                        <div className="p-5 sm:p-6">
                            <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                                {project.name}
                            </h2>
                            <p className="mt-3 leading-relaxed text-emerald-50/80">
                                {project.detail}
                            </p>
                        </div>
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                            <a
                                href={project.projectPage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition-all hover:border-emerald-300/60 hover:bg-emerald-400/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                            >
                                View project
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>

    )
}
