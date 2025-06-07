
import { Mail, MessageCircle } from 'lucide-react';

interface FloatingButtonsProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const FloatingButtons = ({ activeSection, scrollToSection }: FloatingButtonsProps) => {
  const handleChatClick = () => {
    if (window.openTidioChat) {
      window.openTidioChat();
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:gourobsaha2319@gmail.com';
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full px-4 py-3 flex items-center gap-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20">
        {/* Email Icon */}
        <button
          onClick={handleEmailClick}
          className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 group"
          title="ইমেইল পাঠান"
        >
          <Mail className="h-5 w-5 text-white group-hover:text-blue-100" />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-white/30"></div>

        {/* Chat Icon */}
        <button
          onClick={handleChatClick}
          className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 group"
          title="লাইভ চ্যাট"
        >
          <MessageCircle className="h-5 w-5 text-white group-hover:text-green-100" />
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
