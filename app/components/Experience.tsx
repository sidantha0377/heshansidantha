import { TbBrandNextjs, TbBrandAzure, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiApachekafka } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { ArrowUpRight } from 'lucide-react';
import SpotlightCard from "./SpotlightCard";
export default function Experience() {
    return (
        <div id="experience" className="scroll-mt-4 pt-4 sm:pt-8 lg:pt-30">
            <h2 className="text-3xl font-bold pb-2 ">Experience</h2>

            <SpotlightCard className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#002d22]/60 hover:shadow-lg hover:shadow-emerald-950/50 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                    <div className="sm:w-1/4 sm:min-w-[10%]">
                        Apr - Oct 2026
                    </div>
                    <div>

                        <div className="flex flex-wrap items-baseline gap-x-2">
                            <h1 className="text-xl font-bold">Software Engineering Intern</h1>
                            <span className="self-center" aria-hidden="true">|</span>
                            <a
                                href="https://factnsoftware.com/"
                                className="inline-flex items-center gap-1 transition-colors hover:text-emerald-300 focus-visible:text-emerald-300"
                            >
                                FACTn Software
                                <ArrowUpRight className="h-4 w-4 self-center" />
                            </a>
                        </div>

                        <div className="text-xl gap-2">
                            <p>During my internship, I worked primarily on CV Collector, a multi-tenant recruitment process automation system. I developed and tested platform features and independently built a job alert service.</p>
                            <p>In addition, I introduced a multi-channel notification service that supports push, SMS, email, and in-app notifications. The previous system supported email only. I used Kafka and Redis to build and manage the notification queues.</p>
                            <p>I also migrated the database from Azure Table Storage to PostgreSQL and collaborated with the team on the Docker-based deployment process.</p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-4 pt-3">
                            <a aria-label="Next.js">
                                <TbBrandNextjs size={40} />
                            </a>
                            <a aria-label="Azure">
                                <TbBrandAzure size={40} />
                            </a>
                            <a aria-label="Apache Kafka">
                                <SiApachekafka size={40} />
                            </a>
                            <a aria-label="React">
                                <TbBrandReactNative size={40} />
                            </a>
                            <a aria-label="TypeScript">
                                <TbBrandTypescript size={40} />
                            </a>
                            <a aria-label="PostgreSQL">
                                <BiLogoPostgresql size={40} />
                            </a>
                        </div>

                    </div>
                </div>

            </SpotlightCard>
            <div className="flex pt-2  w-full">
                <a
                    href="cvs/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/40 active:scale-95"
                >
                    <span>View Full Resume</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>

        </div >
    );
}