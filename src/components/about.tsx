const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-primary">Me</span>
        </h2>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card backdrop-blur-sm border border-border">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of experience building web applications 
            that combine elegant design with powerful functionality. My journey in tech started with a curiosity 
            about how things work, and has evolved into a career dedicated to creating meaningful digital experiences.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community through blog posts and talks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;