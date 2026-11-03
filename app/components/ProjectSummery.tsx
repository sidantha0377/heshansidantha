import React from 'react'


const ProDetail = [
    { name: "Neuromorphic Smart Sensor for Autonomous Underwater Vehicles", detail: "A neuromorphic-inspired perception system combining a software-based Spiking Neural Network for obstacle detection with a tether based geometric model for 3D positioning, delivering competitive accuracy at a fraction of the computational cost.", imgsrc: "img/nssf.jpg" },
    { name: "Secure X Smart Locker System", detail: "The SmartSecure Locker System is an IoT-based solution for secure storage in shared spaces like universities, gyms, and offices. It features real-time locker availability, biometric access, and alternative location suggestions when lockers are full. Users can manage lockers via a mobile app, ensuring convenience and security.", imgsrc: "img/securex.jpg" },
    { name: "FoodBuddy – Food Waste Reduction Platform", detail: "Food Buddy is a solution for the food wastage of restaurants. We provide a platform, where the restaurants can display their unsold food items with attractive discounts and users can see those advertisements from nearby restaurants.", imgsrc: "img/foodbuddy.jpg" }
]
export default function Project() {
    return (
        <div>
            <h2 className="text-3xl font-bold pb-2 ">Projects</h2>
            {ProDetail.map((project) => (
                <div className="rounded-xl border border-transparent p-6 transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#002d22]/60 hover:shadow-lg hover:shadow-emerald-950/50 gap-2" >
                    <div className='flex flex-row gap-2  '>
                        <div className="flex-shrink-0 w-full sm:w-40 h-28 overflow-hidden rounded-lg">
                            <img
                                src={project.imgsrc}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold ">{project.name}</h1>
                            <div className="text-xl gap-2">
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
