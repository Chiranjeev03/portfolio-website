import { Code2, Server, Brain, Zap, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Major",
      description: "Graduated from PICT, Pune (2025)",
    },
    {
      icon: Code2,
      title: "Strong DSA",
      description: "Problem-solving expertise",
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "Enterprise-grade architecture",
    },
    {
      icon: Brain,
      title: "Applied AI",
      description: "ML & intelligent systems",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate software developer focused on building robust, scalable backend systems that power modern applications. With a strong foundation in Data Structures and Algorithms, I approach complex problems methodically and efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans enterprise backend development, where I've learned to design systems that handle real-world demands. I'm particularly enthusiastic about the intersection of software engineering and AI, exploring how intelligent models can enhance traditional applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies. I continuously learn to stay current with modern software development.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
