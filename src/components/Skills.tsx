import { Code2, Palette, Database, Smartphone, Cloud, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, User Research, Prototyping",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Progressive Web Apps",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, CI/CD, Kubernetes",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Web Vitals, Accessibility",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-primary">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications from concept to deployment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;