const Speakers = () => {
  return (
    <section id="speakers" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Speakers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground">
            Plenary speakers who are active researchers in North American and international institutes
          </p>
          <div className="pt-8">
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
