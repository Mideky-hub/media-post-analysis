
import { NavBar } from "@/components/NavBar";
import { BotStatus } from "@/components/BotStatus";
import { ScrapingResults } from "@/components/ScrapingResults";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            M.E.D.I.A. Scraping Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and analyze social media content automatically
          </p>
        </div>

        <Tabs defaultValue="status" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="status">Bot Status</TabsTrigger>
            <TabsTrigger value="results">Scraping Results</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-4">
            <BotStatus />
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            <ScrapingResults />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
