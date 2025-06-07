
import { Mail, MessageCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-3 z-40">
      {/* Chat Button */}
      <Button
        onClick={handleChatClick}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:scale-110 transition-all duration-300 p-0"
        title="চ্যাট করুন"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Divider */}
      <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600"></div>

      {/* Main Action Button */}
      <Button
        onClick={() => scrollToSection(activeSection === 'contact' ? 'home' : 'contact')}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:scale-110 transition-all duration-300 p-0"
        title={activeSection === 'contact' ? 'হোমে যান' : 'যোগাযোগ করুন'}
      >
        {activeSection === 'contact' ? (
          <Home className="h-6 w-6 text-white" />
        ) : (
          <Mail className="h-6 w-6 text-white" />
        )}
      </Button>
    </div>
  );
};

export default FloatingButtons;
