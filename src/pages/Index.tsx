import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, Github, Facebook, Instagram, Youtube, MapPin, Languages, Heart, Code, Palette, Video, Monitor, FileText, BarChart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEmailJS } from '@/hooks/useEmailJS';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { sendEmail, isLoading } = useEmailJS();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const success = await sendEmail(formData);
    if (success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const skills = [
    { name: 'HTML', level: 90, icon: Code },
    { name: 'CSS', level: 85, icon: Palette },
    { name: 'C Programming', level: 75, icon: Code },
    { name: 'MS Word', level: 95, icon: FileText },
    { name: 'MS Excel', level: 90, icon: BarChart },
    { name: 'PowerPoint', level: 92, icon: Monitor },
    { name: 'Photoshop', level: 88, icon: Palette },
    { name: 'Illustrator', level: 82, icon: Palette },
    { name: 'Premiere Pro', level: 85, icon: Video },
    { name: 'After Effects', level: 80, icon: Video },
  ];

  const services = [
    {
      title: 'Graphic Design',
      description: 'Logos, Posters, Banners, Social Media Kits',
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Editing',
      description: 'Reels, YouTube Videos, Educational Content',
      icon: Video,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Design',
      description: 'Responsive landing pages with HTML/CSS',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const projects = [
    {
      title: 'Bengali Voice Typing App',
      description: 'Lightweight speech-to-text application for Bengali language',
      tech: ['Python', 'GUI', 'Speech Recognition'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    },
    {
      title: 'Playlist Link Extractor',
      description: 'Python GUI tool for extracting links from playlists',
      tech: ['Python', 'Tkinter', 'Web Scraping'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    },
    {
      title: 'Format Converter App',
      description: 'MKV to MP4 converter with track selector functionality',
      tech: ['Python', 'FFmpeg', 'GUI'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gourob.
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            Hi, I'm
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white animate-fade-in">
            Gourob Saha
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
            Student | Coder | Designer | Dreamer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              View Portfolio
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm Gourob Saha, a tech enthusiast currently studying in Class 12 (HSC 2025 batch). 
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
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-8xl">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
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
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    See More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">gourobsaha2319@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">01516352465</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Social Media</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://facebook.com/profile.php?id=100093706797985" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg hover:scale-105 transition-transform">
                    <Facebook className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">Facebook</span>
                  </a>
                  <a href="https://youtube.com/@PHDGD" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900 rounded-lg hover:scale-105 transition-transform">
                    <Youtube className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-red-800 dark:text-red-200">YouTube</span>
                  </a>
                  <a href="https://instagram.com/gourobsaha2319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-pink-100 dark:bg-pink-900 rounded-lg hover:scale-105 transition-transform">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    <span className="text-sm text-pink-800 dark:text-pink-200">Instagram</span>
                  </a>
                  <a href="https://github.com/GOUROB2319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:scale-105 transition-transform">
                    <Github className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    <span className="text-sm text-gray-800 dark:text-gray-200">GitHub</span>
                  </a>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Send Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name" 
                  className="bg-white/50 dark:bg-gray-700/50" 
                  required 
                />
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email" 
                  className="bg-white/50 dark:bg-gray-700/50" 
                  required 
                />
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-white/50 dark:bg-gray-700/50" 
                  required 
                />
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Gourob Saha. Made with ❤️ and lots of ☕</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <Button
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl z-40"
      >
        <Mail className="h-6 w-6" />
      </Button>

      <Toaster />
    </div>
  );
};

export default Index;
