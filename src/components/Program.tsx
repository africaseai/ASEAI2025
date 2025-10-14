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

          {/* Talks List */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { speaker: "Prof. Ahmed E. Hassan", title: "The AIware Revolution: Forging the Future of Agentic Software Engineering" },
                { speaker: "Prof. Lionel Briand", title: "Why and How to get a PhD?\nAutomated Testing and Safety Analysis of Deep Learning Systems" },
                { speaker: "Prof. Houari Sahraoui", title: "No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks" },
                { speaker: "Prof. Katsuro Inoue", title: "Code Clones and Beyond: My Reflections on Software Engineering Research" },
                { speaker: "Dr. Fatemeh H. Fard", title: "LLM-Based Agents for Software Engineering: Benefits and Drawbacks" },
                { speaker: "Prof. Raula Gaikovina Kula", title: "Collaborations Result in Diverse Thinking, Novelty and Different Perspectives" },
                { speaker: "Dr. Sarah Nadi", title: "The Chronicles of a Professor\nNavigating Graduate School and Beyond" },
                { speaker: "Prof. Simon Peyton Jones", title: "How to write a great research paper?" },
                { speaker: "Prof. Walid Maalej", title: "On Hard and Soft Skills for Surviving Your PhD Journey\nGenerative Requirements Engineering and Design" },
                { speaker: "Prof. Michel R. V. Chaudron", title: "On Software Architecture" },
                { speaker: "Prof. Yann-Gaël Guéhéneuc", title: "TBA" },
                { speaker: "Prof. Bruce R. Maxim", title: "Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice" },
                { speaker: "Dr. Moataz Chouchen", title: "Automating Code Review: From Heuristics to Agentic AI" },
                { speaker: "Dr. Mohamed Aymen Saied", title: "TBA" },
              ].map((talk, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-semibold text-lg text-foreground">{talk.speaker}</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{talk.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
