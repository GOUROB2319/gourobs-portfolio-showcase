
import { Code, Palette, Video, Monitor, FileText, BarChart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const SkillsSection = () => {
  const [skillsRef, skillsInView] = useIntersectionObserver({ threshold: 0.3 });

  const skills = [
    { name: 'HTML', level: 90, icon: Code },
    { name: 'CSS', level: 85, icon: Palette },
    { name: 'C Programming', level: 75, icon: Code },
    { name: 'C++', level: 80, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'MS Word', level: 95, icon: FileText },
    { name: 'MS Excel', level: 90, icon: BarChart },
    { name: 'PowerPoint', level: 92, icon: Monitor },
    { name: 'Photoshop', level: 88, icon: Palette },
    { name: 'Illustrator', level: 82, icon: Palette },
    { name: 'Premiere Pro', level: 85, icon: Video },
    { name: 'After Effects', level: 80, icon: Video }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-[2000ms] ease-out"
                  style={{
                    width: skillsInView ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 150}ms`
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
