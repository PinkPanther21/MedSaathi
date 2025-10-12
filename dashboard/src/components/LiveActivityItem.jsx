import { Crown, DollarSign, Download, Star, UserPlus } from "lucide-react"

export function LiveActivityItem({activity}){

    const typeStyles = {
        purchase: {
            bg: "bg-green-500/20",
            text: "text-green-400",
            icon: DollarSign
        },
        signup :{bg: "bg-blue-500/20", text: "text-blue-400", icon: UserPlus},
        download: {
            bg: "bg-purple-500/20",
            text: "text-purple-400",
            icon: Download,
        },
        upgrade: {bg: "bg-orange-500/20", text: "text-orange-400", icon: Crown},
        review: {bg: "bg-pink-500/20", text: "text-pink-400", icon: Star}
    }

    const style = typeStyles[activity.type] || {}
    const ActivityIcon = style.icon


    return (
        <>
        {/* <div className="max-w-xl mx-auto mt-4">
  <div className="flex items-center space-x-4 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group">
    <div className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 bg-white/10">
      Icon
    </div>

    <div className="flex-1 min-w-0 overflow-hidden">
      <p className="text-white font-medium truncate whitespace-nowrap lg:text-sm">Activity User</p>
      <p className="text-white/60 text-sm lg:text-[8px]">Activity Action</p>
    </div>

    <div className="text-right">
      <p className="text-white font-medium truncate whitespace-nowrap lg:text-sm">Activity Amount</p>
      <p className="text-white/60 text-sm lg:text-[8px]">Activity Time</p>
    </div>
  </div>
</div> */}
<div className="flex items-center space-x-2 gap-3 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      
      {/* Icon Section */}
      <div className={`p-2 rounded-xl ${style.bg} flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
        <ActivityIcon className={`h-5 w-5 ${style.text}`}/>
      </div>

      {/* Middle Section */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate lg:text-[12px]">
          {activity.user}
        </p>
        <p className="text-white/60 text-sm lg:text-[6px]">
          {activity.action}
        </p>
      </div>

      {/* Right Section */}
      <div className="text-right">
        <p className="text-white font-medium truncate lg:text-[12px]">
          {activity.amount}
        </p>
        <p className="text-white/60 text-sm lg:text-[6px]">
           {activity.time}
        </p>
      </div>

    </div>

        </>
    )
}