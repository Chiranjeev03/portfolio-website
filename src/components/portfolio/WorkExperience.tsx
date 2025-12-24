import { Briefcase, Calendar, HandCoins, icons, MapPin, SearchCode, Smartphone } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      icon: HandCoins,
      title: "ORMB Developer",
      company: "RIA Advisory (Oracle Gold Partner)",
      location: "Pune, India",
      period: "Jul 2025 - Present",
      description: [
        "Development of ORMB (Financial Product), a comprehensive banking solution",
        "Implemented backend services using Java and Oracle SQL",
        "Handled API integrations and automated testing using RESTful APIs, Postman, Selenium, and JUnit",
        "Collaborated with cross-functional teams accross the globe",
      ],
      tags: ["Java", "Oracle SQL", "RESTful API", "Postman", "Selenium", "JUnit", "OUAF"],
    },
    {
      icon: Smartphone,
      title: "Software Engineer Intern",
      company: "Joylane",
      location: "Nashik, India",
      period: "Apr 2025 - Jun 2025",
      description: [
        "Developed a mobile app combining short-form content and e-commerce shopping.",
        "Implemented user authentication via node.js backend",
        "Built UI components with React Native",
      ],
      tags: ["React Native", "TypeScript", "PostgreSQL", "GraphQL", "Git", "GitHub"],
    },
    {
      icon: SearchCode,
      title: "Research & Development Intern (AI)",
      company: "Reverie Language Technologies",
      location: "Bengaluru, India",
      period: "Aug 2024 - March 2025",
      description: [
        "Studied and implemented Large Language Models (LLMs) for text generation tasks",
        "Data Engineering: Collected, cleaned, and preprocessed large-scale company-provided text datasets.",
        "model Fine-Tuning: Fine-tuned pre-trained LLMs (like LLaMA) using frameworks such as Hugging Face and PyTorch",
      ],
      tags: ["Python", "Huggingface", "Llama", "PyTorch", "transformers"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                {/* Content */}
                <div className="md:w-1/2" />
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
