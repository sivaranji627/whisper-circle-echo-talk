
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Volume2, VolumeOff } from "lucide-react";

interface VoiceControlsProps {
  isMuted: boolean;
  isListening: boolean;
  onToggleMute: () => void;
  onToggleListening: () => void;
}

const VoiceControls = ({ 
  isMuted, 
  isListening, 
  onToggleMute, 
  onToggleListening 
}: VoiceControlsProps) => {
  return (
    <div className="flex justify-center space-x-6">
      <div className="text-center">
        <Button
          onClick={onToggleMute}
          size="lg"
          className={`w-16 h-16 rounded-full ${
            isMuted 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white shadow-lg transition-all duration-200 hover:scale-105`}
        >
          {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
        </Button>
        <p className="text-xs text-gray-600 mt-2">
          {isMuted ? 'Tap to speak' : 'Speaking'}
        </p>
      </div>

      <div className="text-center">
        <Button
          onClick={onToggleListening}
          size="lg"
          className={`w-16 h-16 rounded-full ${
            isListening 
              ? 'bg-blue-500 hover:bg-blue-600' 
              : 'bg-gray-400 hover:bg-gray-500'
          } text-white shadow-lg transition-all duration-200 hover:scale-105`}
        >
          {isListening ? <Volume2 className="w-6 h-6" /> : <VolumeOff className="w-6 h-6" />}
        </Button>
        <p className="text-xs text-gray-600 mt-2">
          {isListening ? 'Listening' : 'Muted'}
        </p>
      </div>
    </div>
  );
};

export default VoiceControls;
