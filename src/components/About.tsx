import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, Coffee, Code, Zap } from "lucide-react";
import profileImage from "figma:asset/247e1217007296feac411d6f53e52efb067d3de3.png";

export function About() {
  return (
    <section className="py-20 bg-[#EEEEEE]" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#222831]">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            More than just code—crafting experiences that matter
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00ADB5] rounded-2xl transform rotate-6"></div>
                <img
                  src={profileImage}
                  alt="Developer Portrait"
                  className="relative z-10 rounded-2xl w-full h-auto shadow-xl"
                  style={{ transform: 'rotate(180deg)' }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl text-[#222831] mb-4">
                  Hi, I'm a developer obsessed with clean code and user-centric design
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Over 3 years, I've delivered impactful projects for clients in healthcare, 
                  fintech, and e-commerce. My approach combines technical expertise with a 
                  deep understanding of user needs to create applications that don't just 
                  work—they delight.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or enjoying a good cup of coffee while sketching 
                  out the next big idea.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Code className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-[#222831]">3+</p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Zap className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-[#222831]">15+</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
                      <Coffee className="text-[#00ADB5]" size={24} />
                    </div>
                  </div>
                  <p className="text-2xl text-[#222831]">∞</p>
                  <p className="text-sm text-gray-600">Coffees</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-[#00ADB5] hover:bg-[#00ADB5]/90"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
