
import { useState } from "react";
import TopicSelector from "@/components/TopicSelector";
import VoiceChatRoom from "@/components/VoiceChatRoom";

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isInRoom, setIsInRoom] = useState(false);

  const handleJoinRoom = (topic: string) => {
    setSelectedTopic(topic);
    setIsInRoom(true);
  };

  const handleLeaveRoom = () => {
    setSelectedTopic(null);
    setIsInRoom(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            VoiceConnect
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Anonymous voice conversations for mental health and social bonding. 
            Connect with others through meaningful voice interactions that disappear after being heard.
          </p>
        </header>

        {!isInRoom ? (
          <TopicSelector onJoinRoom={handleJoinRoom} />
        ) : (
          <VoiceChatRoom 
            topic={selectedTopic} 
            onLeaveRoom={handleLeaveRoom}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
