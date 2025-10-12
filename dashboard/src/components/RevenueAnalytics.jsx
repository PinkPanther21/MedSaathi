import { revenueData } from "../data/data"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export function RevenueAnalystics(){
    return (
        <>
        {/* <div className="lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
         <div className="flex items-center justify-between mb-8">
            <div>
                <h3 className="text-2xl fonnt-bold text-white mb-2">Revenue Flow</h3>
                <p className="text-white/60">Real Time financial analytics</p>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
                <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

                <span className="text-white/80 text-sm font-medium">Revenue</span>
                </div>
            </div>
            
         </div>
         
        </div> */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Revenue Flow</h3>
          <p className="text-white/60">Real-time financial analytics</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <span className="text-white/80 text-sm font-medium">Revenue</span>
          </div>

          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
            <span className="text-white/80 text-sm font-medium">Users</span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.6)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "16px",
                color: "#fff",
                backdropFilter: "blur(16px)",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06B6D4"
              strokeWidth={2}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#8B5CF6"
              strokeWidth={2}
              fill="url(#colorUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
        </>
    )
}