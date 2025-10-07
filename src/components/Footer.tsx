const footerSections = [
  {
    title: "Use Cases",
    links: ["For Customers", "For Teams", "For Leaders"]
  },
  {
    title: "Solutions",
    links: ["Recruit AI", "Hospital AI", "Finance AI", "Dashboard AI", "Voice AI", "Industry 4.0 AI"]
  },
  {
    title: "Services",
    links: ["Integration", "Consulting & Strategy", "Implementation", "Deployment & Support"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partnerships", "Contact"]
  },
  {
    title: "Resources",
    links: ["Blog", "Webinars", "Academy", "Guides", "Docs"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-primary-foreground rounded-sm" />
              </div>
              <span className="font-bold text-lg">GulfAI</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2025 GulfAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
