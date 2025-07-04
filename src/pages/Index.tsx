import { useState, useEffect } from 'react';
import { Mail, Phone, Github, Facebook, Instagram, Youtube, Linkedin, Twitter, Home, Code, Palette, Video, Monitor, FileText, BarChart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useEmailJS } from '@/hooks/useEmailJS';
import { useTheme } from '@/hooks/useTheme';
import { Toaster } from '@/components/ui/toaster';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { sendEmail, isLoading } = useEmailJS();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'videos', 'contact'];
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
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
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
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

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

  const videos = [
    {
      id: '5Ys-DWXX_G0',
      title: 'Creative Design Tutorial',
      thumbnail: `https://img.youtube.com/vi/5Ys-DWXX_G0/maxresdefault.jpg`,
      url: 'https://youtu.be/5Ys-DWXX_G0?si=WmZCfPIClAEuopv8'
    },
    {
      id: 'QmoftqWmbhw',
      title: 'Programming Essentials',
      thumbnail: `https://img.youtube.com/vi/QmoftqWmbhw/maxresdefault.jpg`,
      url: 'https://youtu.be/QmoftqWmbhw?si=kcaFCymBB6DmVcbj'
    },
    {
      id: 'yw1r8TecgZQ',
      title: 'Tech Innovation Guide',
      thumbnail: `https://img.youtube.com/vi/yw1r8TecgZQ/maxresdefault.jpg`,
      url: 'https://youtu.be/yw1r8TecgZQ?si=I41H-08wKDtF4RuI'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Neural Network Background Animation */}
      <NeuralNetworkBackground darkMode={darkMode} />

      {/* All content with higher z-index */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation 
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 hover:scale-105 transition-transform duration-300 relative group">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" style={{
                  filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3))',
                  textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                    🚀
                  </div>
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-blue-500/10 group-hover:to-blue-500/20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              Gourob Saha
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Student | Coder | Designer | Dreamer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('portfolio')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg hover:scale-105 transition-transform duration-200">
                View Portfolio
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg hover:scale-105 transition-transform duration-200">
                Contact Me
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => <Card key={service.title} className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
                  </div>
                </Card>)}
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
              {projects.map((project, index) => <Card key={project.title} className="overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover mix-blend-overlay" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {tech}
                        </Badge>)}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      See More
                    </Button>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Enhanced Videos Section */}
        <section id="videos" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Videos
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {videos.map((video, index) => <Card key={video.id} className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-2 border-gradient-to-r from-blue-300 to-purple-300 dark:border-blue-600 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 rounded-xl">
                  <div className="relative cursor-pointer" onClick={() => window.open(video.url, '_blank')}>
                    <div className="aspect-video overflow-hidden rounded-t-xl border-b-2 border-blue-200 dark:border-blue-700">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-t-xl">
                      <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Youtube className="h-10 w-10 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70">
                    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{video.title}</h3>
                    <Button onClick={() => window.open(video.url, '_blank')} className="w-full bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-500 hover:to-cyan-500 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Youtube className="mr-2 h-5 w-5" />
                      Watch on YouTube
                    </Button>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-xl hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <a href="mailto:gourobsaha2319@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                        gourobsaha2319@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <a href="tel:+8801516352465" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer">
                        +8801516352465
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-xl hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Social Media</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://www.linkedin.com/in/gourob-saha-9895442a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg hover:scale-105 transition-transform">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-800 dark:text-blue-200">LinkedIn</span>
                    </a>
                    <a href="https://x.com/GourobSaha2319" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-sky-100 dark:bg-sky-900 rounded-lg hover:scale-105 transition-transform">
                      <Twitter className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-sky-800 dark:text-sky-200">Twitter</span>
                    </a>
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
              
              <Card className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border-0 shadow-2xl hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Send Message</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input name="name" value={formData.name} onChange={handleFormChange} placeholder="Your Name" className="bg-white/50 dark:bg-gray-700/50" required />
                  <Input name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" className="bg-white/50 dark:bg-gray-700/50" required />
                  <Textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Your Message" rows={4} required className="bg-white/50 dark:bg-gray-700/50 py-[31px]" />
                  <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-transform duration-200">
                    {isLoading ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </> : 'Send Message'}
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

        {/* Dynamic Floating Button */}
        <Button 
          onClick={() => scrollToSection(activeSection === 'contact' ? 'home' : 'contact')} 
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl z-50 hover:scale-110 transition-all duration-300"
        >
          {activeSection === 'contact' ? <Home className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
        </Button>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
