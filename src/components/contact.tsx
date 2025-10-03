import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="text-transparent bg-clip-text bg-gradient-primary">Connect</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
        </p>

        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="text-center mb-8">
            <a
              href="mailto:alex.johnson@example.com"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-primary hover:opacity-80 transition-opacity"
            >
              <Mail className="w-8 h-8 text-primary" />
              alex.johnson@example.com
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild className="hover:border-primary hover:shadow-glow transition-all">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:border-primary hover:shadow-glow transition-all">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:border-primary hover:shadow-glow transition-all">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:alex.johnson@example.com">Send Me a Message</a>
            </Button>
          </div>
        </div>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2025 Alex Johnson. Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;