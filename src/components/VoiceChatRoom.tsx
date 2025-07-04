
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VoiceControls from "@/components/VoiceControls";
import VoiceIndicator from "@/components/VoiceIndicator";

interface VoiceChatRoomProps {
  topic: string | null;
  onLeaveRoom: () => void;
}

interface User {
  id: string;
  isSpeaking: boolean;
  avatar: string;
}

const VoiceChatRoom = ({ topic, onLeaveRoom }: VoiceChatRoomProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isMuted, setIsMuted] = useState(true);
  const [isListening, setIsListening] = useState(true);

  useEffect(() => {
    // Simulate other users in the room
    const simulatedUsers = Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => ({
      id: `user-${i}`,
      isSpeaking: Math.random() > 0.7,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`
    }));
    setUsers(simulatedUsers);

    // Simulate speaking activity
    const interval = setInterval(() => {
      setUsers(prev => prev.map(user => ({
        ...user,
        isSpeaking: Math.random() > 0.8
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, [topic]);

  const topicTitles: Record<string, string> = {
    motivation: "Motivation & Goals",
    heartbreak: "Heartbreak Support", 
    study: "Study & Learning",
    science: "Scientific Studies",
    knowledge: "General Knowledge",
    "case-studies": "Case Studies"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
        <CardHeader className="text-center border-b border-gray-100">
          <CardTitle className="text-2xl font-semibold text-gray-800">
            {topic ? topicTitles[topic] : "Voice Chat Room"}
          </CardTitle>
          <p className="text-gray-600">
            {users.length + 1} participants • Voice messages vanish after being heard
          </p>
        </CardHeader>
        
        <CardContent className="p-8">
          {/* Voice Activity Visualization */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">
              Who's Speaking
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {users.map((user) => (
                <VoiceIndicator
                  key={user.id}
                  isSpeaking={user.isSpeaking}
                  avatar={user.avatar}
                />
              ))}
              <VoiceIndicator
                isSpeaking={!isMuted}
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=you"
                isYou={true}
              />
            </div>
          </div>

          {/* Voice Controls */}
          <VoiceControls
            isMuted={isMuted}
            isListening={isListening}
            onToggleMute={() => setIsMuted(!isMuted)}
            onToggleListening={() => setIsListening(!isListening)}
          />

          {/* Room Info */}
          <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              💙 Remember: This is a safe space for authentic voice connections
            </p>
            <p className="text-xs text-gray-500">
              Your voice messages disappear after being heard • Stay anonymous • Be kind
            </p>
          </div>

          {/* Leave Room Button */}
          <div className="text-center mt-6">
            <Button
              onClick={onLeaveRoom}
              variant="outline"
              className="px-8 py-2 border-gray-300 hover:bg-gray-50"
            >
              Leave Room
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceChatRoom;
