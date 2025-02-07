
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { name: "Mon", sentiment: 4, influence: 3, intention: 2 },
  { name: "Tue", sentiment: 3, influence: 4, intention: 5 },
  { name: "Wed", sentiment: 5, influence: 2, intention: 3 },
  { name: "Thu", sentiment: 2, influence: 5, intention: 4 },
  { name: "Fri", sentiment: 4, influence: 3, intention: 5 },
];

export const AnalysisResults = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Analysis Overview</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sentiment"
                stroke="#7B8FDB"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="influence"
                stroke="#5668C9"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="intention"
                stroke="#3F4BA7"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <h4 className="text-sm font-medium text-gray-500">Sentiment Score</h4>
          <p className="text-3xl font-bold text-media-600">8.5</p>
          <span className="text-sm text-green-500">+2.3% from last week</span>
        </Card>

        <Card className="p-6">
          <h4 className="text-sm font-medium text-gray-500">Intention Analysis</h4>
          <p className="text-3xl font-bold text-media-600">Positive</p>
          <span className="text-sm text-gray-500">High confidence</span>
        </Card>

        <Card className="p-6">
          <h4 className="text-sm font-medium text-gray-500">Influence Score</h4>
          <p className="text-3xl font-bold text-media-600">7.2</p>
          <span className="text-sm text-orange-500">Medium impact</span>
        </Card>
      </div>
    </div>
  );
};
