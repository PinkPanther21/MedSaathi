import { Home, Grid, BarChart, MessageSquare, Settings, Search, Users , Globe, Target, DollarSign, Activity, Package } from 'lucide-react';

export const MENU_ICONS = [
  { id: 'overview',    label: 'Overview',    icon: Grid,          gradient: 'from-green-400 to-blue-500' },
  { id: 'analytics',   label: 'Analytics',   icon: BarChart,      gradient: 'from-indigo-500 to-violet-600' },
  { id: 'messages',    label: 'Messages',    icon: MessageSquare, gradient: 'from-yellow-400 to-orange-500' },
  { id: 'sales',       label: 'Sales',       icon: DollarSign,    gradient: 'from-emerald-400 to-teal-500' },
  { id: 'performance', label: 'Performance', icon: Activity,      gradient: 'from-fuchsia-500 to-purple-600' },
  { id: 'products',    label: 'Products',    icon: Package,       gradient: 'from-rose-400 to-red-500' },
  { id: 'settings',    label: 'Settings',    icon: Settings,      gradient: 'from-sky-400 to-cyan-500' },
];


export const revenueData = [
  { month: "Jan", revenue: 85000, users: 1200, growth: 12.5 },
  { month: "Feb", revenue: 91000, users: 1350, growth: 7.1 },
  { month: "Mar", revenue: 98000, users: 1480, growth: 7.7 },
  { month: "Apr", revenue: 105000, users: 1600, growth: 6.9 },
  { month: "May", revenue: 112500, users: 1740, growth: 7.1 },
  { month: "Jun", revenue: 120000, users: 1890, growth: 6.6 },
];

export const performanceData = [
  { name: "Performance", value: 92, fill: "#8B5CF6" },
  { name: "Efficiency", value: 85, fill: "#10B981" },
  { name: "Reliability", value: 78, fill: "#F59E0B" },
  { name: "Scalability", value: 88, fill: "#EF4444" },
];

export const trafficSources = [
  { name: "Organic Search", value: 45, color: "#8B5CF6", icon: Search },
  { name: "Direct Traffic", value: 25, color: "#10B981", icon: Users },
  { name: "Social Media", value: 18, color: "#F59E0B", icon: Globe },
  { name: "Email Camapign", value: 12, color: "#EF4444", icon: Target },
];

export const liveActivities = [
  {
    user: "Sarah Chen",
    action: "Made a purchase",
    amount: "$2,450",
    time: "2 min ago",
    type: "purchase",
  },
  {
    user: "Daniel Roberts",
    action: "Upgraded subscription",
    amount: "$99",
    time: "5 min ago",
    type: "upgrade",
  },
  {
    user: "Amelia Watson",
    action: "Reviewed Product",
    amount: "$120",
    time: "12 min ago",
    type: "review",
  },
  {
    user: "Liam Carter",
    action: "Added new payment method",
    amount: "•••• 9832",
    time: "20 min ago",
    type: "signup",
  },
  {
    user: "Noah Smith",
    action: "Signed in from new device",
    amount: "Chrome · Windows",
    time: "30 min ago",
    type: "download",
  },
  {
    user: "Olivia Johnson",
    action: "Completed checkout",
    amount: "$580",
    time: "45 min ago",
    type: "purchase",
  },
];
