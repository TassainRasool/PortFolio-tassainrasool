import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "figma:asset/247e1217007296feac411d6f53e52efb067d3de3.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#222831] to-[#393E46] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ADB5] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00ADB5] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00ADB5] rounded-full blur-xl opacity-50"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#00ADB5] shadow-2xl"
                style={{ transform: 'rotate(180deg)' }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6">
              Turning Ideas into<br />
              <span className="text-[#00ADB5]">Digital Solutions</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            3+ Years Crafting Scalable Apps
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-[#00ADB5] hover:bg-[#00ADB5]/90"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              className="bg-[#00ADB5] hover:bg-[#00ADB5]/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a href="https://github.com/TassainRasool" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/trm0229" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:iamtassain@gmail.com" className="text-gray-400 hover:text-[#00ADB5] transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-[#00ADB5]" size={32} />
      </motion.div>
    </section>
  );
}
