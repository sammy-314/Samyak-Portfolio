
import { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  DownloadCloud, 
  Code, 
  Briefcase, 
  GraduationCap,
  Home,
  User,
  Phone,
  Database
} from 'lucide-react';
import TechIcon from '@/components/TechIcon';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
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
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
    setShowNav(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-[#121212] text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-neon-teal/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-neon-orange/20 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Mobile navigation toggle */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-black/50 backdrop-blur-md md:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5 transition-transform" style={{ transform: showNav ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
        <div className="w-6 h-0.5 bg-white mb-1.5 transition-opacity" style={{ opacity: showNav ? 0 : 1 }}></div>
        <div className="w-6 h-0.5 bg-white transition-transform" style={{ transform: showNav ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
      </button>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 h-full w-64 md:w-20 bg-black/90 backdrop-blur-xl z-40 transition-transform duration-300 transform ${showNav ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} md:flex flex-col items-center py-10`}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-neon-teal flex items-center justify-center text-black font-bold mb-10">
          ST
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={() => scrollToSection('home')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'home' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Home"
          >
            <Home size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'about' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="About"
          >
            <User size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('skills')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'skills' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Skills"
          >
            <Code size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('experience')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'experience' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Experience"
          >
            <Briefcase size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('projects')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'projects' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Projects"
          >
            <GraduationCap size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'contact' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Contact"
          >
            <Mail size={20} />
          </button>

          <button 
            onClick={() => scrollToSection('database')}
            className={`p-3 rounded-lg transition-colors ${activeSection === 'database' ? 'bg-white/10 text-neon-teal' : 'hover:bg-white/5'}`}
            title="Database"
          >
            <Database size={20} />
          </button>
        </div>
        
        <div className="mt-auto flex flex-col items-center gap-4">
          <a 
            href="https://github.com/sammy-314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-white/5 transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/samyak-tripathi-97bab3251/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-white/5 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a 
            href="mailto:samyakt6@gmail.com" 
            className="p-3 rounded-lg hover:bg-white/5 transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </nav>
      
      <main className="relative md:pl-20">
        {/* Home section */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto w-full py-20">
            <div className="animate-fade-in">
              <p className="text-neon-teal mb-4 font-mono">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Samyak Tripathi<span className="text-neon-orange">.</span>
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-white/70 font-bold mb-6">
                I build things for the web.
              </h2>
              <p className="max-w-xl text-white/70 text-lg mb-8">
                I'm a computer science student passionate about creating beautiful, functional, and accessible digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/resume.pdf" 
                  download
                  className="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-neon-purple to-neon-teal text-black flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Download Resume
                  <DownloadCloud size={18} />
                </a>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 rounded-lg font-medium border border-neon-teal text-neon-teal flex items-center gap-2 hover:bg-neon-teal/10 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* About section */}
        <section id="about" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>About Me</SectionHeading>
            
            <div className="mt-8 grid md:grid-cols-2 gap-10">
              <div className="animate-slide-up">
                <p className="text-white/80 mb-4">
                  I'm a Computer Science student at SRM Institute of Science and Technology, where I'm currently pursuing my B.Tech degree. My journey in tech began with a curiosity about how digital experiences are built, which has evolved into a passion for creating them myself.
                </p>
                <p className="text-white/80 mb-4">
                  With a strong foundation in data structures, algorithms, and various programming languages, I enjoy tackling challenging problems and creating efficient solutions. I'm particularly interested in web development, cloud technologies, and AI.
                </p>
                <p className="text-white/80">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my skills through continuous learning.
                </p>
              </div>
              
              <div className="glass-card rounded-lg p-6 animate-slide-in-right">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                
                <div className="space-y-6">
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-neon-teal"></div>
                    <div className="absolute left-[3px] top-3.5 h-full w-0.5 bg-gradient-to-b from-neon-teal to-transparent"></div>
                    
                    <h4 className="font-bold">SRM Institute of Science and Technology</h4>
                    <p className="text-sm text-white/70">B.Tech in Computer Science and Engineering</p>
                    <p className="text-sm text-white/70">Sept. 2022 - May 2026</p>
                    <p className="text-sm mt-1">CGPA: 8.63/10</p>
                  </div>
                  
                  <div className="relative pl-5">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-neon-teal"></div>
                    
                    <h4 className="font-bold">Shanti Asiatic School</h4>
                    <p className="text-sm text-white/70">Senior Secondary Education</p>
                    <p className="text-sm text-white/70">Apr. 2020 - Apr. 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section id="skills" className="py-16 md:py-20 px-4 md:px-12 lg:px-20 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Technical Skills</SectionHeading>
            
            <div className="mt-12 space-y-10">
              <div className="animate-slide-up">
                <h3 className="text-xl font-bold mb-4 text-neon-purple">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  <TechIcon name="C/C++" color="#00599C">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#00599C" width="28" height="28">
                      <path d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.31.72-4.08 2-5.32C4.32 5.64 5.96 5 7.94 5c.75 0 1.4.07 1.94.19s.94.25 1.2.4l-.58 2.49-1.06-.34c-.4-.1-.86-.15-1.39-.15-1.16-.01-2.12.36-2.87 1.1-.76.73-1.15 1.85-1.18 3.34 0 1.36.37 2.42 1.08 3.2.71.77 1.71 1.17 2.99 1.18l1.33-.12c.43-.08.79-.19 1.1-.32z" />
                      <path d="M12.99 14.95h3V5.15h-3v9.8zm7.45-8.7v2.8h2.8v2.4h-2.8v2.8h-2.4v-2.8h-2.8v-2.4h2.8v-2.8h2.4z"/>
                    </svg>
                  </TechIcon>
                  
                  <TechIcon name="Python" color="#3776AB">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3776AB" width="28" height="28">
                      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
                    </svg>
                  </TechIcon>
                  
                  <TechIcon name="JavaScript" color="#F7DF1E">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F7DF1E" width="28" height="28">
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                    </svg>
                  </TechIcon>
                </div>
              </div>
              
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold mb-4 text-neon-orange">Frontend</h3>
                <div className="flex flex-wrap gap-4">
                  <TechIcon name="HTML" color="#E34F26">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E34F26" width="28" height="28">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                    </svg>
                  </TechIcon>
                  
                  <TechIcon name="CSS" color="#1572B6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1572B6" width="28" height="28">
                      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/>
                    </svg>
                  </TechIcon>
                  
                  <TechIcon name="React.js" color="#61DAFB">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#61DAFB" width="28" height="28">
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405.927-.676 1.947-.2-.392-.41-.783-.635-1.174-.225-.397-.465-.783-.704-1.16zm-3.635 3.751l.348-.089c.264-.067.531-.124.798-.17a10.51 10.51 0 0 0-.318-.544 9.65 9.65 0 0 0-.347-.548c-.128.206-.264.417-.393.629-.125.217-.237.431-.346.643l.258.079zm-1.674-.324c.213-.016.422-.031.632-.042.207-.01.418-.018.631-.018.213 0 .425.006.633.018.217.01.417.025.617.042a11.36 11.36 0 0 0-.925-.804 11.17 11.17 0 0 0-.931-.778c-.32.256-.635.518-.939.793-.306.276-.607.562-.908.856.293-.012.59-.03.893-.044.3-.012.588-.022.877-.023zm3.092 1.1c.156.292.303.591.442.9.143.306.28.619.409.938a13.746 13.746 0 0 0 .628-1.161 13.87 13.87 0 0 0 .596-1.212 13.94 13.94 0 0 0-.607-.099 13.38 13.38 0 0 0-.633-.059c-.307 0-.612.015-.909.048-.3.03-.611.073-.917.134.165.193.327.395.486.605.16.213.32.425.495.636zm-4.603.386c.17-.21.332-.412.49-.61.16-.199.32-.402.48-.595-.306-.061-.618-.104-.917-.134a11.62 11.62 0 0 0-.922-.048c-.219.001-.435.014-.652.033-.22.019-.425.049-.633.086.182.392.381.778.597 1.158.22.379.446.758.682 1.134l.09-.183c.15-.304.296-.603.435-.89zm2.241 2.433c.129-.205.272-.407.415-.605l.44-.59c-.299.03-.6.053-.901.079-.3.023-.602.039-.905.039-.319 0-.636-.018-.95-.048-.315-.03-.639-.076-.963-.138.287.378.577.751.904 1.111.326.36.66.704 1.011 1.036.175-.186.349-.379.516-.579.168-.202.33-.405.492-.615zm-2.09.94l.584-1.68a13.506 13.506 0 0 0-.916-.277 12.91 12.91 0 0 0-.905-.193c.045.348.13.695.233 1.04.103.342.224.683.365 1.019.358-.15.718-.296 1.079-.443l-.441-1.136zm3.09-1.68l.001-.001-.001.001zm-3.09 1.68l.001-.001-.001.001zm3.09-1.68l-.44 1.136c.36.147.72.293 1.078.443.141-.336.262-.677.366-1.019a6.62 6.62 0 0 0 .233-1.04c-.292.054-.596.122-.907.193-.309.073-.616.17-.916.277l-.585 1.68zm.88-3.17a14.8 14.8 0 0 1-1.014-.933c-.337-.341-.654-.72-.923-1.121-.269.401-.586.78-.923 1.121a14.8 14.8 0 0 1-1.014.933c.294.319.598.629.916.923.321.292.66.559 1.021.802.361-.243.701-.51 1.021-.802.318-.294.622-.604.916-.923zm.729-5.32v.002l-.002-.002zm-5.277 0l.002.002-.002-.002z"/>
                    </svg>
                  </TechIcon>
                </div>
              </div>

              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold mb-4 text-neon-teal">Backend & Database</h3>
                <div className="flex flex-wrap gap-4">
                  <TechIcon name="Supabase" color="#3ECF8E">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3ECF8E" width="28" height="28">
                      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424c-.192.263-.044.618.233.618h9.363v8.959a.396.396 0 0 0 .716.233l9.082-12.26c.192-.264.043-.62-.233-.62zM12 12.5H4.06L12 2.426V12.5zm0 9.075l-7.94-10.075H12v10.075z"/>
                    </svg>
                  </TechIcon>
                  
                  <TechIcon name="Node.js" color="#339933">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#339933" width="28" height="28">
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M18.14,13.149 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C16.56,16.163,18.14,15.057,18.14,13.149z"/>
                    </svg>
                  </TechIcon>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Experience</SectionHeading>
            
            <div className="mt-12 space-y-8">
              <ExperienceCard
                position="Web Development Intern"
                company="TechStartup Inc."
                duration="May 2023 - Aug 2023"
                location="Remote"
                descriptions={[
                  "Developed responsive web applications using React.js and Tailwind CSS",
                  "Collaborated with design team to implement UI/UX improvements",
                  "Participated in daily stand-up meetings and weekly code reviews"
                ]}
              />
              
              <ExperienceCard
                position="Project Lead"
                company="College Tech Club"
                duration="Jan 2023 - Present"
                location="Chennai, India"
                descriptions={[
                  "Leading a team of 5 developers to build a campus event management app",
                  "Implementing CI/CD pipelines and code quality standards",
                  "Organizing biweekly team meetings and technical workshops"
                ]}
              />
            </div>
          </div>
        </section>
        
        {/* Projects section */}
        <section id="projects" className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Projects</SectionHeading>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="E-Commerce Dashboard"
                description="A comprehensive dashboard for e-commerce analytics with real-time data visualization."
                techStack={["React", "Chart.js", "Firebase"]}
                githubLink="https://github.com/sammy-314/ecommerce-dashboard"
              />
              
              <ProjectCard
                title="Task Manager API"
                description="RESTful API for task management with user authentication and task categorization."
                techStack={["Node.js", "Express", "MongoDB"]}
                githubLink="https://github.com/sammy-314/task-manager-api"
              />
              
              <ProjectCard
                title="Weather App"
                description="A weather forecasting application with location-based services and hourly updates."
                techStack={["React Native", "OpenWeatherAPI", "Styled Components"]}
                githubLink="https://github.com/sammy-314/weather-app"
              />
            </div>
          </div>
        </section>

        {/* Database section */}
        <section id="database" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Database</SectionHeading>
            
            <div className="mt-8 glass-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-neon-teal">Powered by Supabase</h3>
              <p className="text-white/80 mb-6">
                This portfolio is backed by Supabase - an open source Firebase alternative that provides all the backend 
                services you need to build a product. From database to authentication, storage to serverless functions.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-white/10 p-4 rounded-lg flex-1 min-w-[250px]">
                  <h4 className="font-bold mb-2">PostgreSQL Database</h4>
                  <p className="text-sm text-white/70">
                    Utilizing the power of PostgreSQL for data storage and management with Row Level Security.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex-1 min-w-[250px]">
                  <h4 className="font-bold mb-2">Authentication</h4>
                  <p className="text-sm text-white/70">
                    Secure user authentication with multiple sign-in options and session management.
                  </p>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg flex-1 min-w-[250px]">
                  <h4 className="font-bold mb-2">Storage</h4>
                  <p className="text-sm text-white/70">
                    File storage solution for managing user uploads and media content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <SectionHeading>Get In Touch</SectionHeading>
            
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-white/80 mb-6">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-neon-teal" size={20} />
                    <span>samyakt6@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-neon-teal" size={20} />
                    <span>+91 123-456-7890</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Github className="text-neon-teal" size={20} />
                    <a 
                      href="https://github.com/sammy-314" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-neon-teal transition-colors"
                    >
                      github.com/sammy-314
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Linkedin className="text-neon-teal" size={20} />
                    <a 
                      href="https://www.linkedin.com/in/samyak-tripathi-97bab3251/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-neon-teal transition-colors"
                    >
                      linkedin.com/in/samyak-tripathi
                    </a>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Samyak Tripathi. All rights reserved.</p>
            <p className="mt-2">Built with React, Tailwind CSS, and ❤️</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
