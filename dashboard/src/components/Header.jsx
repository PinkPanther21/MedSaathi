import { Menu, Search, Bell,ChevronDown } from "lucide-react"

export function Header({activeTab, setSidebar, currentTime}){
    return (
        <>
        <div className="bg-white/10 backdrop-blur-xl border-b border-white/20 px-8 py-6">
        <div className="flex items-center justify-between">
         <div className="flex items-center space-x-6">
            <button className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
            onClick={()=> setSidebar(true)}
            >
                <Menu className="w-6 h-6 "/>
            </button>
            <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent capitalize">{activeTab}</h2>
            <p className="text-white/60 text-sm mt-1">{currentTime.toLocaleDateString("en-US",{
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            })}</p>
         </div>
         </div>
         
        <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 w-96 group hover:bg-white/20 transition-all duration-300">
            <Search className="h-5 w-5 text-white/50 mr-3 group-hover:text-white/70 transition-all"/>
            <input type="text" className="bg-transparent text-white placeholder-white/50 focus:outline-none flex-1"
            placeholder="Search Anything with AI..."
            />
            </div>
            <div className="flex items-center space-x-2">
              <button className="relative p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300 group">
              <Bell className="h-6 w-6"/>
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>

              <div className="flex items-center space-x-3 ml-4 bg-white/10 backdrop-blur-2xl rounded-2xl px-4 py-2 border borderwhite/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
               <div className="hidden md:block text-right">
               <p className="text-white font-semibold">Alex Morgan</p>
               <p className="text-white/60 text-xs">System Administrator</p>
               </div>
               <div className="relative">
                <div className="h-12 w-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div className="absolute -bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                <ChevronDown className="h-4 w-4 text-white/60 group-hover:text-white transition-all"/>
               </div>
              </div>

            </div>
        </div>

        </div>
        </div>
        </>
    )
}