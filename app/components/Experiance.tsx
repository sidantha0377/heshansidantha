import { TbBrandNextjs, TbBrandAzure, TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { SiApachekafka } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
export default function Experiance() {
    return (
        <div>
            <h2 className="text-3xl font-bold pb-2 ">Experiance</h2>

            <div className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#002d22]/60 hover:shadow-lg hover:shadow-emerald-950/50 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
                    <div className="sm:w-1/4 sm:min-w-[10%]">
                        APR - OCT 2026
                    </div>
                    <div>
                        <h1 className="text-xl font-bold " > Software Enginner Intern </h1> <a href="https://factnsoftware.com/">FACTn Software</a>
                        <div className="text-xl gap-2">
                            <p >During my internship I worked mainly on cv-collector, a multi-tenant recruitment process automation system.
                                I developed and tested new features for the platform and built a job-alerting service as a new feature of my own.</p>
                            <p> Alongside this, I introduced a new multi-channel notification service supporting push, SMS, email and in-app notifications.
                                The old system only supported email. I used Kafka and Redis to build and manage the notification queues.</p>
                            <p>I also migrated the database from non-relational Azure Table Storage to PostgreSQL, and collaborated with the
                                team on the Docker-based deployment process. </p>
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

            </div >

        </div >
    );
}