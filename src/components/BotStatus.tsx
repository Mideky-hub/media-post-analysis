
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Play, Pause, RefreshCw, Settings, Calendar, Clock, Database } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockScheduleData = [
  { time: "00:00", active: 0 },
  { time: "03:00", active: 1 },
  { time: "06:00", active: 1 },
  { time: "09:00", active: 0 },
  { time: "12:00", active: 1 },
  { time: "15:00", active: 1 },
  { time: "18:00", active: 0 },
  { time: "21:00", active: 1 },
];

export const BotStatus = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Bot Status</h3>
            <Activity className="h-5 w-5 text-green-500 animate-pulse" />
          </div>
          <p className="text-2xl font-bold text-green-500">Active</p>
          <p className="text-sm text-gray-500 mt-1">Running for 2h 15m</p>
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outline">
              <Pause className="h-4 w-4 mr-1" />
              Pause
            </Button>
            <Button size="sm" variant="outline">
              <RefreshCw className="h-4 w-4 mr-1" />
              Restart
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Current Session</h3>
            <Settings className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-500">Posts Scraped</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-green-500">98.5%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Next Schedule</h3>
            <Play className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold">15:00</p>
          <p className="text-sm text-gray-500 mt-1">Today</p>
          <Button className="w-full mt-4" variant="outline">
            Modify Schedule
          </Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">24h Schedule Overview</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockScheduleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis ticks={[0, 1]} domain={[0, 1]} />
              <Tooltip />
              <Line
                type="stepAfter"
                dataKey="active"
                stroke="#3F4BA7"
                strokeWidth={2}
                dot={false}
                name="Bot Activity"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Recent Activity Log</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-500">2 min ago</span>
              <span>Successfully scraped 50 posts from Twitter</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
