import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Code2,
  Server,
  Smartphone,
  GitBranch,
  Palette,
  Cog,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState } from "react";

const skills = [
  {
    icon: Palette,
    title: "Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Responsive Design",
      "Prototyping",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: [
      "React Native",
      "Flutter",
      "Android (Kotlin)",
      "iOS (Swift)",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Firebase",
      "REST APIs",
      "Express",
      "MongoDB",
    ],
  },

  {
    icon: GitBranch,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Jenkins", "CI/CD", "AWS"],
  },

  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      "React",
      "Angular",
      "Flutter",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: Cog,
    title: "Other Skills",
    skills: [
      "Agile/Scrum",
      "Testing",
      "Performance Optimization",
      "Problem Solving",
    ],
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 200,
    damping: 25,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 200,
    damping: 25,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"],
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        rotateX: isHovered ? rotateX : "0deg",
        rotateY: isHovered ? rotateY : "0deg",
        scale: isHovered ? 1.05 : 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-300 ease-out"
    >
      <Card
        className="h-full border-none shadow-lg"
        style={{
          boxShadow: "0 10px 30px rgba(0, 173, 181, 0.2)",
          transform: "translateZ(20px)",
        }}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#00ADB5]/10 rounded-lg">
              <skill.icon
                className="text-[#00ADB5]"
                size={24}
              />
            </div>
            <h3 className="text-[#222831]">{skill.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.skills.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="bg-[#393E46] text-white hover:bg-[#393E46]/90"
              >
                {s}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="py-20 bg-[#EEEEEE]" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#222831]">
            What I Bring to the Table
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set built over 3+ years of
            hands-on experience
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}