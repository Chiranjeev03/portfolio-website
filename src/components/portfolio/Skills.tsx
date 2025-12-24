const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "Groovy", "SQL", "TypeScript"],
    },

    {
      title: "Databases",
      skills: ["OracleSQL", "MySQL", "PostgreSQL", "MongoDB"],
    },

    {
      title: "Frontend",
      skills: ["React Native", "Tailwind CSS", "Bootstrap", " HTML5", "CSS3"],
    },

    {
      title: "AI/ML",
      skills: ["Llama", "Hugging Face", "PyTorch", "transformers", "Scikit-learn", "NLP", "TensorFlow"],
    },

    {
      title: "Concepts",
      skills: ["DSA", "SDLC", "OOP", "Design Patterns", "Agile"],
    },

    {
      title: "Backend",
      skills: ["SOAP & REST APIs", "Node.js", "GraphQL", "OUAF"],
    },

  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable systems and intelligent applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
