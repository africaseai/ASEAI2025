const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">ASEAI 2025</h3>
          <p className="text-background/80">
            1st African Winter School on Software Engineering & AI
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-background/70">
            <span>November 24-26, 2025</span>
            <span className="hidden md:inline">•</span>
            <span>Novation City, Sousse, Tunisia</span>
          </div>
          <div className="pt-6 border-t border-background/20">
            <p className="text-sm text-background/60">
              © {currentYear} ASEAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
