import React, { useState,useEffect } from "react";
import "./App.css";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { MetricCard } from "./components/MetricCard";
import { Activity, DollarSign, Target, TargetIcon, Users, Zap } from "lucide-react";
import { RevenueAnalystics } from "./components/RevenueAnalytics";
import { LiveActivityFeed } from "./components/LiveActivityFeed";
import { TrafficSource } from "./components/TrafficSource";
import { SystemPerformance } from "./components/SystemPerformance";
import { BarChart3, PieChart } from "lucide-react";
import { MENU_ICONS } from "./data/data";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(()=>{
    const timer = setInterval(()=> setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  },[])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="flex min-h-screen relative z-10">
          <SideBar
            sidebar={sidebar}
            setSidebar={setSidebar}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="flex-1 flex flex-col overflow-hidden">
           <Header activeTab={activeTab} setSidebar={setSidebar} currentTime={currentTime}/>

          <main className="flex-1 overflow-hidden p-8 space-y-8">
            {activeTab === "overview" && (
              <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <MetricCard 
                title="Total Revenue"
                value="$2.4M"
                change={3.21}
                icon={DollarSign}
                gradient="from-emerald-400 to-cyan-400"
                subtitle="This quarter"
                trend={[45, 52, 48, 61, 55, 67]}
                />

                <MetricCard 
                title="Active Users"
                value="84.2K"
                change={18.7}
                icon={Users}
                gradient="from-blue-400 to-purple-400"
                subtitle="Monthly Active"
                trend={[38, 42, 39, 48, 45, 52]}
                />

                <MetricCard 
                title="Conversation Rate"
                value="12.8%"
                change={25.4}
                icon={Target}
                gradient="from-purple-400 to-pink-400"
                subtitle="Last 30 Days"
                trend={[28, 32, 35, 41, 38, 44]}
                />

                <MetricCard 
                title="Performance Score"
                value="98.5%"
                change={-2.1}
                icon={Zap}
                gradient="from-orange-400 to-red-400"
                subtitle="Sytsem health"
                trend={[72, 88, 95, 89, 90, 98]}
                />
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
             <RevenueAnalystics />

             <LiveActivityFeed />
           </div>

           <div className="grid grid-cols- lg:grid-cols-2 gap-8">
            <TrafficSource />
            <SystemPerformance />
           </div>
              </>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all
                duration-500">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <BarChart3  className="h-10 w-10 text-white"/>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">Advance Analytics Suite</h2>
                  <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
                  Unlock powerful insights with AI-drive analytics, predictive modeling, and real-time data visualisation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                     <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <PieChart className="w-8 h-8 text-white"/>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Data Insights</h3>
                      <p className="text-white/60">
                        Deep dive into your data with interactive visualisation and custom reports.
                      </p>
                     
                    </div>

                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                     <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <TargetIcon className="w-8 h-8 text-white"/>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Predictive AI</h3>
                      <p className="text-white/60">
                       Leverage machine learning to predict trends and optimize performance
                      </p>
                     
                    </div>

                    <div className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                     <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                      <Activity className="w-8 h-8 text-white"/>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3">Real time monitoring</h3>
                      <p className="text-white/60">
                       Monitor your metrics in real time with intelligent alerts and notifications.
                      </p>
                     
                    </div>

                  </div>
                </div>
              </div>
            )}

            {!['overview','analytics'].includes(activeTab) && (
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    {MENU_ICONS.find((item)=> item.id === activeTab)?.icon && React.createElement(MENU_ICONS.find((item)=> item.id === activeTab).icon, {className:"h-10 w-10 text-white"})}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4 capitalize">{activeTab} Management</h2>
              </div>
            )}
           
          </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
