import { trafficSources } from "../data/data"

export function TrafficSource(){
    return (
        <>
        <div className="bg-white/10 backdrop border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
        <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>
        <div className="grid grid-cols-2 gap-6"> 
            {trafficSources.map((source, index)=>{
               const SourceIcon = source.icon

            return (
            <div className="text-center group" key={index}>
                <div className="relative mb-4">
                  <svg className="w-24 h-24 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                   <circle 
                     cx="48"
                     cy="48"
                     r= "40"
                     stroke ="rgba(255,255,255,0.1)"
                     strokeWidth ="8"
                     fill = "none"
                   />
                   <circle 
                     cx="48"
                     cy="48"
                     r= "40"
                     stroke={source.color}
                     strokeWidth ="8"
                     fill = "none"
                     strokeDasharray={`${2.5 * source.value} 251`}
                     strokeLinecap="round"
                     transform="rotate(-90 48 48)"
                     className="transition-all duration-1000"
                   />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                     {<SourceIcon className="w-6 h-6" style={{color: source.color}}/>}
                    </div>

                  </div>
                </div>

                <p className="text-white font-semibold text-sm">{source.name}</p>
                <p className="text-2xl font-bold text-white">{source.value}%</p>
             </div>
            )})
        }
             {/* <div className="text-center group">
                <div className="relative mb-4">
                  <svg className="w-24 h-24 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                   <circle 
                     cx="48"
                     cy="48"
                     r= "40"
                     stroke ="rgba(255,255,255,0.1)"
                     strokewidth ="8"
                     fill = "none"
                   />
                   <circle 
                     cx="48"
                     cy="48"
                     r= "40"
                     strokewidth ="8"
                     fill = "none"
                     strokeLinecap="round"
                     transform="rotate(-90 48 48)"
                     className="transition-all duration-1000"
                   />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                     Icon
                    </div>

                  </div>
                </div>

                <p className="text-white font-semibold text-sm">Source Name</p>
                <p className="text-2xl font-bold text-white">Source Value</p>
             </div> */}
        </div>
        </div>
        </>
    )
}