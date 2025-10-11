const Program = () => {
  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Winter School Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Announcement */}
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              The detailed program will be announced soon. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
