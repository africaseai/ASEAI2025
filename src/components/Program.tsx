const Program = () => {
  return (
    <section id="program" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Winter School Program</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-muted-foreground text-lg">
              The full program will be announced soon. Below are the confirmed talks:
            </p>
          </div>

          {/* Talks List */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { speaker: "Pr. Ahmed E. Hassan", title: "The AIware Revolution: Forging the Future of Agentic Software Engineering" },
                { speaker: "Pr. Lionel Briand", title: "Why and How to get a PhD?\nAutomated Testing and Safety Analysis of Deep Learning Systems" },
                { speaker: "Pr. Katsuro Inoue", title: "Code Clones and Beyond: My Reflections on Software Engineering Research" },
                { speaker: "Pr. Houari Sahraoui", title: "No Size Fits All: Goal-Driven Alignment of LLMs for Software Engineering Tasks" },
                { speaker: "Pr. Yann-Gaël Guéhéneuc", title: "About Empirical Studies on Software Quality" },
                { speaker: "Pr. Walid Maalej", title: "On Hard and Soft Skills for Surviving Your PhD Journey\nGenerative Requirements Engineering and Design" },
                { speaker: "Dr. Sarah Nadi", title: "Navigating Graduate School and Beyond\nThe Chronicles of a Professor" },
                { speaker: "Pr. Simon Peyton Jones", title: "How to write a great research paper" },
                { speaker: "Pr. Michel Chaudron", title: "On Software Architecture" },
                { speaker: "Dr. Zadia Codabux", title: "Phinally Done: Life Beyond the Ivory Tower" },
                { speaker: "Dr. Fatemeh Fard", title: "LLM-Based Agents for Software Engineering: Benefits and Drawbacks" },
                { speaker: "Pr. Hafedh Mili", title: "Towards a framework for the development of SPAs (smart process applications)" },
                { speaker: "Pr. Raula Gaikovina Kula", title: "Collaborations Result in Diverse Thinking, Novelty and Different Perspectives" },
                { speaker: "Pr. Bruce R. Maxim", title: "Human in the Loop: Responsible Use of Generative AI Tools in Software Engineering Practice" },
                { speaker: "Ms. Fatima Tambajang", title: "Kickstart Your AI Journey with NVIDIA's Free Learning Resources" },
                { speaker: "Dr. Manel Abdellatif", title: "Ensuring Trust: Testing and Safety Monitoring of Deep Learning-based Systems" },
                { speaker: "Dr. Moataz Chouchen", title: "Automating Code Review: From Heuristics to Agentic AI" },
                { speaker: "Dr. Mohamed Aymen Saied", title: "From Monolith to Microservices — A Journey Powered by LLMs and the Open Challenges Ahead" },
                { speaker: "Dr. Alvine Boaye Belle", title: "System assurance in the era of Large Language Models" },
                { speaker: "Mr. Prasun Lala", title: "11 steps to structuring a manuscript\nThink like a reviewer" },
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
