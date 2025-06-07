
import { MapPin, Languages, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left Side on Desktop, Top on Mobile */}
          <div className="relative order-2 md:order-1">
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/d930c304-15b7-4d0b-abbf-9253dedc9902.png" 
                  alt="Gourob Saha - Developer and Designer" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          {/* Information - Right Side on Desktop, Bottom on Mobile */}
          <div className="space-y-6 order-1 md:order-2">
            <Card className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Hi, I'm Gourob Saha!
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a tech enthusiast currently studying in Class 12 (HSC 2025 batch). 
                I love coding, computers, and watching movies. I believe in learning by building, 
                and I'm always curious to explore more.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Kalipur, Tangail, Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Languages className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">English, Bengali</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-pink-600" />
                  <span className="text-gray-700 dark:text-gray-300">Coding, Movies, Designing, Tech Experiments</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
