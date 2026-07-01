import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Calendar, TrendingUp, DollarSign, Activity, Settings, Bell } from 'lucide-react';

interface AdminDashboardMockupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminDashboardMockup({ isOpen, onClose }: AdminDashboardMockupProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Revenue', value: '$124,500', icon: DollarSign, trend: '+14%' },
    { label: 'Occupancy Rate', value: '82%', icon: Activity, trend: '+5%' },
    { label: 'New Bookings', value: '48', icon: Calendar, trend: '+12%' },
    { label: 'Active Guests', value: '112', icon: Users, trend: 'Stable' },
  ];

  const recentBookings = [
    { id: 'BK-7829', guest: 'Sarah Jenkins', room: 'Presidential Suite', dates: 'Oct 12 - Oct 15', status: 'Confirmed', amount: '$3,450' },
    { id: 'BK-7830', guest: 'Michael Chen', room: 'Ocean View Balcony', dates: 'Oct 14 - Oct 18', status: 'Pending', amount: '$1,200' },
    { id: 'BK-7831', guest: 'Emma Thompson', room: 'Grand Lobby Suite', dates: 'Oct 15 - Oct 16', status: 'Confirmed', amount: '$850' },
    { id: 'BK-7832', guest: 'David Wilson', room: 'Infinity Pool Villa', dates: 'Oct 18 - Oct 25', status: 'Confirmed', amount: '$5,600' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-[#1A1A1A] w-full max-w-6xl h-[85vh] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#111]">
              <div className="flex items-center gap-3 text-brand-gold font-serif text-xl">
                <Settings className="w-6 h-6" />
                HotelManager Pro
                <span className="text-xs bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-full ml-2 font-sans">DEMO MODE</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-white/60 hover:text-white relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm">
                  AD
                </div>
                <button onClick={onClose} className="ml-4 text-white/50 hover:text-white p-2 hover:bg-white/5 rounded-md transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/10 bg-[#111] p-4 flex flex-col gap-2">
                {['overview', 'bookings', 'rooms', 'guests', 'finance', 'settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-4 py-3 rounded-lg capitalize text-sm transition-colors ${
                      activeTab === tab ? 'bg-brand-gold/10 text-brand-gold font-medium' : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 overflow-y-auto p-8 bg-[#1A1A1A]">
                <div className="mb-8 flex justify-between items-end">
                  <div>
                    <h2 className="text-2xl font-serif text-white mb-1">Dashboard Overview</h2>
                    <p className="text-white/50 text-sm">Welcome back. Here's what's happening today.</p>
                  </div>
                  <button className="px-4 py-2 bg-brand-gold text-black text-sm font-medium rounded-md hover:bg-brand-gold/90 transition">
                    Generate Report
                  </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-lg">
                          <stat.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-white/50'}`}>
                          {stat.trend}
                        </span>
                      </div>
                      <h3 className="text-2xl font-medium text-white mb-1">{stat.value}</h3>
                      <p className="text-white/50 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Bookings Table */}
                <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-[#111]">
                    <h3 className="font-medium text-white">Recent Bookings</h3>
                    <button className="text-sm text-brand-gold hover:underline">View All</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="text-white/50 text-xs uppercase tracking-wider border-b border-white/10">
                          <th className="px-6 py-4 font-medium">Booking ID</th>
                          <th className="px-6 py-4 font-medium">Guest</th>
                          <th className="px-6 py-4 font-medium">Room Type</th>
                          <th className="px-6 py-4 font-medium">Dates</th>
                          <th className="px-6 py-4 font-medium">Amount</th>
                          <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {recentBookings.map((booking, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-white/70 font-mono">{booking.id}</td>
                            <td className="px-6 py-4 text-white">{booking.guest}</td>
                            <td className="px-6 py-4 text-white/70">{booking.room}</td>
                            <td className="px-6 py-4 text-white/70">{booking.dates}</td>
                            <td className="px-6 py-4 text-white font-medium">{booking.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                booking.status === 'Confirmed' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
