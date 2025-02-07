import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const mockTimelineData = [
  { time: "09:00", posts: 120, sentiment: 0.7, influence: 0.5, engagement: 0.6, reach: 0.4, virality: 0.3 },
  { time: "10:00", posts: 150, sentiment: 0.6, influence: 0.6, engagement: 0.7, reach: 0.5, virality: 0.4 },
  { time: "11:00", posts: 180, sentiment: 0.8, influence: 0.7, engagement: 0.8, reach: 0.6, virality: 0.5 },
  { time: "12:00", posts: 200, sentiment: 0.75, influence: 0.8, engagement: 0.9, reach: 0.7, virality: 0.6 },
  { time: "13:00", posts: 160, sentiment: 0.65, influence: 0.6, engagement: 0.7, reach: 0.5, virality: 0.4 },
  { time: "14:00", posts: 140, sentiment: 0.7, influence: 0.5, engagement: 0.6, reach: 0.4, virality: 0.3 },
];

const mockSourceData = [
  { source: "Twitter", count: 450 },
  { source: "LinkedIn", count: 280 },
  { source: "Facebook", count: 320 },
  { source: "Instagram", count: 190 },
];

const mockContentTypes = [
  { name: "Text", value: 45 },
  { name: "Images", value: 30 },
  { name: "Videos", value: 15 },
  { name: "Links", value: 10 },
];

const mockTextAnalysis = {
  sectors: [
    { sector: "Technology", count: 450, sentiment: 0.8 },
    { sector: "Finance", count: 280, sentiment: 0.6 },
    { sector: "Healthcare", count: 220, sentiment: 0.7 },
    { sector: "Retail", count: 150, sentiment: 0.5 },
  ],
  topics: [
    { topic: "Innovation", count: 320 },
    { topic: "Market Trends", count: 280 },
    { topic: "Customer Experience", count: 240 },
    { topic: "Digital Transformation", count: 200 },
  ],
};

const mockHeatmapData = [
  [0.2, 0.3, 0.8, 0.4],
  [0.5, 0.9, 0.7, 0.3],
  [0.3, 0.4, 0.5, 0.2],
  [0.1, 0.2, 0.3, 0.1],
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const ScrapingResults = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Analytics Timeline</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockTimelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="posts" stroke="#7B8FDB" strokeWidth={2} name="Posts" />
              <Line type="monotone" dataKey="sentiment" stroke="#5668C9" strokeWidth={2} name="Sentiment" />
              <Line type="monotone" dataKey="influence" stroke="#3F4BA7" strokeWidth={2} name="Influence" />
              <Line type="monotone" dataKey="engagement" stroke="#00C49F" strokeWidth={2} name="Engagement" />
              <Line type="monotone" dataKey="reach" stroke="#FFBB28" strokeWidth={2} name="Reach" />
              <Line type="monotone" dataKey="virality" stroke="#FF8042" strokeWidth={2} name="Virality" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Content Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockContentTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {mockContentTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Platform Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockSourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#7B8FDB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Text and Sector Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Industry Sector Distribution</h4>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockTextAnalysis.sectors}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sector" />
                  <YAxis yAxisId="left" orientation="left" stroke="#7B8FDB" />
                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                  <Tooltip />
                  <Bar yAxisId="left" dataKey="count" fill="#7B8FDB" name="Post Count" />
                  <Bar yAxisId="right" dataKey="sentiment" fill="#82ca9d" name="Sentiment Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Topic Distribution</h4>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockTextAnalysis.topics}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    label={({ topic, percent }) => `${topic} ${(percent * 100).toFixed(0)}%`}
                  >
                    {mockTextAnalysis.topics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Visual Content Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-4">Text Placement Heatmap</h4>
            <div className="aspect-video bg-gray-100 rounded-lg p-4">
              <div className="grid grid-cols-4 gap-1 h-full">
                {mockHeatmapData.map((row, i) =>
                  row.map((value, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="rounded"
                      style={{
                        backgroundColor: `rgba(123, 143, 219, ${value})`,
                        transition: 'background-color 0.3s ease',
                      }}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <div className="flex items-center justify-between">
                <span>Low Density</span>
                <span>High Density</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-white to-[#7B8FDB] rounded mt-1" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Image Classification</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Image Type</p>
                  <p className="text-xl font-bold mt-1">Product Photo</p>
                  <p className="text-sm text-green-500 mt-1">92% confidence</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-500">Color Palette</p>
                  <div className="flex gap-2 mt-2">
                    {['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'].map((color) => (
                      <div
                        key={color}
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-2">OCR Analysis</h4>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Text Coverage</p>
                  <p className="text-xl font-bold">35%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Font Types</p>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-1 bg-gray-100 rounded text-sm">Arial</span>
                    <span className="px-2 py-1 bg-gray-100 rounded text-sm">Helvetica</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">AI Training Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Sentiment Analysis</h4>
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-sm text-gray-500">Confidence Score</p>
                <p className="text-2xl font-bold text-green-500">89%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sample Size</p>
                <p className="text-lg font-semibold">1,234 posts</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500">Intention Classification</h4>
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-sm text-gray-500">Categories Identified</p>
                <p className="text-2xl font-bold text-blue-500">8</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Model Accuracy</p>
                <p className="text-lg font-semibold">85%</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-500">Influence Metrics</h4>
            <div className="mt-2 space-y-2">
              <div>
                <p className="text-sm text-gray-500">Engagement Rate</p>
                <p className="text-2xl font-bold text-purple-500">4.2%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Viral Coefficient</p>
                <p className="text-lg font-semibold">1.8</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Dataset Quality Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Data Completeness</p>
            <p className="text-2xl font-bold text-blue-500">98%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Label Distribution</p>
            <p className="text-2xl font-bold text-green-500">Balanced</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Unique Authors</p>
            <p className="text-2xl font-bold text-purple-500">2.4K</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Language Diversity</p>
            <p className="text-2xl font-bold text-orange-500">12</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
