
interface VoiceIndicatorProps {
  isSpeaking: boolean;
  avatar: string;
  isYou?: boolean;
}

const VoiceIndicator = ({ isSpeaking, avatar, isYou = false }: VoiceIndicatorProps) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 ${
          isSpeaking 
            ? 'ring-4 ring-green-400 ring-opacity-50 shadow-lg scale-110' 
            : 'ring-2 ring-gray-200'
        }`}
      >
        <img 
          src={avatar} 
          alt={isYou ? "You" : "Participant"} 
          className="w-full h-full object-cover"
        />
        {isSpeaking && (
          <div className="absolute inset-0 bg-green-400 bg-opacity-20 rounded-full animate-pulse" />
        )}
      </div>
      {isYou && (
        <span className="text-xs text-gray-500 mt-1">You</span>
      )}
    </div>
  );
};

export default VoiceIndicator;
