import React from 'react'


const ProDetail = [
    { name: "Neuromorphic Smart Sensor for Autonomous Underwater Vehicles", detail: "A neuromorphic-inspired perception system combining a software-based spiking neural network for obstacle detection with a tether-based geometric model for 3D positioning, delivering competitive accuracy at a fraction of the computational cost.", imgsrc: "img/nssf.jpg" },
    { name: "SecureX Smart Locker System", detail: "This IoT-based system provides secure storage in shared spaces such as universities, gyms, and offices. It offers real-time locker availability, biometric access, and alternative location suggestions when lockers are full. Users can manage their lockers through a mobile app.", imgsrc: "img/securex.jpg" },
    { name: "FoodBuddy – Food Waste Reduction Platform", detail: "FoodBuddy helps restaurants reduce food waste by listing unsold items at discounted prices. Users can discover these offers from nearby restaurants.", imgsrc: "img/foodbuddy.jpg" }
]
export default function Project() {
    return (
        <div>
            <h2 className="text-3xl font-bold pb-2 ">Projects</h2>
            {ProDetail.map((project) => (
                <div key={project.name} className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#002d22]/60 hover:shadow-lg hover:shadow-emerald-950/50 sm:p-6">
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
                                <p>{project.detail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }


        </div>
    )
}
