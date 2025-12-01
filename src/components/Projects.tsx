import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
 title: "G20 India Official Website",
    client: "Government of India",
    description:
      "Contributed as UI/UX designer for India's G20 Presidency website, collaborating on creating an intuitive and culturally rich digital experience for global audiences.",
    problem:
      "Needed a design system that could represent India's heritage while ensuring accessibility and usability for international visitors.",
    solution:
      "Collaborated on wireframes, prototypes, and design systems with focus on multilingual support, accessibility standards, and responsive layouts.",
     tech: [
      "Figma",
      "Prototyping",
      "Design Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1624357488027-f2235d56bae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwd2Vic2l0ZSUyMHN1bW1pdHxlbnwxfHx8fDE3NjQ1OTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "https://www.g20.in/",
    githubLink: "#",
  },
  {
    title: "SHV Energy Corporate Website",
    client: "SHV Energy",
    description:
      "Worked as UI/UX designer on global energy leader's website, contributing to user-centric interface design balancing corporate professionalism with modern web design principles.",
    problem:
      "Required a sophisticated design that communicates trust and sustainability while maintaining excellent user experience across all devices.",
    solution:
      "Contributed to information architecture, high-fidelity mockups, and interactive prototypes ensuring consistent brand experience globally.",
    tech: [
      "Figma",
      "User Research",
      "Wireframing",
      "UI Design",
    ],
    image:
      "https://images.unsplash.com/photo-1759109391527-11b6adf2cc5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBjb21wYW55JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjQ1OTMxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    demoLink: "https://www.shvenergy.com/",
    githubLink: "#",
  },
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
                  
                  {/* <div className="bg-[#00ADB5]/10 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-[#00ADB5]" size={16} />
                      <p className="text-sm text-[#222831]">Results</p>
                    </div>
                    <p className="text-sm text-gray-700">{project.results}</p>
                  </div> */}
                  
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
                  {/* <Button
                    size="sm"
                    variant="outline"
                    className="border-[#00ADB5] text-[#00ADB5] hover:bg-[#00ADB5]/10"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github size={16} />
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
