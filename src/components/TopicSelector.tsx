
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Volume2 } from "lucide-react";

interface TopicSelectorProps {
  onJoinRoom: (topic: string) => void;
}

const topics = [
  {
    id: "motivation",
    title: "Motivation & Goals",
    description: "Share encouragement and support for personal growth",
    icon: Users,
    color: "from-green-400 to-emerald-500",
    participants: Math.floor(Math.random() * 15) + 3
  },
  {
    id: "heartbreak",
    title: "Heartbreak Support",
    description: "A safe space to process emotions and find comfort",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    participants: Math.floor(Math.random() * 12) + 2
  },
  {
    id: "study",
    title: "Study & Learning",
    description: "Academic support and study motivation",
    icon: Volume2,
    color: "from-blue-400 to-indigo-500",
    participants: Math.floor(Math.random() * 20) + 5
  },
  {
    id: "science",
    title: "Scientific Studies",
    description: "Discuss research and scientific developments",
    icon: Volume2,
    color: "from-purple-400 to-violet-500",
    participants: Math.floor(Math.random() * 8) + 1
  },
  {
    id: "knowledge",
    title: "General Knowledge",
    description: "Share insights and learn from others",
    icon: Users,
    color: "from-amber-400 to-orange-500",
    participants: Math.floor(Math.random() * 18) + 4
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Analyze real-world scenarios and solutions",
    icon: Volume2,
    color: "from-teal-400 to-cyan-500",
    participants: Math.floor(Math.random() * 10) + 2
  }
];

const TopicSelector = ({ onJoinRoom }: TopicSelectorProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose Your Voice Chat Topic</h2>
        <p className="text-gray-600">Join anonymous conversations that matter to you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const IconComponent = topic.icon;
          return (
            <Card key={topic.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${topic.color} flex items-center justify-center mb-3`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {topic.participants} people listening
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">Live</span>
                  </div>
                </div>
                <Button 
                  onClick={() => onJoinRoom(topic.id)}
                  className={`w-full bg-gradient-to-r ${topic.color} hover:opacity-90 text-white border-0`}
                >
                  Join Voice Chat
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TopicSelector;
