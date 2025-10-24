import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { Bike, Activity, AlertTriangle, Wrench, TrendingUp, TrendingDown, MapPin, Clock, Users } from 'lucide-react';

// Generate mock data for fleet
const generateFleetData = () => {
  const totalBikes = 3247;
  const activeBikes = Math.floor(totalBikes * 0.68);
  const maintenanceNeeded = Math.floor(totalBikes * 0.12);
  const idle = totalBikes - activeBikes - maintenanceNeeded;
  
  return {
    totalBikes,
    activeBikes,
    maintenanceNeeded,
    idle,
    todayRides: 8934,
    avgRideQuality: 7.4,
    highVibrationAlerts: 47
  };
};

// Generate hourly ride data
const generateHourlyData = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    const baseRides = i >= 7 && i <= 9 ? 800 : i >= 17 && i <= 19 ? 900 : i >= 11 && i <= 14 ? 500 : 100;
    hours.push({
      hour: `${i}:00`,
      rides: baseRides + Math.floor(Math.random() * 200),
      avgVibration: 15 + Math.random() * 25
    });
  }
  return hours;
};

// Generate zone data
const generateZoneData = () => [
  { zone: 'Downtown', rides: 2847, avgQuality: 6.8, alerts: 18, color: '#ef4444' },
  { zone: 'North District', rides: 1923, avgQuality: 8.2, alerts: 5, color: '#22c55e' },
  { zone: 'East Side', rides: 1654, avgQuality: 5.9, alerts: 15, color: '#f59e0b' },
  { zone: 'West End', rides: 1389, avgQuality: 7.8, alerts: 6, color: '#3b82f6' },
  { zone: 'South Zone', rides: 1121, avgQuality: 7.1, alerts: 3, color: '#8b5cf6' }
];

// Generate active rides
const generateActiveRides = () => {
  const statuses = ['Normal', 'High Vibration', 'Normal', 'Normal', 'Maintenance Alert'];
  const zones = ['Downtown', 'North District', 'East Side', 'West End', 'South Zone'];
  const rides = [];
  
  for (let i = 0; i < 12; i++) {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    rides.push({
      bikeId: `BK-${1000 + i}`,
      zone: zones[Math.floor(Math.random() * zones.length)],
      duration: `${5 + Math.floor(Math.random() * 25)} min`,
      vibration: 15 + Math.random() * 45,
      status: status
    });
  }
  return rides;
};

const BikeFleetDashboard = () => {
  const [fleetData, setFleetData] = useState(generateFleetData());
  const [hourlyData] = useState(generateHourlyData());
  const [zoneData] = useState(generateZoneData());
  const [activeRides, setActiveRides] = useState(generateActiveRides());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setFleetData(generateFleetData());
      setActiveRides(generateActiveRides());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    if (status === 'Normal') return 'bg-green-100 text-green-800';
    if (status === 'High Vibration') return 'bg-red-100 text-red-800';
    return 'bg-orange-100 text-orange-800';
  };

  const getQualityColor = (quality) => {
    if (quality >= 7) return 'text-green-600';
    if (quality >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const pieData = [
    { name: 'Active', value: fleetData.activeBikes, color: '#22c55e' },
    { name: 'Idle', value: fleetData.idle, color: '#94a3b8' },
    { name: 'Maintenance', value: fleetData.maintenanceNeeded, color: '#ef4444' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Bike Fleet Control Center</h1>
            <p className="text-gray-600">Real-time monitoring of {fleetData.totalBikes.toLocaleString()} bikes across all zones</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Last updated</div>
            <div className="text-lg font-semibold text-gray-800">{currentTime.toLocaleTimeString()}</div>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Bike className="w-5 h-5 text-blue-500" />
              <span className="text-xs font-medium text-gray-600">Total Fleet</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">{fleetData.totalBikes.toLocaleString()}</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="text-xs font-medium text-gray-600">Active Now</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{fleetData.activeBikes.toLocaleString()}</div>
            <div className="text-xs text-gray-500">{((fleetData.activeBikes/fleetData.totalBikes)*100).toFixed(1)}%</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="text-xs font-medium text-gray-600">Rides Today</span>
            </div>
            <div className="text-2xl font-bold text-gray-800">{fleetData.todayRides.toLocaleString()}</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12%
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-indigo-500" />
              <span className="text-xs font-medium text-gray-600">Avg Quality</span>
            </div>
            <div className={`text-2xl font-bold ${getQualityColor(fleetData.avgRideQuality)}`}>
              {fleetData.avgRideQuality}/10
            </div>
            <div className="text-xs text-green-600">Good</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-xs font-medium text-gray-600">Alerts</span>
            </div>
            <div className="text-2xl font-bold text-red-600">{fleetData.highVibrationAlerts}</div>
            <div className="text-xs text-gray-500">High vibration</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="w-5 h-5 text-orange-500" />
              <span className="text-xs font-medium text-gray-600">Maintenance</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">{fleetData.maintenanceNeeded}</div>
            <div className="text-xs text-gray-500">Need service</div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="text-xs font-medium text-gray-600">Idle Bikes</span>
            </div>
            <div className="text-2xl font-bold text-gray-600">{fleetData.idle}</div>
            <div className="text-xs text-gray-500">Available</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Rides per Hour */}
          <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Rides & Vibration Trends (24h)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#ef4444" style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="rides" stroke="#3b82f6" strokeWidth={2} dot={false} name="Rides" />
                <Line yAxisId="right" type="monotone" dataKey="avgVibration" stroke="#ef4444" strokeWidth={2} dot={false} name="Avg Vibration" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Fleet Status Pie */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Fleet Status Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Zone Performance & Active Rides */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Zone Performance */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Zone Performance</h2>
            <div className="space-y-3">
              {zoneData.map((zone, idx) => (
                <div key={idx} className="border-l-4 pl-3 py-2" style={{ borderColor: zone.color }}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" style={{ color: zone.color }} />
                      <span className="font-semibold text-gray-800">{zone.zone}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{zone.rides} rides</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      Quality: <span className={`font-semibold ${getQualityColor(zone.avgQuality)}`}>{zone.avgQuality}/10</span>
                    </span>
                    {zone.alerts > 0 && (
                      <span className="text-red-600 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> {zone.alerts} alerts
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Rides Feed */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-gray-800">Live Ride Monitor</h2>
              <span className="text-xs text-gray-500">Updating every 5s</span>
            </div>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {activeRides.map((ride, idx) => (
                <div key={idx} className="border border-gray-200 rounded p-3 hover:bg-gray-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Bike className="w-4 h-4 text-gray-600" />
                      <span className="font-mono font-semibold text-sm text-gray-800">{ride.bikeId}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(ride.status)}`}>
                      {ride.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>{ride.zone} • {ride.duration}</span>
                    <span className={`font-medium ${ride.vibration > 40 ? 'text-red-600' : 'text-green-600'}`}>
                      {ride.vibration.toFixed(1)} vib
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeFleetDashboard;