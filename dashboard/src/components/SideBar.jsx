import { Sparkle, X, Crown, Rocket, MenuIcon } from "lucide-react";
import { MENU_ICONS } from "../data/data";

// export function SideBar({sidebar, setSidebar, activeTab,setActiveTab}) {
//   return (
//     <>
//       <div
//         className={`${sidebar ? "translate-x-0" :"-translate-x-full"} fixed inset-y-0 left-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0`}
//       >
//         <div className="flex items-center justify-between h-20 px-8 border-b border-white/20">
//           <div className="flex items-center space-x-4">
//           <div className="relative">
//            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
//             <Sparkle className="h-7 w-7 text-white"/>
//            </div>
//           </div>
//           <div>
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
//            NexusFlow
//           </h1>
//           <p className="text-xs text-white/60 font-medium">PREMIUM SUIT</p>
//           </div>
//           </div>
//           <button className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
//           onClick={()=>setSidebar(false)}
//           >
//           <X className="h-6 w-6"/>
//           </button>
//         </div>

//         <nav className="mt-8 px-6 space-y-2">
//             {/* <button className="w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden">
//               {/* <div className={`absolute inset-0 bg-gradient-to-r opacity-30 rounded-2xl`}>
//               </div> }
             
//               <div className={`p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300relative z-10`}>
//                 Item Icon
//               </div>
//               <span className="font-semibold relative z-10">Item label</span>
//             </button> */}
//              {MENU_ICONS.map((item)=>{
//                return (
//                  <button className="w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden">
//               {/* <div className={`absolute inset-0 bg-gradient-to-r opacity-30 rounded-2xl`}>
//               </div> */}
             
//               <div className={`p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300relative z-10`}>
//                 Item Icon
//               </div>
//               <span className="font-semibold relative z-10">Item label</span>
//             </button> 
//                )
//              })}
//         </nav>

//         <div className="absolute bottom-0 left-0 right-0 p-6">
//             <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
//             <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-10 -translate-y-10"></div>
//             <div className="relative">
//                 <div className="flex items-center space-x-3 mb-4">
//                     <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
//                         <Crown className="h-6 w-6 text-white"/>
//                     </div>
//                     <div>
//                         <h3 className="text-white font-bold">Ultra Pro</h3>
//                         <p className="text-white/60 text-xs">Advance Analytics</p>
//                     </div>
//                 </div>
//                 <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                     <Rocket  className="w-4 h-4 text-white inline mr-2"/>
//                     Upgrade Now
//                     </button>
//             </div>
//             </div>
//         </div>

//       </div>
//     </>
//   );
// }

export function SideBar({ sidebar, setSidebar, activeTab, setActiveTab }) {
  return (
    <>
      <div
        className={`${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-70 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-20 px-8 border-b border-white/20 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkle className="h-7 w-7 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                NexusFlow
              </h1>
              <p className="text-xs text-white/60 font-medium">PREMIUM SUIT</p>
            </div>
          </div>
          <button
            className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setSidebar(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>


        {/* ✅ Scrollable Nav Section */}
        <nav className="flex-1 mt-6 px-6 space-y-2 overflow-y-auto pb-48">
          {MENU_ICONS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {setActiveTab(item.id); setSidebar(false)}}
                className={`w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                  activeTab === item.id ? "bg-white/10" : ""
                }`} 
              >
                {activeTab === item.id && (
                  <div className={`absolute inset-0 bg-gradient-to-r opacity-30 ${item.gradient} rounded-2xl`}></div>
                )}
                <div
                  className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient} mr-4 group-hover:scale-110 transition-all duration-300 relative z-10`}
                >
                   <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold relative z-10 text-white">
                   {item.label}
                 </span>
               </button>
            );
          })}
        </nav>

        {/* ✅ Fixed Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20">
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-10 -translate-y-10"></div>
            <div className="relative">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Ultra Pro</h3>
                  <p className="text-white/60 text-xs">Advanced Analytics</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Rocket className="w-4 h-4 text-white inline mr-2" />
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

