import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "E-Commerce Mobile App",
    client: "Fashion Startup",
    description: "Built with Flutter & Firebase for real-time inventory management and seamless checkout experience.",
    problem: "Client needed a fast, modern mobile app to compete in the fashion e-commerce space.",
    solution: "Developed a cross-platform app with real-time inventory, push notifications, and integrated payment gateway.",
    results: "Reduced checkout time by 30% | 50k+ downloads | 4.8★ rating",
    tech: ["Flutter", "Firebase", "REST API", "Stripe"],
    image: "https://images.unsplash.com/photo-1758526213756-9aecbea6bcfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGFwcHxlbnwxfHx8fDE3NjAzMzc0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Healthcare Dashboard",
    client: "Medical Clinic",
    description: "A comprehensive web dashboard for patient management, appointment scheduling, and medical records.",
    problem: "Clinic struggled with paper-based records and manual appointment scheduling.",
    solution: "Created a React-based dashboard with real-time updates, secure data storage, and automated reminders.",
    results: "Improved efficiency by 40% | Reduced no-shows by 25%",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMzYxMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    client: "Tech Startup",
    description: "Cross-platform mobile app for team collaboration and project tracking with offline support.",
    problem: "Remote teams needed a reliable tool that works offline and syncs automatically.",
    solution: "Built with React Native and implemented offline-first architecture with background sync.",
    results: "10k+ active users | 95% user satisfaction",
    tech: ["React Native", "Firebase", "Redux", "AsyncStorage"],
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYwMzQxMzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "#",
    githubLink: "#"
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#222831]">My Work Speaks Louder</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real projects. Real results. See how I've helped clients bring their ideas to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-[#222831] mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.client}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-[#222831] mb-1">Problem:</p>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#222831] mb-1">Solution:</p>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#00ADB5]/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-[#00ADB5]" size={16} />
                      <p className="text-sm text-[#222831]">Results</p>
                    </div>
                    <p className="text-sm text-gray-700">{project.results}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-[#00ADB5] text-[#00ADB5]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#00ADB5] hover:bg-[#00ADB5]/90 flex-1"
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5]/10"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
